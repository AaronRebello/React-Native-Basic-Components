import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'

const WebViewDemo = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
                <WebView
                    source={{ uri: 'https://www.youtube.com/' }}
                    style={{ margin: 20 }}
                />
        </SafeAreaView>
    )
}

export default WebViewDemo
