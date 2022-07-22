import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Alert, ImageBackground, Linking, SafeAreaView, TouchableOpacity } from 'react-native-web';

export default class DailyPicScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground
                source={require('../asstes3/stars.gif')} style={styles.backgroundImage}>
                    <Text style={styles.routeText}>Astronomy Picture Of The Day</Text>
                    <Text style={styles.routeText}>{this.state.apod.title}</Text>
                    <TouchableOpacity style={styles.listContainer}
                    onPress={() => Linking.openUrl(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
                    >
                        <View style={styles.iconContainer}>
                            <Image source={require("./assets3/play-video.png")} style={{width:50, height:50}}></Image>
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
                </ImageBackground>
                <Text>DailyPic Screen!</Text>

              
            </View>
        )
        getAPOD = () => {
            axios
            .get("https://api.nasa.gov/planetary/apod?api_key=8zow1Vp10BSiGin43fNhUySc4qzTas1qMFQa4P7o"
            )
            .then(response=> {
                this.setState({ apod: response.data})
            })
            .catch(error => {
                Alert.alert(error.message)
            })
        }
    }
}