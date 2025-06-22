import Colors from '@/app/constant/Colors';
import { CourseList } from '@/app/constant/CourseListInterface';
import { imageAssets } from '@/app/constant/Option';
import { db } from '@/config/firebaseConfigs';
import { UserDetailContext } from '@/context/userContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { doc, setDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../Home/Button';
type CourseType = {
  id: string;
  course?: CourseList
  
};
type Props={
  id: string;
  course?: CourseList,
  enroll:string
}
export default function CourseIntro({course,id,enroll}:Props,) {
  const router = useRouter()
  const {userDetail,setUserDetail}=useContext(UserDetailContext);
  const [loading,setloading]= useState(false)

  const enrollNow =async (item:any)=>{
setloading(true)
    const docId = Date.now().toString()
    const data ={
              course: item, // storing the whole course object
              createdOn: new Date(),
              createdBy: userDetail?.email || 'Unknown',
              docId:docId
           } 
           await setDoc(doc(db, 'Courses',docId ),data )
           setloading(false)
           router.push({
          pathname:'/CourseView',
          params:{courseParams:JSON.stringify({item:data}),courseId:docId,enroll:'false'}
        })

  }
  return (
    <View >
      {course?.banner_image &&(<Image style={{
        width:'100%'
      }} source={imageAssets[course.banner_image]}/>)}
     <View style={{
      marginTop:10,
      padding:10
     }}>
      <Text style={{
        fontFamily:"outfit-bold",
        fontSize:25
      }}>{course?.courseTitle}</Text>
      <View style={{
        display:'flex',
        flexDirection:'row',
        gap:8,
        marginTop:8,
        alignItems:"center"
      }}>
        <Ionicons name='book-outline' size={18} />
        <Text style={{
        fontFamily:"outfit",
        fontSize:20,
        
      }}>{course?.chapters.length} Chapters</Text>
      </View>
       <Text style={{
        fontFamily:"outfit-bold",
        fontSize:23,
        marginTop:15,
      }} >Description</Text>
       <Text style={{
        fontFamily:"outfit",
        fontSize:18,
        marginTop:8,
        color:Colors.GRAY,
        marginBottom:10
      }}>{course?.description}</Text>
      {enroll == 'true'? <Button text='Enroll Now' onPress={()=>enrollNow(course)} loading={loading}/>:<Button text='Start Now' onPress={()=>{
        router.push({
                pathname: '/ChapterView',
                params: {
                  chapterParams: JSON.stringify(course?.chapters[0]),
                  id: id,
                  chapterindex: 0,
                },
              })
      }} />}
      </View>
      
      <Ionicons name='arrow-back-outline' size={35} style={{position:'absolute'}} onPress={()=>router.back()}/>
    </View>
  )
}