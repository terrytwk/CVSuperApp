// React and built-in React components
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ID extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    card: {
        justifyContent: 'center',
        width: 425,
        height: 275, //the ratio of ID card is 8.5cm to 5.5cm 
        backgroundColor: '#FFFAFA'
    }
});

export default ID;
