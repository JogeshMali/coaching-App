import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'
import Button from './Button'

export default function NoCourse() {
    const router = useRouter()
  return (
    <View style={{
        marginTop:40,
        display:'flex',
        alignItems:'center'
    }
    }>
      <Image source={require('../../assets/images/book.png')} 
       style={{
        height:200,
        width:200
       }} />
       <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20,
        
       }}>
        You Don't Have Any Course
       </Text>
       <Button text='+Create New Account' onPress={()=>router.push('/addCourse')}/>
       <Button text ='Explore Existing Course' type='outline'/>
    </View>
  )
}