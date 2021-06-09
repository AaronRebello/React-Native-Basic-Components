import React from 'react'
import { Button, StyleSheet, View, Alert, TouchableOpacity, Text, } from 'react-native'

const CustomButtons = () => {
    return (
        <View>
            <TouchableOpacity color="" style={styles.clickme} onPress={() => alert('normal alert')}><Text>Alert</Text></TouchableOpacity>
            <TouchableOpacity style={styles.clickme} onPress={() => Alert.alert('hello', "Custom Alert", [{ text: "close" }])} ><Text>click me for custom Alert</Text></TouchableOpacity>
            <TouchableOpacity style={styles.clickme} onPress={() => Alert.prompt("Title", "my message", text => { console.log(text) })}><Text>Alert prompt</Text></TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        alignItems: "center",
    },
    clickme: {
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "pink",
        color: "green",
        marginTop: 20,
        padding: 15,
        width: "90%",
        alignItems: "center",
        opacity: 1
    }
})
export default CustomButtons;
