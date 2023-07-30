import React from "react"
import { View,Text,TouchableOpacity } from "react-native"
import { SHADOWS,COLORS,FONTS } from "../constants/theme"

export const SubInfo = () => {
    return (
<View style={{
    width:'100%',
    paddingHorizontal: 14,
    marginTop: 24,
}}>
   <Text>
    400Level
   </Text>
</View>
    )
}

export const NftTitle = ({title}) => {
    return(
        <View>
<Text style={{ fontSize:20,color: COLORS.primary,fontWeight: 700 }}>{title}</Text>
        </View>
    )
}

export const SeeMore = ({handleClick}) => {
    return(
        <View>
            <TouchableOpacity
            onPress={handleClick}
            >
                <Text style={{
                fontWeight: 100
            }}>
                See More
            </Text> 
            
            </TouchableOpacity>
            
        </View>
    )
}