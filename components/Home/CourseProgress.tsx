import Colors from '@/app/constant/Colors';
import { CourseList } from '@/app/constant/CourseListInterface';
import { imageAssets } from '@/app/constant/Option';
import { db } from '@/config/firebaseConfigs';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
const ProgressBar = require('react-native-progress/Bar').default;
type Props = {
    courseList: CourseType[];
};
type CourseType = {
    id: string;
    course?: CourseList

};
export default function CourseProgress({ courseList }: Props) {

const [progressData, setProgressData] = useState<{ [id: string]: number }>({});

  useEffect(() => {
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

    fetchProgress();
  }, [courseList]);


    return (
        <View style={{
            marginTop: 20
        }}>
            <Text style={{
                fontFamily: "outfit-bold",
                fontSize: 25,
                color:Colors.WHITE
            }}>Course Progress</Text>                

            <FlatList
                data={courseList}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                    const progress = progressData[item.id] || 0;
          const completedCount = Math.round(progress * (item.course?.chapters.length || 0));
          return(
                    <View style={{
                        backgroundColor: Colors.BG_GRAY,
                        borderRadius: 10,
                        padding: 8,
                        width: 250,
                        margin: 8
                    }}>
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
                        marginTop:10,

                    }}>
                        <ProgressBar progress={progress} width={220}/>
                        <Text style={{
                            fontFamily:'outfit',
                            fontSize:15,
                            marginTop:5
                        }}>
                            {completedCount??0} out {item.course?.chapters.length} Chapter Completed
                        </Text>
                    </View>
                    </View>
                    
                )}}
            />
        </View>
        
    )
}