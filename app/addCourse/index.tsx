import Button from '@/components/Home/Button'
import { db } from '@/config/firebaseConfigs'
import { UserDetailContext } from '@/context/userContext'
import { useRouter } from 'expo-router'
import { doc, setDoc } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import Colors from '../constant/Colors'
import { courseList } from '../constant/courselist'

type Course = {
  courseTitle: string
}

export default function AddCourse() {
  const [loading, setloading] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<string[]>([])
  const {userDetail,setUserDetail}=useContext(UserDetailContext);
  //const generateTopic = () => {
  //   // handle generation logic
  //   console.log('Generating topic for:', selectedTopic)
  // }
  const router = useRouter()
  const generateCourse = async () => {
  setloading(true);
  const courses= []
  try {
    for (const topic of selectedTopic) {
      // Find the course with the matching topic
      const course = courseList.courses.find(
        (c) => c.courseTitle.toLowerCase() === topic.toLowerCase()
      );

      if (course) {
        
      }
      const docId = Date.now().toString()
       await setDoc(doc(db, 'Courses',docId ), {
          course: course, // storing the whole course object
          createdOn: new Date(),
          createdBy: userDetail?.email || 'Unknown',
          docId:docId
       })
    
      }
    setloading(false);
    router.push('/(tabs)/home')
  } catch (e) {
    console.error("Error saving courses:", e);
    setloading(false);
  }
};


  const onTopicSelect = (topic: string) => {
    const isAlreadyExisted = selectedTopic.find(item => item == topic)
    if (!isAlreadyExisted) {
      setSelectedTopic(prev => [...prev, topic])
    } else {
      const topics = selectedTopic.filter(item => item != topic)
      setSelectedTopic(topics)
    }
    console.log(selectedTopic)
  }

  const isTopicSelected = (topic: string) => {
    return selectedTopic.includes(topic)
  }

  return (
    <View style={{
      flex: 1,
      padding: 25,
      backgroundColor: Colors.WHITE
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 25,
        textAlign: 'center'
      }}>Create New Course</Text>

      <Text style={{
        fontFamily: 'outfit',
        fontSize: 25,
        marginTop: 20,
        marginBottom: 20
      }}>What do you want to learn today?</Text>

      {/* Input Field was commented, so left untouched */}

      <View style={{
        marginBottom: 20,
        display: 'flex',
        gap: 10
      }}>
        {courseList.courses.map((item: Course, index) => (
          <Pressable
            key={index}
            style={{
              borderWidth: 0.5,
              borderRadius: 99,
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginTop: 15,
              backgroundColor: isTopicSelected(item.courseTitle) ? Colors.PRIMARY : Colors.BG_GRAY,
            }}
            onPress={() => onTopicSelect(item.courseTitle)}
          >
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 18,
              marginLeft: 10,
              color: isTopicSelected(item.courseTitle) ? Colors.WHITE : Colors.BLACK
            }}>
              {item.courseTitle}
            </Text>
          </Pressable>
        ))}
      </View>

      {selectedTopic.length > 0 ? (
        <Button text='Generate Topic ' onPress={generateCourse} loading={loading} />
      ) : null}
    </View>
  )
}
