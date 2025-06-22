import Colors from '@/app/constant/Colors'
import React, { PropsWithChildren } from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'

type ButtonProfs = PropsWithChildren<{
    text:string,
    type? :string,
    onPress?: ()=>void,
    loading?:boolean
}>

export default function Button({text,type='fill',onPress,loading}:ButtonProfs) {
  return (
    <TouchableOpacity style={{
     padding:15,
     width:"100%",
     borderRadius:15,
     marginTop:15,
     borderWidth:1,
     borderColor:Colors.PRIMARY,
     backgroundColor:type=='fill'?Colors.PRIMARY:Colors.WHITE
    }}
    disabled={loading}
    onPress={onPress}>
     {!loading? <Text style={{
        fontFamily:"outfit",
        fontSize:18,
        textAlign:'center',
        color:type!='fill'?Colors.PRIMARY:Colors.WHITE

      }}>
       {text}
      </Text> :
      <ActivityIndicator size={'small'} color={type!='fill'?Colors.PRIMARY:Colors.WHITE}/>

      }
    </TouchableOpacity>
  )
}