import Colors from '@/app/constant/Colors';
import { CourseList } from '@/app/constant/CourseListInterface';
import { db } from '@/config/firebaseConfigs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

type CourseType = {
  id: string;
  course?: CourseList;
};

export default function ChaptersView({ course, id }: CourseType) {
  const router = useRouter();
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);

  useEffect(() => {
    const fetchCompletedChapters = async () => {
      try {
        const courseRef = doc(db, 'Courses', id);
        const snapshot = await getDoc(courseRef);
        if (snapshot.exists()) {
          const data = snapshot.data();
          const completed = data.chapterComplete || [];
          setCompletedChapters(completed);
        }
      } catch (error) {
        console.error('Error fetching completed chapters:', error);
      }
    };

    fetchCompletedChapters();
  }, [id]);

  const isChapterComplete = (index: number) => {
    return completedChapters.includes(index);
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 22 }}>Chapters</Text>

      <FlatList
        data={course?.chapters}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: '/ChapterView',
                params: {
                  chapterParams: JSON.stringify(item),
                  id: id,
                  chapterindex: index,
                },
              })
            }
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
              borderWidth: 0.4,
              marginTop: 10,
              borderRadius: 15,
              alignItems: 'center',
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                flex: 1,
              }}
            >
              <Text style={{ fontFamily: 'outfit', fontSize: 20 }}>
                {index + 1}.
              </Text>
              <Text
                style={{
                  fontFamily: 'outfit',
                  fontSize: 20,
                  flexWrap: 'wrap',
                  flex: 1,
                }}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {item.chapterName}
              </Text>
            </View>
            {isChapterComplete(index) ? (
              <Ionicons
                name="checkmark-circle"
                size={20}
                color={Colors.PRIMARY}
              />
            ) : (
              <Ionicons name="play" size={20} color={Colors.PRIMARY} />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
