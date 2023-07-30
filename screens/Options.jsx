import React from 'react'
import { View,Text,Image} from 'react-native'
import { AdminButton,UserButton } from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const Options = () => {
    const navigation = useNavigation()
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#4A90B8',
      alignItems: 'center',
      justifyContent:'center'
      }}
    >
      
<View>
<Image source={require('../assets/back.png')}
      style={{
        marginTop: -700}}
      />
      
</View>
<View style={{
   justifyContent:'center',
   position:'absolute'
   
}}
>
  <Text style={{
    fontSize: 30,
    color: 'white',
    marginTop: -220
    
    
    
    
   }}
   >
    USE APP AS
  </Text>
  <View  style={{
    flex: 0,
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 450,
    position:'absolute'
     
  }}>
    <AdminButton handleClick={() => navigation.navigate('Admin')} />
   <UserButton handleClick={() => navigation.navigate('User')}/>
  </View>


</View>
    
     
      <Text 
      
      style={{
          color:'white',
          marginBottom: -790,
          fontSize: 25,
          
          
        }}

        >
          continue
        </Text>

     
        
     

    </View>
  )
}

export default Options;