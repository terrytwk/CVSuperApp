// React and built-in React components
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Misc imports
import SplashScreen from 'react-native-splash-screen';
import MapView, { Marker } from 'react-native-maps';

// Custom React components
import FadeIn from './components/FadeIn';

class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            markers: {
                buildings: {
                    color: '#479698',
                    markers: [
                        {
                            latlng: [ 34.223786, -118.243196 ],
                            title: '1000',
                            description: 'Main Entrance and Faculty Offices'
                        },
                        {
                            latlng: [ 34.223935, -118.243702 ],
                            title: '2000',
                            description: 'Science and Social Science'
                        },
                        {
                            latlng: [ 34.223285, -118.243778 ],
                            title: '3000',
                            description: 'Auditorium and Music Wing'
                        },
                        {
                            latlng: [ 34.223131, -118.243390 ],
                            title: '4000',
                            description: 'Falcon Art'
                        },
                        {
                            latlng: [ 34.222818, -118.243256 ],
                            title: '5000',
                            description: 'English'
                        },
                        {
                            latlng: [ 34.222368, -118.243799 ],
                            title: '6000',
                            description: 'Gymnasium and Sports'
                        },
                        {
                            latlng: [ 34.222674, -118.242664 ],
                            title: '7000',
                            description: 'Foreign Language and Mathematics'
                        },
                        {
                            latlng: [ 34.223433, -118.242595 ],
                            title: '8000',
                            description: 'AFJROTC and Career Tech Education'
                        }
                    ],
                },
                special: {
                    color: '#e74c3c',
                    markers: [
                        {
                            latlng: [ 34.223487, -118.242799 ],
                            title: 'ASB',
                            description: 'CVHS Associated Student Body'
                        },
                        {
                            latlng: [ 34.223677, -118.242744 ],
                            title: 'Library',
                            description: 'Student Library for Borrowing Books'
                        }
                    ],
                },
                parking: {
                    color: '#2c3e50',
                    markers: [
                        {
                            latlng: [ 34.221800, -118.244080 ],
                            icon: '',
                            title: 'A',
                            description: 'Parking Lot A (Leads to Track)'
                        },
                        {
                            latlng: [ 34.223069, -118.244099 ],
                            icon: '',
                            title: 'B',
                            description: 'Parking Lot B (Faculty Parking)'
                        },
                        {
                            latlng: [ 34.224467, -118.243949 ],
                            icon: '',
                            title: 'C/D',
                            description: 'Parking Lot C/D (Faculty Parking)'
                        },
                        {
                            latlng: [ 34.223582, -118.242378 ],
                            icon: '',
                            title: 'E',
                            description: 'Parking Lot E (Faculty Parking)'
                        }
                    ]
                },
                eating: {
                    color: '#873600',
                    markers: [
                        {
                            latlng: [ 34.222922, -118.243045 ],
                            icon: '',
                            title: ''

                        },
                        {
                            latlng: [ 34.222843, -118.242535 ],
                            icon: '',
                            title: ''
                        }
                    ]
                },
                restrooms: {
                    color: '#3498db',
                    markers: [
                        {
                            latlng: [ 34.224087, -118.243579 ],
                            icon: '',
                            title: ''
                        },
                        {
                            latlng: [ 34.223081, -118.243022 ],
                            icon: '',
                            title: ''
                        },
                        {
                            latlng: [ 34.223721, -118.243238 ],
                            icon: '',
                            title: ''
                        }
                    ]
                }
            }
        };
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        let { markers } = this.state;
        return (
            <MapView
                style={ styles.map }
                mapType={ 'hybrid' }
                showsUserLocation={ true }
                showsPointsOfInterest={ false }
                region={{
                    latitude: 34.223089,
                    longitude: -118.243307,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0
                }}
                mapPadding={{ left: 0, right: 0, top: 0, bottom: 60 }}
            >
                {Object.values(markers).map(category => { return category.markers.map(marker => (
                    <Marker
                        key={ marker.latlng[0] + ', ' + marker.latlng[1] }
                        coordinate={{ latitude: marker.latlng[0], longitude: marker.latlng[1] }}
                        title={ marker.title }
                        description={ marker.description }
                    >
                        <View style={ styles.markerView }>
                            <View style={{ ...styles.markerSquare, backgroundColor: category.color }}>
                                <Text>
                                    <Text style={ styles.fa }>{ marker.icon }</Text>
                                    <Text style={ styles.marker }>{ marker.icon && marker.title ? ' ' + marker.title : marker.title }</Text>
                                </Text>
                            </View>
                            <View style={{ ...styles.markerTriangle, borderTopColor: category.color }} />
                        </View>
                    </Marker>
                ))})}
            </MapView>
        )
    }
}

const styles =  StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    markerView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    marker: {
        fontFamily: 'SegoeUI',
        color: '#ffffff',
        fontWeight: 'bold'
    },
    markerSquare: {
        borderRadius: 4,
        padding: 2
    },
    markerTriangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderTopWidth: 6,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
    },
    fa: {
        fontFamily: 'fa-solid'
    }
});

export default Map;
