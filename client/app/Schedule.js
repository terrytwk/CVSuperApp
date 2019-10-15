import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

const date = new Date().getDate();
const month = new Date().getMonth() + 1;


/*const data = [
    { key: '10/1'}, { key: 'B'}, { key: '10/2'}, { key: 'D'}, { key: '10/3'}, { key: 'Banking Day{"\n"}'}, { key: '10/4'}, { key: 'H'}, { key: '10/5'}, { key: 'J'}, { key: '10/6'}, { key: 'L'}
];*/

const data = [
    {
        key: '10/1',
        data: 'Banking day'
    },
    {
        key: '10/2',
        data: 'No School'
    },
    {
        key: '10/3',
        data: 'Banking day'
    },
    {
        key: '10/4',
        data: 'Banking day'
    },
    {
        key: '10/5',
        data: 'Banking day'
    },
    {
        key: '10/6',
        data: 'Banking day'
    },
    {
        key: '10/7',
        data: 'Banking day'
    },
    {
        key: '10/8',
        data: 'Banking day'
    },
    {
        key: '10/9',
        data: 'Banking day ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
    },
    {
        key: '10/10',
        data: 'Banking day'
    },
    {
        key: '10/11',
        data: 'Banking day'
    },
    {
        key: '10/12',
        data: 'Banking day'
    },
    {
        key: '10/13',
        data: 'Banking day'
    },    {
        key: '10/14',
        data: 'Banking day'
    },    {
        key: '10/15',
        data: 'Banking day'
    },    {
        key: '10/16',
        data: 'Banking day'
    },    {
        key: '10/17',
        data: 'Banking day'
    },    {
        key: '10/18',
        data: 'Banking day'
    },    {
        key: '10/19',
        data: 'Banking day'
    },    {
        key: '10/20',
        data: 'Banking day'
    },    {
        key: '10/21',
        data: 'Banking day'
    },    {
        key: '10/22',
        data: 'Banking day'
    },    {
        key: '10/23',
        data: 'Banking day'
    },    {
        key: '10/24',
        data: 'Banking day'
    },    {
        key: '10/25',
        data: 'Banking day'
    },    {
        key: '10/26',
        data: 'Banking day'
    },    {
        key: '10/27',
        data: 'Banking day'
    },    {
        key: '10/28',
        data: 'Banking day'
    },

];

const numColumns = 1;

export default class Schedule extends React.Component {
    renderItem = ({ item, index }) => {
        return (
             <View style={styles.dateElem}>
                <View
                    style={styles.dateItem}
                    >
                        <Text>{item.key}</Text>
                    </View>
                <View
                    style={styles.item}
                    >
                        <Text style={{color: 'black'}}>{item.data}</Text>
                    </View>
            </View>
        );
    };

    render() {
        return (
            <FlatList
                data={data}
                style={styles.container}
                renderItem={this.renderItem}                    
                numColumns={numColumns}
                    />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
        marginBottom: 70,
    },
    dateElem: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 10
    },
    item: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        //height: Dimensions.get('window').width / numColumns, //approximate a square
        borderWidth: 0.5,
        borderColor: '#479698',
        borderRadius: 10,
    },
    dateItem: {
        backgroundColor: '#2c3e50',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        //height: Dimensions.get('window').width / numColumns //approximate a square
        borderRadius: 10,
    },
    itemText: {
        color: '#fff',
    },
});