import React from 'react'
import { View, Image, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native'

const Avatar = () => {
    return (
        <View>
            <TouchableNativeFeedback onPress={()=> console.log("touched")}>
                <Image source={require('../Public/images/google4_hdpi.png')} />
            </TouchableNativeFeedback>
            <TouchableOpacity>
                <Image source={require('../Public/images/Car-Facebook-Covers-2046.jpeg')} />
            </TouchableOpacity>
        </View>
    )
}

export default Avatar
