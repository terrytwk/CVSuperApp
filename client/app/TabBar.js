import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import posed from 'react-native-pose';

const windowWidth = Dimensions.get('window').width;
const tabWidth = windowWidth / 2;
const SpotLight = posed.View({
    route0: {
        x: 0,
        transition: { type: 'tween' }
    },
    route1: {
        x: tabWidth,
        transition: { type: 'tween' }
    }
});

const Scaler = posed.View({
    active: {
        scale: 1,
        transition: { type: 'spring', stiffness: 150 }
    },
    inactive: {
        scale: 0.725,
        transition: { type: 'spring', stiffness: 150 }
    }
});

const TabBar = props => {
    const {
        renderIcon,
        getLabelText,
        activeTintColor,
        inactiveTintColor,
        onTabPress,
        onTabLongPress,
        getAccessibilityLabel,
        navigation
    } = props;

    const { routes, index: activeRouteIndex } = navigation.state;

    return (
        <View style={ styles.container }>
            <View style={ StyleSheet.absoluteFillObject }>
                <SpotLight style={{ ...styles.spotLight, borderColor: '#e6e6e6' }} pose={ `route${activeRouteIndex}` } />
            </View>
            { routes.map((route, routeIndex) => {
                const isRouteActive = routeIndex === activeRouteIndex;

                let tintColor = inactiveTintColor;
                let iconFont = 'fa-regular';
                if (isRouteActive) {
                    tintColor = activeTintColor;
                    iconFont = 'fa-solid';
                }

                return (
                    <TouchableOpacity
                        key={ routeIndex }
                        style={{ ...styles.tabButton, borderColor: tintColor }}
                        onPress={ () => {
                          onTabPress({ route });
                        } }
                        onLongPress={ () => {
                          onTabLongPress({ route });
                        } }
                        accessibilityLabel={getAccessibilityLabel({ route })}
                    >
                            <Scaler pose={ isRouteActive ? 'active' : 'inactive' }>
                                <Text style={{ ...styles.icon, color: tintColor, fontFamily: iconFont }}>
                                    { renderIcon({ route, focused: isRouteActive, tintColor }) }
                                </Text>
                            </Scaler>
                            <Text style={{ ...styles.label, color: tintColor }}>{getLabelText({ route })}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#364f6ba6',
        flexDirection: 'row',
        height: 60,
        paddingTop: 5
    },
    tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: -5,
        borderBottomWidth: 3,
        paddingBottom: 2
    },
    icon: {
        fontSize: 34,
    },
    label: {
        fontFamily: 'SegoeUI',
        fontSize: 10
    },
    spotLight: {
        width: tabWidth,
        height: 70,
        //backgroundColor: '#3e5d80',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 1,
        top: -5
    }
});

export default TabBar;
