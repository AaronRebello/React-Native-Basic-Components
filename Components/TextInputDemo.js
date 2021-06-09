// import React, { Component } from 'react';
// import { TextInput, View, Button, StyleSheet } from 'react-native';

// class TextInputDemo extends Component {

//     onHandleChange = () => {
//         console.log(alert("you are logged in"))
//     }
//     render() {
//         return (
//             <View>
//                 <TextInput value="" style={styles.holder} placeholder="login" />
//                 <TextInput value="" style={styles.holder} placeholder="password" />
//                 <Button title="login" onPress={this.onHandleChange}></Button>
//             </View>
//         );
//     }
// }

// export default TextInputDemo;

// const styles = StyleSheet.create({
//     holder: {
//         borderColor: "black",
//         borderWidth: 1,
//         margin: 10
//     }
// })


import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const TextInputDemo = () => {

    const [userName, setuserName] = useState('')
    return (
        <View style={styles.view1}>
            <Text> Enter something in text </Text>
            <TextInput
                value={userName}
                onChangeText={(userName) => setuserName(userName)}
                style={styles.input1}
                placeholder="Enter Text "
            />
            <Text style={styles.text1}>{userName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view1: {
        backgroundColor: "white",
        height: 100,
        width: 300
    },
    input1 :{
        borderColor:"blue",
        borderWidth:2,
        margin: 2,
        height:40
    },
    text1 :{
        borderBottomWidth:2,
        borderColor:"black",
        borderStyle: 'dotted',
        margin:5,
        
    }
})

export default TextInputDemo
