import Colors from '@/app/constant/Colors';
import { CourseList } from '@/app/constant/CourseListInterface';
import { imageAssets } from '@/app/constant/Option';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
// type CourseType = {
//   id: string;
//   course?: {
//     courseTitle?: string;
//     [key: string]: any;
//   };
//   createdBy?: string;
//   createdOn?: any;
//   [key: string]: any;
// };
type Props = {
  courseList: CourseType[];
};
type CourseType = {
  id: string;
  course?: CourseList
  
};
const router = useRouter()
export default function CoursePlaylist({courseList}:Props) {
  console.log(courseList[0].id)
  return (
    <View style={{
        marginTop:20
    }}>
     <Text style={{
        fontFamily:"outfit-bold",
        fontSize:25
     }}>Courses</Text>
     <FlatList
     data={courseList}
     keyExtractor={(item)=>item.id}
     showsHorizontalScrollIndicator={false}
     renderItem={({item})=>(
      
        <TouchableOpacity style={{
            display:'flex',
            width:260,
           
            backgroundColor:Colors.BG_GRAY,
            padding:10,
            margin:5,
            borderRadius:15
        }}
        onPress={()=>router.push({
          pathname:'/CourseView',
          params:{courseParams:JSON.stringify({item}),courseId:item.id,enroll:'false'}
        })}
        >
           {item.course?.banner_image && (<Image style={{
            width:"100%",
            height:180,
            borderRadius:15

            }} source={imageAssets[item.course.banner_image]} />)}
           <Text style={{
            fontFamily:'outfit-bold',
            fontSize:20,
            marginTop:5,
            marginLeft:5
           }}>{item.course?.courseTitle}</Text>
           <View style={
            {
                display:'flex',
                flexDirection:'row',
                alignItems:"center",
                gap:5,
                marginTop:3,
                marginLeft:5
            }
           }>
            <Ionicons name='book-outline' size={16} color={Colors.BLACK}/>
            <Text style={{
            fontFamily:'outfit',
          
           }}>{item.course?.chapters.length} Chapters</Text>
           </View>
        </TouchableOpacity>
  )}
   horizontal={true}
     />

    </View>
  )
}