import CoursePlaylist from '@/components/Home/CoursePlaylist'
import CourseProgress from '@/components/Home/CourseProgress'
import Header from '@/components/Home/Header'
import NoCourse from '@/components/Home/NoCourse'
import PracticeSection from '@/components/Home/PracticeSection'
import { db } from '@/config/firebaseConfigs'
import { UserDetailContext } from '@/context/userContext'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Image, Platform, View } from 'react-native'
import { CourseList } from '../constant/CourseListInterface'
type CourseType = {
  id: string;
  course?: CourseList
  
};

export default function Home() {
  const {userDetail,setUserDetail}=useContext(UserDetailContext)
  const [courseList,setCourseList] = useState<CourseType[]>([])
  const [loading,setloading]=useState(false)
   useEffect(() => {
    if (userDetail?.email) {
      getUserCourse();
    }
  }, [userDetail]);
const getUserCourse = async () => {
  setloading(true)
    try {
      setCourseList([]); 
      const q = query(collection(db, 'Courses'), where('createdBy', '==', userDetail?.email));
      const querySnapshot = await getDocs(q);
      const courses = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log('course'+courses)
      setCourseList(courses);
      setloading(false)
    } catch (e) {
      console.error("Error fetching courses:", e);
      setloading(false)
    }
  };



  
  return (
    <FlatList
      data={[]}
      onRefresh={getUserCourse}
      refreshing={loading}
     /// style={{ flex: 1, backgroundColor: Colors.WHITE }}
      ListHeaderComponent={
      <View>
        <Image style={{
          width:"100%",
          height:600,
          position:"absolute"
        }} source={require('../../assets/images/wave.png')}/>
      <View style={{
        //flex:1,
        padding: 25,
        paddingTop: Platform.OS == 'ios' ? 0 : 45,
        //backgroundColor:Colors.WHITE
      }}>
        <Header />
        {courseList.length == 0 ? <NoCourse /> :
          <View>
            <CourseProgress courseList={courseList} />
            <PracticeSection />
            <CoursePlaylist courseList={courseList} />
          </View>}
      </View>
      </View>
      }
       renderItem={()=>null}    />
  )
}