import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'

const Details = ({Navigation}) => {
  return (
   <View style={{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    

   }}>
    <TouchableOpacity handlePress={() => Navigation.goback() }
    
    >
    <Text>
      Options
    </Text>

    </TouchableOpacity>
    
   </View>
  )
}

export default Details