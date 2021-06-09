import React, { useState } from 'react'
import { SafeAreaView, View, FlatList, Text, StyleSheet, Alert } from 'react-native'


const dummyArray = [
    { id: '1', value: 'A' },
    { id: '2', value: 'B' },
    { id: '3', value: 'C' },
    { id: '4', value: 'D' },
    { id: '5', value: 'E' },
    { id: '6', value: 'F' },
    { id: '7', value: 'G' },
    { id: '8', value: 'H' },
    { id: '9', value: 'I' },
    { id: '10', value: 'J' },
    { id: '11', value: 'K' },
    { id: '12', value: 'L' },
    { id: '13', value: 'M' },
    { id: '14', value: 'N' },
    { id: '15', value: 'O' },
    { id: '16', value: 'P' },
    { id: '17', value: 'Q' },
    { id: '18', value: 'R' },
    { id: '19', value: 'S' },
    { id: '20', value: 'T' },
    { id: '21', value: 'U' },
    { id: '22', value: 'V' },
    { id: '23', value: 'W' },
    { id: '24', value: 'X' },
    { id: '25', value: 'Y' },
    { id: '26', value: 'Z' },
]

const FlatListDemo = () => {
    const [listItems, setlistItems] = useState(dummyArray)


    const ItemView = ({ item }) => {
        return (
            <View>
                <Text
                    onPress={() => { getItem(item) }}
                    style={styles.item}
                >
                    {item.value}
                </Text>
            </View>
        );
    }

    const ItemSeparateView = () => {
        return <View
            style={{
                height: 1.5,
                width: '100%',
                backgroundColor: "black"
            }}
        />

    }

    const getItem = (item) => {
        Alert.alert(`id: ${item.id} value: ${item.value}`)
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <FlatList
                    data={listItems}
                    ItemSeparatorComponent={ItemSeparateView}
                    renderItem={ItemView}
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    item: {
        height: 40,
        padding: 10,
        fontSize: 18,
        color: "black"
    },
    container: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 30,
    },
})

export default FlatListDemo;
