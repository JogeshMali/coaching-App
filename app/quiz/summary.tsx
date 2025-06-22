import Button from '@/components/Home/Button';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import Colors from '../constant/Colors';
type QuizResult = {
  userChoice: string;
  isCorrect: boolean;
  question: string;
  correctAns: string;
};
export default function Summary() {
   
    const {quizResultParam}= useLocalSearchParams();
    if(!quizResultParam ||Array.isArray(quizResultParam)) return null
    const quizResult = JSON.parse(quizResultParam)
    const [correctAns,setCorrectAns]=useState<number>(0)
    const [totalQues,setTotalQues]=useState<number>(0)
    const router = useRouter()
   useEffect(()=>{
     quizResult &&calculateResult()
   },[quizResult])

  const calculateResult = () => {
  if (quizResult !== undefined) {
    const correctAns_ = Object.entries(quizResult).filter(
      ([_, value]) => (value as QuizResult).isCorrect === true
    );

    const totalQues_ = Object.keys(quizResult).length;

    setCorrectAns(correctAns_.length);
    setTotalQues(totalQues_);
  }
};
 const getPercMark = ()=>{
  return parseInt(((correctAns/totalQues)*100).toFixed(0))
 }

  return (
    <ScrollView>
      <Image style={{
        width:'100%',
        height:750,
      }}  source={require('../../assets/images/wave.png')}/>

      <View style={{position:'absolute',padding:25,flex:1,width:'100%'}}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:25,
        textAlign:'center',
        color:Colors.WHITE
      }}>Quiz Summary</Text>

      <View style={{
        backgroundColor:Colors.WHITE,
        marginTop:70,
        padding:10,
        width:'100%',
        borderRadius:15,
        display:'flex',
        alignItems:'center',
        
      }}>
        <Image style={{
            height:100,
            width:100,
            marginTop:-60
        }} source={require('../../assets/images/trophy.png')}/>
         <Text style={{fontFamily:'outfit-bold',fontSize:22}}>{getPercMark()>60?'Congratulations!':'Try Again!'}</Text>
         <Text style={{fontFamily:'outfit',fontSize:16,color:Colors.GRAY,marginTop:5}}>You gave {getPercMark()}% Correct Answer</Text>
        <View style={{
            display:'flex',
            flexDirection:'row',
            gap:20,
            marginTop:5,
            justifyContent:'space-between'
        }}>
        <Text style={{fontFamily:'outfit',fontSize:18,padding:15,backgroundColor:Colors.WHITE,elevation:1}}>{totalQues}Q</Text>
        <Text style={{fontFamily:'outfit',fontSize:18,padding:15,backgroundColor:Colors.WHITE,elevation:1}}>✅{correctAns}Q</Text>
        <Text style={{fontFamily:'outfit',fontSize:18,padding:15,backgroundColor:Colors.WHITE,elevation:1}}>❌{totalQues-correctAns}Q</Text>
        </View>
      </View>
      <Button text='Back To Home' onPress={()=>router.push('/(tabs)/home')}/>
      <View style={{flex:1,marginTop:15}}>
        <Text style={{fontFamily:'outfit-bold',fontSize:22}}>Summary</Text>
      <FlatList 
       data={Object.entries(quizResult)}
       renderItem={({item,index})=>{
         const quizItem = item[1] as QuizResult
         return (
          <View style={{
            padding:10,
            backgroundColor:quizItem.isCorrect?Colors.LIGHT_GREEN:Colors.LIGHT_RED,
            marginTop:10,
            borderRadius:10,
            borderColor:quizItem.isCorrect?Colors.GREEN:Colors.RED,
            borderWidth:1
            
          }}>
          <Text style={{fontFamily:'outfit-bold',fontSize:20}}>{quizItem.question}</Text>
          <Text style={{fontFamily:'outfit',fontSize:17}}>Ans: {quizItem.correctAns}</Text>
          </View>
        )
      }}
      />
      </View>
      </View>
    </ScrollView>
  )
}