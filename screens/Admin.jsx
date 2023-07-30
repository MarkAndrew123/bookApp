import React from 'react'
import { View,Text,Image,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import { BrowseFilesButton } from '../components/Button'
import assets from '../constants/assets' 
import DocumentPicker from 'expo-document-picker'


 const Admin = () => {
 const pickDocument = async () => {
 
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
  
    
      console.log('URI:', res.uri);
      console.log('Type:', res.type);
      console.log('Name:', res.name);
      console.log('Size:', res.size);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      
        console.log('Canceled');
      } else {
       
        console.log('Error:', err);
      }
    }
  };
 

  return (
    <SafeAreaView style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
      
    }}>
 <View style={{
      alignItems:'center',
      justifyContent:'center',
      width: 370,
      height: 740,
      backgroundColor: '#E9F7FF',
      
      
      
    }}>
      <View style={{ alignItems: 'center',
        
      }}> 
      <Image source={assets.Upload} style={{ 
      position:'absolute',
      marginTop: -200
          
    }}
      
      />
      </View>
     

      <Text style={{
        fontWeight: 500,
        fontSize: 20
        
        
      }}>
       Upload Files Here
      </Text>

<View style={{
  justifyContent:'center',
  alignItems:'center'
}}>

<Text style={{
        fontSize: 11,
        fontWeight: 200,
        paddingTop: 100,
        position: 'absolute',
        alignItems:'center',
        justifyContent:'center',
        
       }}>
        Drag And Drop Files Or
         Browse On Your System  
       </Text>




</View>
<View style={{
  position:'absolute'
}}> 
<TouchableOpacity>
<Text style={{
  marginLeft: 260,
 
  marginTop: 700

}}>  


  Upload
</Text>
  </TouchableOpacity>  
</View>

<View style={{
  alignItems:'center'
}}>
  <BrowseFilesButton handleTouch={pickDocument  }/>
</View>
       


          </View>

    </SafeAreaView>


    
  )
}



export default Admin






