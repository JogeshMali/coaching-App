import ChaptersView from '@/components/CourseView/Chapters';
import CourseIntro from '@/components/CourseView/CourseIntro';
import { db } from '@/config/firebaseConfigs';
import { useLocalSearchParams } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

export default function CourseView() {
    const {courseParams,courseId,enroll} = useLocalSearchParams();
    const [course,setCourse]=useState<any>()
//    if (!courseParams || Array.isArray(courseParams)) {
//   return null; 
// }

// let item;

// try {
 
// } catch (e) {
//   console.error('Failed to parse courseParams', e);
//   return null;
// }

// if (!item) return null;

useEffect(()=>{
  if(!courseParams||Array.isArray(courseParams)){
    getCourse()
  }else{
   setCourse( JSON.parse(courseParams)?.item);
  }
},[courseId])
const getCourse =async()=>{
  const docRef = await getDoc(doc(db,'Courses',courseId as string))
  const courseData = docRef.data()
  setCourse(courseData)

}   
console.log('course',course)
  return (course&&
    <ScrollView style={{
      flex:1,
      
    }}>
      <CourseIntro course={course.course} id={courseId as string} enroll={enroll as string}/>
      <ChaptersView course={course.course} id={courseId as string}/>
    </ScrollView>
  )
}