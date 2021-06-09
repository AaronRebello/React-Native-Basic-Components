import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableNativeFeedback } from 'react-native'

const Home = () => {
    return (
        <SafeAreaView>
            <TouchableNativeFeedback>
                <View style={styles.container}>
                    <Text>hi</Text>
                </View>
            </TouchableNativeFeedback>
            <Text>hi</Text>
            <Text>hola</Text>
            <Text style={{ color: "black" }}>Hello react-native World!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 100,
        backgroundColor: "yellow",
    }
})
export default Home
