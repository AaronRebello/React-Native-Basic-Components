import React, { Component } from 'react';
import { View, ScrollableViews ,Text, Button, ScrollView} from 'react-native';

class ScrollViews extends Component {

    onButtonPress = ()=>{
        alert("this is a programming language")
    }
    render() {
        return (
            <ScrollView> 
            {/* horizontal={true} */}
            <Text>java</Text>
            <Button title="btn1" onPress={this.onButtonPress}></Button>
            <Text>javaScript</Text>
            <Button title="btn2" onPress={this.onButtonPress}></Button>
            <Text>html</Text>
            <Button title="btn3" onPress={this.onButtonPress}></Button>
            <Text>ruby</Text>
            <Button title="btn4" onPress={this.onButtonPress}></Button>
            <Text>react.js</Text>
            <Button title="btn5" onPress={this.onButtonPress}></Button>
            <Text>react-native</Text>
            <Button title="btn6" onPress={this.onButtonPress}></Button>
            <Text>angular</Text>
            <Button title="btn7" onPress={this.onButtonPress}></Button>
            <Text>objective-c</Text>
            <Button title="btn8" onPress={this.onButtonPress}></Button>
            <Text>node.js</Text>
            <Button title="btn9" onPress={this.onButtonPress}></Button>
            
            <Text>java</Text>
            <Button title="btn10" onPress={this.onButtonPress}></Button>
            <Text>javaScript</Text>
            <Button title="btn11" onPress={this.onButtonPress}></Button>
            <Text>html</Text>
            <Button title="btn12" onPress={this.onButtonPress}></Button>
            <Text>ruby</Text>
            <Button title="btn13" onPress={this.onButtonPress}></Button>
            <Text>react.js</Text>
            <Button title="btn14" onPress={this.onButtonPress}></Button>
            <Text>react-native</Text>
            <Button title="btn15" onPress={this.onButtonPress}></Button>
            <Text>angular</Text>
            <Button title="btn16" onPress={this.onButtonPress}></Button>
            <Text>objective-c</Text>
            <Button title="btn17" onPress={this.onButtonPress}></Button>
            <Text>node.js</Text>
            <Button title="btn18" onPress={this.onButtonPress}></Button>
            </ScrollView>
        );
    }
}

export default ScrollViews;
