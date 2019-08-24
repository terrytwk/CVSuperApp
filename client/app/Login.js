// React and built-in React components
import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, ImageBackground, Animated } from 'react-native';

// Misc imports
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from 'apsl-react-native-button';
import SplashScreen from 'react-native-splash-screen';
import SInfo from 'react-native-sensitive-info';;

// Configuring Google OAuth
import { authorize } from 'react-native-app-auth';
import oauthConfig from './config/oauth';

// Custom React components
import PopDown from './components/PopDown';
import FadeIn from './components/FadeIn';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            isAuthorizing: false,
            authError: '',
            authErrorTimer: new Animated.Value(0)
        };
    }

    async _setStorage(data) {
        console.log(data);
        if (data.email.split('@')[1] == 'stu.gusd.net') {
            const storageConfig = {
                sharedPreferencesName: 'shared_prefs',
                keychainService: 'stuhub'
            };
            await SInfo.setItem('email', data.email, storageConfig);
            await SInfo.setItem('name', data.name, storageConfig);
            await SInfo.setItem('given_name', data.given_name, storageConfig);
            await SInfo.setItem('family_name', data.family_name, storageConfig);
            await SInfo.setItem('picture', data.picture, storageConfig);
            this.setState({ isAuthorizing: false });
            this.props.navigation.navigate('Map');
        }
        else {
            this.setState({
                authError: 'Only @stu.gusd.net Allowed',
                authErrorTimer: new Animated.Value(30),
                isAuthorizing: false
            });
            Animated.spring(
                this.state.authErrorTimer,
                {
                    toValue: 0,
                    tension: 60,
                    friction: 2,
                    useNativeDriver: true
                }
            ).start();
        }
    }

    async _googleAuth() {
        this.setState({ isAuthorizing: true });
        try {
            const authState = await authorize(oauthConfig());
            fetch('https://openidconnect.googleapis.com/v1/userinfo?access_token=' + authState.accessToken)
                .then(res => res.json())
                .then(data => this._setStorage(data));
        }
        catch (err) {
            this.setState({
                authError: 'There was an error during login',
                authErrorTimer: new Animated.Value(30),
                isAuthorizing: false
            });
            Animated.spring(
                this.state.authErrorTimer,
                {
                    toValue: 0,
                    tension: 60,
                    friction: 2,
                    useNativeDriver: true
                }
            ).start();
        }
    }

    render() {
        let { authError } = this.state;
        return (
            <ImageBackground onLoadEnd={ () => { SplashScreen.hide(); } } fadeDuration={ 0 } source={ require('./assets/background.jpg') } style={ styles.fill, styles.background }>
                <FadeIn style={ styles.fadeIn }>
                    <PopDown style={ styles.fill }>
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                            <View style={ styles.container }>
                                <Image style={ styles.icon } source={ require('./assets/falcon.png') } />

                                <Text style={ styles.school }>Crescenta Valley High School</Text>
                                <Text style={ styles.title }>Student<Text style={{ color: '#f5f5f5' }}>Hub</Text></Text>

                                <Animated.View
                                    style={{
                                        ...styles.googleView,
                                        transform: [
                                            { 'translateX': this.state.authErrorTimer }
                                        ]
                                    }}
                                >
                                    <Button
                                        style={{
                                            ...styles.googleButton,
                                        }}
                                        isDisabled={ this.state.isAuthorizing }
                                        onPress={ () => this._googleAuth() }
                                    >
                                        <Image source={ require('./assets/google-favicon.png') } style={ styles.googleIcon } resizeMode={ 'contain' } /><Text style={ styles.googleText }>Sign in with GUSD</Text>
                                    </Button>
                                </Animated.View>

                                <Text style={{ ...styles.small, color: 'red' }}>{ authError }</Text>
                                <Text style={ styles.small }>Only @stu.gusd.net Accounts Accepted</Text>
                            </View>
                        </ScrollView>

                        <View style={ styles.footer }>
                            <Text style={ styles.small }>CV ENTERPRISE</Text>
                        </View>
                    </PopDown>
                </FadeIn>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: wp('15%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    fadeIn: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        padding: 5,
        alignItems: 'center'
    },
    fill: {
        width: '100%',
        height: '100%'
    },
    background: {
        resizeMode: 'cover'
    },
    icon: {
        width: wp('40%'),
        height: wp('40%'),
        resizeMode: 'contain',
        opacity: 0.65
    },
    school: {
        fontFamily: 'SegoeUI',
        letterSpacing: 2,
        color: '#f5f5f5'
    },
    title: {
        letterSpacing: 2,
        fontSize: 34,
        color: '#3fc1c9',
        fontWeight: 'bold',
        opacity: 0.65
    },
    googleView: {
        width: '100%',
        margin: 0
    },
    googleIcon: {
        height: 25,
        width: 25,
        marginRight: 10
    },
    googleButton: {
        margin: 15,
        borderRadius: 100,
        borderWidth: 0,
        backgroundColor: '#f5f5f5',
        borderColor: 'red'
    },
    googleText: {
        fontFamily: 'SegoeUI',
        fontSize: 20,
        color: '#808080',
        textAlign: 'left',
        paddingBottom: 1,
    },
    small: {
        fontFamily: 'SegoeUI',
        letterSpacing: 1,
        fontSize: 10,
        color: '#f5f5f5'
    }
});

export default Login;
