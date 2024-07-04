import {  Text, View } from 'react-native'
import React from 'react'

import { EvilIcons } from '@expo/vector-icons';


 type IconButtonsProps={
    icon:string,
    text:string | number
 }
const IconButtons=({icon,text}: IconButtonsProps)=>{
    return(
        // <>
        // <AntDesign name="retweet" size={16} color="grey" />
        // <FontAwesome name="comment-o" size={16} color="grey" />
        // <Ionicons name="stats-chart-outline" size={16} color="grey"  />
        // <Entypo name="heart-outlined" size={16} color="grey" />
        // </>
<View>
    <EvilIcons name={icon} size={18} color="grey" />
    <Text style={{fontSize:14,color:"grey"}}>{text}</Text>
</View>
        
    )
}
export default IconButtons;