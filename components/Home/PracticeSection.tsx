import Colors from '@/app/constant/Colors'
import { PraticeOption } from '@/app/constant/Option'
import { useRouter } from 'expo-router'
import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

export default function PracticeSection() {
  const router =useRouter()
  return (
    <View style={{
            marginTop:20,
            
        }}>
         <Text style={{
            fontFamily:"outfit-bold",
            fontSize:25
         }}>Practice </Text>

         <FlatList
         data={PraticeOption}
         
         numColumns={3}
               keyExtractor={(item, index) => index.toString()}
         renderItem={({ item }) => (
        <TouchableOpacity
        onPress={()=>router.push('/PracticeSection/'+item.name)}
        style={{
           margin: 5,
           flex:1,
           aspectRatio:1
           }}>
          <Image source={item.image} style={{ width: '100%', height: '100%' ,maxHeight:200,borderRadius:15}} />
          <Text style={{
            position:'absolute',
            padding:10,
            fontSize:15,
            fontFamily:"outfit",
            color:Colors.WHITE
          }}>{item.name}</Text>
        </TouchableOpacity>
      )}
         />
    </View>
  )
}