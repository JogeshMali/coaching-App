import Colors from '@/app/constant/Colors';
import { CourseList } from '@/app/constant/CourseListInterface';

import { imageAssets } from '@/app/constant/Option';
import { db } from '@/config/firebaseConfigs';
import { UserDetailContext } from '@/context/userContext';
import { useRouter } from 'expo-router';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

const ProgressBar = require('react-native-progress/Bar').default;
type Props = {
  courseList: CourseType[];
};
type CourseType = {
  id: string;
  course?: CourseList

};
export default function Progress() {
  const [progressData, setProgressData] = useState<{ [id: string]: number }>({});
  const { userDetail, setUserDetail } = useContext(UserDetailContext)
  const [courseList, setCourseList] = useState<CourseType[]>([])
  const [loading, setloading] = useState(false)
  const router = useRouter()

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded && userDetail?.email) {
      getUserCourse();
      setLoaded(true);
    }
  }, [userDetail, loaded]);

  useEffect(() => {
    if (courseList.length > 0) {
      fetchProgress();
    }
  }, [courseList]);

  const fetchProgress = async () => {

    const progressMap: { [id: string]: number } = {};

    for (const item of courseList) {
      try {
        const courseRef = doc(db, 'Courses', item.id);
        const snapshot = await getDoc(courseRef);

        if (snapshot.exists()) {
          const data = snapshot.data();
          const completed = data.chapterComplete || [];
          const total = item.course?.chapters.length || 1;
          const percent = completed.length / total;
          progressMap[item.id] = percent;
        }
      } catch (error) {
        console.error('Error fetching progress:', error);
        progressMap[item.id] = 0;
      }
    }

    setProgressData(progressMap);
  };
  const getUserCourse = async () => {
   
    try {
      setCourseList([]);
      const q = query(collection(db, 'Courses'), where('createdBy', '==', userDetail?.email));
      const querySnapshot = await getDocs(q);
      const courses = querySnapshot.docs.map((doc) => ({
        id: doc.id,
      ...doc.data() 
      }));
      console.log('course' + courses)
      setCourseList(courses);
     
    } catch (e) {
      console.error("Error fetching courses:", e);
    
    }
  };


  return (
    <View style={{

    }}>
      <Image style={{
        width: "100%",
        height: 800,

      }} source={require('../../assets/images/wave.png')} />
      <View style=
        {{
          position: 'absolute',
          marginTop: 20,
          padding: 20
        }}>
        <Text style={{
          fontFamily: "outfit-bold",
          fontSize: 25,
          color: Colors.WHITE,
          marginBottom: 20
        }}>Course Progress</Text>

        <FlatList
          data={courseList}
          onRefresh={async () => {
  await getUserCourse();
}}
          refreshing={loading}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            const progress = progressData[item.id] || 0;
            
            const completedCount = Math.round(progress * (item.course?.chapters?.length || 0));
            return (
              <TouchableOpacity style={{
                backgroundColor: Colors.BG_GRAY,
                borderRadius: 10,
                padding: 8,
                width: '100%',
                margin: 8,
                alignSelf: 'center',
              }}
                onPress={() => router.push({
                  pathname: '/CourseView',
                  params: { courseParams: JSON.stringify({ item }), courseId: item.id }
                })}>
                <View style={{
                  display: 'flex',
                  gap: 8,
                  flexDirection: 'row',

                }}>
                  {item.course?.banner_image && (<Image style={{
                    height: 80,
                    width: 80,
                    borderRadius: 10
                  }} source={imageAssets[item.course.banner_image]} />)}
                  <View style={{
                    flex: 1
                  }}>
                    <Text numberOfLines={2}
                      style={{
                        fontFamily: "outfit-bold",
                        fontSize: 19,
                        flexWrap: 'wrap'
                      }}>
                      {item.course?.courseTitle}
                    </Text>
                    <Text style={{
                      fontFamily: "outfit",
                      fontSize: 17
                    }}>
                      {item.course?.chapters.length} Chapters
                    </Text>

                  </View>

                </View>
                <View style={{
                  marginTop: 10,

                }}>
                  <ProgressBar progress={progress} width={300} />
                  <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 15,
                    marginTop: 5
                  }}>
                    {completedCount ?? 0} out {item.course?.chapters.length} Chapter Completed
                  </Text>
                </View>
              </TouchableOpacity>

            )
          }}
        />
      </View>
    </View>
  )
}