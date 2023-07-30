import React from 'react'
import { View,Image,TextInput,TouchableOpacity } from 'react-native'
import { COLORS,  } from '../constants/theme'
import assets from '../constants/assets'


const HomeHeader = ({ onSearch, handlepress}) => {
  return (
   <View style={{
    backgroundColor: '#3583AE',
    padding: 14,
    
}}>
    <View style={{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}> 
   <Image 
    source={assets.books}
    resizeMode='contain'
    style={{ width: 90,height: 25 
    }}/>
    <View style={{width: 45, height: 45}}>
        <TouchableOpacity  onPress={handlepress}
        >
        <Image    source={assets.Goback}
        resizeMode='contain'
        style={{ width: '100%', height:'100%' }}
        />
        </TouchableOpacity>
        

    </View>
    </View>
    
<View style={{ marginTop:14 }}>
<View style={{  width: '100%',
    borderRadius: 14,
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 6,

    
    

}}>
        <Image source={assets.search}
        resizeMode='contain'
        style={{ width: 20, height: 20, marginRight: 8 }}/>
        <TextInput  placeholder='Search PDFs'
       style={{ flex: 1 }}
       onChangeText={onSearch                                   } 
        />
    </View>
</View>
    </View>

    
       
   
  )
}

export default HomeHeader