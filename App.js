import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './Screens/HomeScreen'
import tabbar from './Screens/tabbar'
import Navbar from './Screens/Navbar'
import  Store from './Screens/Store'

const Stack = createStackNavigator()

function App() {
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options = {{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="tab"
        component={tabbar}
      />
      <Stack.Screen 
        name="nav"
        component={Navbar}
      />
       <Stack.Screen 
        name="Store"
        component={Store}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;