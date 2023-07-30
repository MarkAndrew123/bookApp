import React from 'react'
import { View,Image } from 'react-native'
import { SHADOWS } from '../constants/theme'
import assets from '../constants/assets'
import { PdfButton,DownloadButton } from './Button'
import { SubInfo } from './SubInfo'
import { NftTitle,SeeMore } from './SubInfo'
import { useNavigation } from '@react-navigation/native'
import { Linking } from 'react-native'


const PdfCard  = ({data}) => {
    const Navigation = useNavigation()
  return (

    
    <View style={{
        backgroundColor:'#ffff',
        borderRadius: 14,
        marginBottom: 24,
        margin: 8,
        ...SHADOWS.dark
         }}>
        <View style={{ width: '100%', height:250 }}> 
<Image source={data.image} 
resizeMode='cover'
style={{
    width: "100%",
    height: '100%',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
    
}}
/>

<PdfButton  imgUrl={assets.pdf} right={10} top={10}/>

        </View>
        <SubInfo/>
        <View style={{ width:'100%', padding: 14 }}>
         <NftTitle 
         title={data.name}
         titleSize={14}
         />   
     <View style={{
        marginTop: 14,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
     }}> 
     <SeeMore   handleClick={() => Navigation.navigate('Details')} />
<DownloadButton 
minWidth={120}
fontSize={14}  
// handleTouches={ ()=> {Linking.openURL(`${assets.IPdf}`)}}
/>
     </View>
        </View>
    </View>
  )
}

export default PdfCard