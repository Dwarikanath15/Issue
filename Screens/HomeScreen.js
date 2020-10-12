import React, { Component } from 'react'
import { Text, 
         StyleSheet, 
         View,
         ScrollView,
         Image,
         StatusBar
    } from 'react-native'
import Navbar from './Navbar'
import Tabbar from './tabbar'




export default class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar  />
                <View>
                <Navbar />
                    <ScrollView style={{flex:1}}>
                        <Text>Home</Text>
                    </ScrollView>
                <Tabbar />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        
        
    },
   
   
})
