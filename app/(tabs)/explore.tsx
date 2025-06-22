import Colors from '@/app/constant/Colors';
import { imageAssets } from '@/app/constant/Option';
import { db } from '@/config/firebaseConfigs';
import { UserDetailContext } from '@/context/userContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { CourseList } from '../constant/CourseListInterface';
import { courseList } from '../constant/courselist';
type CourseType = {
  id: string;
  course?: CourseList;
};

export default function Explore() {
  const router = useRouter();
  const { userDetail } = useContext(UserDetailContext);
  const [filteredCourses, setFilteredCourses] = useState<CourseType[]>([]);

  useEffect(() => {
    if (userDetail?.email) {
      getFilteredCourses();
    }
  }, [userDetail]);

  const getFilteredCourses = async () => {
    try {
      const q = query(collection(db, 'Courses'), where('createdBy', '==', userDetail?.email));
      const querySnapshot = await getDocs(q);
      const userCourses = querySnapshot.docs.map((doc) => doc.data().course.courseTitle);
      console.log('usercourse',userCourses)

      // Convert static courseList to CourseType[]
      const formattedCourses: CourseType[] = courseList.courses.map((item, index) => ({
        id: '',
        course: item,
      }));

      // Filter out the ones that exist in userCourses by courseTitle
      const filtered = formattedCourses.filter(
        (course) => !userCourses.includes(course.course?.courseTitle)
      );

      setFilteredCourses(filtered);
    } catch (e) {
      console.error('Error filtering courses:', e);
    }
  };
  return (
    <ScrollView style={{ marginTop: 20, padding: 20 }}>
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 25 }}>Courses</Text>

      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              display: 'flex',
              width: '95%',
              borderWidth: 1,
              backgroundColor: Colors.BG_GRAY,
              padding: 10,
              margin: 10,
              borderRadius: 15,
            }}
            onPress={() =>
              router.push({
                pathname: '/CourseView',
                params: { courseParams: JSON.stringify({ item }) ,enroll:'true'},
              })
            }
          >
            {item?.course?.banner_image && (
              <Image
                style={{
                  width: '100%',
                  height: 180,
                  borderRadius: 15,
                }}
                source={imageAssets[item.course.banner_image]}
              />
            )}
            <Text
              style={{
                fontFamily: 'outfit-bold',
                fontSize: 20,
                marginTop: 5,
                marginLeft: 5,
              }}
            >
              {item?.course?.courseTitle}
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                marginTop: 3,
                marginLeft: 5,
              }}
            >
              <Ionicons name="book-outline" size={16} color={Colors.BLACK} />
              <Text style={{ fontFamily: 'outfit' }}>
                {item?.course?.chapters?.length || 0} Chapters
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}
