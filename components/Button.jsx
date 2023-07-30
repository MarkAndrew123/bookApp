import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity,Text } from 'react-native'
import { SHADOWS,COLORS } from '../constants/theme'


export const AdminButton = ({handleClick}) => {
  return (
   <TouchableOpacity style={{
    backgroundColor:'#FFF',
    width: 130,
    height: 80,
    flex: 0,
    marginBottom: -190,
    alignItems:'center',
    justifyContent:'center',
    
  }}
    
    onPress={handleClick}
    >
      

<Text style={{
 flex: 0,
 justifyContent:'center',
 alignItems:'center',
 fontSize: 23,
 paddingBottom: -100

 
  
 }} 

 >


ADMIN


</Text>
    

   </TouchableOpacity>
  )
}

export const UserButton = ({handleClick}) => {
 return (
  <TouchableOpacity style={{
    backgroundColor:'#FFF',
    width: 130,
    height: 80,
    flex: 0,
    marginBottom:-130,
    alignItems: 'center',
    justifyContent:'center',
    
  }}
    onPress={handleClick}
    >
<Text style={{
justifyContent:'center',
 textAlign:'center',
 fontSize: 23,
 alignItems: 'center',
 position:'absolute',
 flexDirection:'column'
 
  
 
 }}

 >
USER
</Text>
    

   </TouchableOpacity>
 )
}
 
export const PdfButton = ( { imgUrl, handleClick, ...props} ) => {
 return (
  <TouchableOpacity style={{
    width: 40,
    height: 40,
    backgroundColor: '#ffff',
    position: 'absolute',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.light,
    ...props
    
    
  }}
  onPress={handleClick}

  > 
  <Image source={imgUrl}
  resizeMode='contain'
  style={{ width: 24, height: 24 }}
  
  />

  </TouchableOpacity>
 )
}


export const DownloadButton = ({minWidth,fontSize, ...props}) => {
  
  return (
 
    <TouchableOpacity 
    
    style={{
      backgroundColor: COLORS.primary,
       borderRadius: 24,
     minWidth: minWidth,
     padding: 12,
     ...props,
    }}
    onPress={ ()=> {Linking.openURL(`${assets.IPdf}`)}}
  
    > 
    <Text style={{
      fontSize: fontSize,
      textAlign:'center',
      color:COLORS.white,
      fontWeight: 200
    }}>
      Download
    </Text>
  
    </TouchableOpacity>

  )
}
 export const BrowseFilesButton = ({handleTouch}) => {
  return (
         <TouchableOpacity  style={{
          backgroundColor:'#000000',
          height: 40,
          width: 170,
          borderRadius: 11,
          alignItems: 'center',
          justifyContent:'center',
          position:'absolute',
          marginTop: 100
          }}
          onPress={handleTouch}
          >
            <Text style={{ alignItems:'center',
              textAlign:'center',
              justifyContent:'center',
              color:'white',
              fontSize: 16,
              fontWeight: 600

              
              
              
          
            }}>
            Browse Files
              </Text>        
               </TouchableOpacity>
  )
 }