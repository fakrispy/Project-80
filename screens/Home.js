import React, { Component } from 'react';
import { Text,View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground,Image} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <ImageBackground source={require('../assets 3/space.gif')}></ImageBackground>
                <Text>Home Screen!</Text>
            </View>
        )
    }
}