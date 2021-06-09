import React, { Component } from 'react';
import { View, Text } from 'react-native';

const PropsDemo = (props) => {
    return (
        <View>
                <Text>{props.name}</Text>
                <Text>{props.model}</Text>
            </View>
    )
}

export default PropsDemo
