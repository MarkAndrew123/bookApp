import React from 'react'
import { FlatList } from 'react-native'
import { View,SafeAreaView } from 'react-native'
import { BookData } from '../constants/dummy'
import HomeHeader from '../components/HomeHeader'
import PdfCard from '../components/PdfCard'
import { useState } from 'react'

const User = ({ navigation}) => {
  const [pdfData, setPdfData] = useState(BookData)

  const handleSearch = (value) => {
    if(!value.length)
    return setPdfData(BookData)

    const filteredData = BookData.filter((item) => 
    item.name.toLowerCase().includes(value.toLowerCase())
    )

    if(filteredData.length) {
      setPdfData(filteredData)
    }
    else (
      setPdfData(BookData)
      
    )
    
  }

    return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ flex:1 }}>
        <View style={{ zIndex: 0 }}>

      <FlatList 
      data={pdfData}
      renderItem={({item}) => <PdfCard data={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<HomeHeader  onSearch={handleSearch } handlepress={() => navigation.goBack()}/>}
      />
</View>

    <View style={{
      position:'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: -1,
      }}> 
      <View style={{ height: 300, backgroundColor:'#4A90B8' }} />

      <View  style={{ flex: 1, backgroundColor:'#ffff' }}  />

    

      
     </View>
        
        </View>  

    </SafeAreaView>
  )
}

export default User
