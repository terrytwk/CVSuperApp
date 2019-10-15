import React from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import { name as appName } from './app.json';
import { createMaterialTopTabNavigator, createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './app/Login';
import Map from './app/Map';
import ID from './app/Schedule';

import TabBar from './app/TabBar'

const MainStack = createMaterialTopTabNavigator(
    {
        Map: {
            screen: Map,
            navigationOptions: {
                tabBarIcon: ''
            }
        },
        ID: {
            screen: ID,
            navigationOptions: {
                tabBarIcon: ''
            }
        }
    },
    {
        initialRouteName: 'Map',
        tabBarComponent: TabBar,
        tabBarOptions: {
            activeTintColor: '#3fc1c9',
            inactiveTintColor: '#f5f5f5',
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        backBehavior: 'history'
    }
);

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        Main: MainStack,
        Auth: Login
    },
    {
        // initialRouteName: 'Auth',
        initialRouteName: 'Main',
    }
));

class App extends React.Component {
    render() {
        return (
            <AppContainer />
        )
    }
}

console.log(AppRegistry);
AppRegistry.registerComponent(appName, () => App);
