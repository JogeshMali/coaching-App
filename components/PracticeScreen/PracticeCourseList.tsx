import Colors from '@/app/constant/Colors';
import { CourseList } from '@/app/constant/CourseListInterface';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';

import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
type Props = {
    courseList: CourseType[],
   option: PracticeOptionType
};
type CourseType = {
    id: string;
    course?: CourseList

};
type PracticeOptionType = {
  name: string;
  image: any;
  icon: any;
  path: string;
};
export default function PracticeCourseList({courseList,option}:Props,) {
  const router =useRouter()
  const onPress= (item:CourseType)=>{
    if(option.name == 'Quiz'){
      router.push({
        pathname:"/quiz",
        params:{
          courseParams:JSON.stringify(item)
        }
      })
    }else if (option.name == 'Flashcards'){
      router.push({
        pathname:'/flashcards',
        params:{
          courseParams:JSON.stringify(item)
        }
      })
    }else if (option.name == 'Question & Ans'){
      router.push({
        pathname:'/questionAnswer',
        params:{
          courseParams:JSON.stringify(item)
        }
      })
    }
  }
  return (
    <View style={{flex:1,
      justifyContent:'center',
      alignItems:"center",
     

    }}>
      <FlatList
      data={courseList}
      numColumns={2}
      keyExtractor={item=>item.id}
      renderItem={({item,index})=>{
     //   console.log('Rendering item:', item)
return(
        <TouchableOpacity
        onPress={()=>onPress(item)}
        style={{
          flex:1,
          display:'flex',
         flexDirection:'column',
           margin:15,
      padding:10,
      backgroundColor:Colors.WHITE,
      marginTop:20,
      borderRadius:15,
      maxWidth:200
        }}>
          <Ionicons name='checkmark-circle' size={25}color={Colors.GRAY} style={{
           position:'absolute',
           right:4,
           top:8
          }}/>
          <Image source={option.icon}style={{
            width:'100%',
            height:150,
            objectFit:'contain'
          }} resizeMode='contain' />
          <Text style={{
            fontFamily:'outfit-bold',
            fontSize:20,
            textAlign:'center',
            marginTop:10
          }}> {item.course?.courseTitle ?? 'Untitled Course'}</Text>
        </TouchableOpacity>
)}}
      />
    </View>
  )
}