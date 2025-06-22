import Colors from '@/app/constant/Colors'
import { CourseList } from '@/app/constant/CourseListInterface'
import { PraticeOption } from '@/app/constant/Option'
import PracticeCourseList from '@/components/PracticeScreen/PracticeCourseList'
import { db } from '@/config/firebaseConfigs'
import { UserDetailContext } from '@/context/userContext'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'

type CourseType = {
    id: string;
    course?: CourseList

};
export default function PracticeSection() {
  const {type}=useLocalSearchParams()
  const router = useRouter()
  const  option = PraticeOption.find(item=>item.name==type)
  const [loading, setLoading]=useState(false)
  const[courseList,setCourseList]=useState<CourseType[]>([])
  const {userDetail,setUserDetail}=useContext(UserDetailContext)

  const getCourseList = async ()=>{
    setLoading(true)
    setCourseList([])
    const q = query(collection(db,'Courses'),where('createdBy','==',userDetail?.email))
    const querySnapshot =await getDocs(q)
    const results: CourseType[] = [];
    querySnapshot.forEach(docSnap => {
      results.push({
        id: docSnap.id,
        ... docSnap.data() as CourseList
      });
    });

    setCourseList(results);
    setLoading(false)
  }
  useEffect(() => {
    userDetail&&getCourseList();
  }, [userDetail]);

  return (
    <View style={{
      flex:1
    }}>
      
      <Image source={option?.image} style={{
        width:'100%',
        height:250
      }}/>

      <View style={{
       display:'flex',
       flexDirection:'row',
       gap:10  ,
       marginTop:8,
       padding:8,
       position:'absolute',
       alignItems:'center'
      }}>
      <Ionicons  
      onPress={()=> router.back()}
      style={{
        padding:5,
        backgroundColor:Colors.WHITE,
        borderRadius:10
      }}name='arrow-back' size={25} color={Colors.BLACK}/>
      <Text style={{
        fontFamily:"outfit-bold",
        fontSize:25,
        color:Colors.WHITE
      }}>{option?.name}</Text>
      </View>
      {loading && <ActivityIndicator style={{marginTop:150}}color={Colors.PRIMARY}/>}
      {!loading && option && (
  <PracticeCourseList courseList={courseList} option={option} />
)}

    </View>
  )
}