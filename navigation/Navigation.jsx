import React from 'react'
import Admin from '../screens/Admin'
import Options from '../screens/Options'
import User from '../screens/User'
import Details from '../screens/Details'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown: false}}
   initialRouteName='Options'>
    <Stack.Screen component={Options} name='Options'/>
    <Stack.Screen component={User} name='User'/>
    <Stack.Screen component={Details} name='Details' />
    <Stack.Scre en component={Admin}  name='Admin'/>

   </Stack.Navigator>
  )
}


export default Navigation