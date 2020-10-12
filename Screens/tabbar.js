import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';


export default class Tabbar extends Component {
  


  render() {
    return (
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.container}
        onPress={
        ()=>    {this.props.navigation.navigate('Store')}
            // console.log("executed")
        }
        >
          <Entypo name="archive" size={30} />
          <Text>Store</Text>
        </TouchableOpacity> 
       
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    marginTop:560,
    backgroundColor: '#fff',
    height: 60,
    width: '100%',
    borderTopWidth: 2,
    borderColor: '#e5e5e5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth:2
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mytext: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 2,
    color: 'rgb(50,50,50)',
  },
});
