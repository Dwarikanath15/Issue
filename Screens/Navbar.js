import React, { Component } from 'react'
import { StatusBar, View ,TouchableOpacity,StyleSheet,Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default class Navbar extends Component {
    render() {
        return (
        <View>
            <StatusBar  />
            <View style = {styles.navbar}>
              
             <View style = {styles.moveright}>
               
                <TouchableOpacity>
                  <Icon 
                    name = 'account-circle'
                    size = {27}
                    style = {styles.icons}
                  />
                </TouchableOpacity>
        </View>
        </View>
      </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    
    },
    navbar:{
        marginTop:-11,
        backgroundColor: '#fff',
        height: 50,
        elevation:3,
        width: '100%',
        borderTopWidth: 2,
        borderColor: '#e5e5e5',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth:2,
        alignItems:'center'
    }, 
    logo:{
      width: '10%',
      height:'80%',
     
    },
    moveright:{
      flexDirection:'row',
      marginLeft:300
    },
    icons:{
      padding:4,
      marginLeft: 15
    },
  });
    