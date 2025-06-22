import Ionicons from '@expo/vector-icons/Ionicons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native'
import Colors from '../constant/Colors'

export default function QuestionAnswer() {
     const { courseParams } = useLocalSearchParams()
      if (!courseParams || Array.isArray(courseParams)) {
        return null
      }
      const id = JSON.parse(courseParams as string)
      const course = JSON.parse(courseParams as string).course
      const questionList = course.qa
      console.log('corse',questionList )
      
      const router = useRouter()
      const[selectAns,setSelectAns]=useState<number|null>()

      const onQuestionSelect = (index:number)=>{
        if(selectAns == index){
            setSelectAns(null)
        }else{
            setSelectAns(index)
        }
      }
  return (
    <ScrollView>
      <Image source={require('../../assets/images/wave.png')} style={{
        width: '100%',
        height: 650
      }} />
      <View style={{
        position: 'absolute',
        width: '100%',
        padding : 30

      }}>
        <View style={{

          display: 'flex',
          flexDirection: 'row',
          alignItems: "center",
          gap:10
        //  justifyContent: 'flex-start'
        }}>


          <Ionicons name='arrow-back' size={30} color={Colors.WHITE} style={{

          }} onPress={() => router.back()} />
          <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 25,
            color: Colors.WHITE,
            //marginLeft:10
          }}>Question & Answers </Text>

        </View>
        <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 23,
            color: Colors.WHITE,
            marginTop:8,
            marginBottom:15
          }}>{course.courseTitle} </Text>

          <FlatList 
          data={questionList}
          renderItem={({item,index})=>(
            <Pressable key={index} style={{
                backgroundColor:Colors.WHITE,
                padding:20,
                borderRadius:15,
                marginTop:20
            }} 
            onPress={()=>onQuestionSelect(index)}>
               <Text style={{
                  fontFamily:'outfit-bold',
                  fontSize:20
               }}>{item.question}</Text>

               {selectAns==index &&(
                <View style={{
                    borderTopWidth:0.4,
                    marginVertical:15,
                    marginBottom:10
                }}>
                <Text style={{
                  fontFamily:'outfit',
                  color:Colors.GREEN,
                 marginTop:8,
                  fontSize:18
               }}>Answer : {item.answer}</Text></View>)}
            </Pressable>
          )}
          />
    </View>
    </ScrollView>
  )
}