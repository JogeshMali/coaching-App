import Button from '@/components/Home/Button';
import { db } from '@/config/firebaseConfigs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import Colors from '../constant/Colors';
import { CourseList } from '../constant/CourseListInterface';
const ProgressBar = require('react-native-progress/Bar').default;

type CourseType = {
  id: string;
  course?: CourseList

};
type QuizResult = {
  userChoice: string;
  isCorrect: boolean;
  question: string;
  correctAns: string;
};
export default function Quiz() {
  const { courseParams } = useLocalSearchParams()
  if (!courseParams || Array.isArray(courseParams)) {
    return null
  }
  const id = JSON.parse(courseParams as string)
  const course = JSON.parse(courseParams as string).course
  console.log('corse', id.id)
  
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedOption,setSelectedOption]=useState(-1)
const [result, setResult] = useState<{ [key: number]: QuizResult }>({});
const [loading,setloading]=useState(false)
  const onOptionSelect = (selectedChoice:string)=>{
   setResult(prev=>({
    ...prev,
    [currentPage]:{
      userChoice:selectedChoice,
      isCorrect:course.quiz[currentPage].correctAns==selectedChoice,
      question:course.quiz[currentPage].question,
      correctAns:course.quiz[currentPage].correctAns
    }
   }))
   console.log(result)
  }
  const onQuizFinish=async()=>{
   setloading(true)
   try{
     await updateDoc(doc(db,'Courses',id.id),{
      quizResult :result
     })
     router.push({
      pathname:'/quiz/summary',
      params:{
        quizResultParam:JSON.stringify(result)
      }
     })
   }catch(e){
    setloading(false)
   }
   setloading(false)
  }
  return (
    <View style={{

    }}>
      <Image source={require('../../assets/images/wave.png')} style={{
        width: '100%',
        height: 650
      }} />
      <View style={{
        position: 'absolute',
        width: '100%',
        padding: 30,

      }}>
        <View style={{

          display: 'flex',
          flexDirection: 'row',
          marginBottom: 25,
          alignItems: "center",
          justifyContent: 'space-between'
        }}>


          <Ionicons name='arrow-back' size={30} color={Colors.WHITE} style={{

          }} onPress={() => router.back()} />
          <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 20,
            color: Colors.WHITE
          }}>{currentPage + 1} of {course.quiz.length} </Text>

        </View>
        <ProgressBar progress={(currentPage ) / course.quiz.length} color={Colors.WHITE}
          width={Dimensions.get('screen').width * 0.85} />

        <View style={{
          marginTop: 20,
          borderRadius: 15,
          height: Dimensions.get('screen').height * 0.70,
          backgroundColor: Colors.WHITE,
          padding: 15,
          marginBottom: 20
        }}>
          <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 25,
            marginBottom: 20
          }}>{course.quiz[currentPage].question}</Text>

          {course.quiz[currentPage].options.map((item: string, index: number) => (
            <View key={index} style={{
              padding: 20,
              marginVertical: 15,
              backgroundColor: selectedOption==index?Colors.LIGHT_GREEN:'#f1f1f1',
              borderRadius: 10
              
            }}>
              <Text style={{ fontSize: 20 }} onPress={()=>setSelectedOption(index)}>{item}</Text>
            </View>
          ))}






        </View>

        <View style={{
          flexDirection: 'row',
  justifyContent: 'space-between',
  gap: 10,
  marginTop: 10,
       
        }}>
          
         {currentPage!=0&&(
          <View style={{ flex: 1 }}>
          <Button
            text='Prev'
            onPress={() => {
              if (currentPage > 0) {
                setCurrentPage(currentPage - 1);
                setSelectedOption(-1)}
            }}
          /></View>)}
          
          <View style={{ flex: 1 }}>
         {currentPage == course.quiz.length-1?
         (<Button text='Submit' onPress={()=>{
          onOptionSelect(course.quiz[currentPage].options[selectedOption])
          onQuizFinish()
        }} loading={loading}/>)
         :(<Button
            text='Next'
            onPress={() => {
              if (currentPage < course.quiz.length - 1) {
                setCurrentPage(currentPage + 1) 
                setSelectedOption(-1);
                onOptionSelect(course.quiz[currentPage].options[selectedOption])
              }
            }}
          />)
}
      </View>
        </View>
      </View>
    </View>
  )
}