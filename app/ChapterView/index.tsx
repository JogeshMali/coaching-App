import Button from '@/components/Home/Button';
import { db } from '@/config/firebaseConfigs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Colors from '../constant/Colors';
const ProgressBar = require('react-native-progress/Bar').default;

export default function ChaptersView() {
     const {chapterParams,id,chapterindex} = useLocalSearchParams();
       if (!chapterParams || Array.isArray(chapterParams)||!chapterindex||!id||Array.isArray(chapterindex)||Array.isArray(id)) {
      return null; 

    }
    
    let item;
    try {
      item = JSON.parse(chapterParams);
    } catch (e) {
      console.error('Failed to parse courseParams', e);
      return null;
    }
    
    if (!item) return null;
    const router = useRouter()
   

    const [loader,setloader]=useState(false)
    
    const [currentPage,setCurrentPage]= useState(0)
    const getProgress =({currentPage}:{currentPage:number})=>{
        const perc = (currentPage/item?.content?.length)
        return perc
    }
    const chapterComplete =async()=>{
      setloader(true)
      await updateDoc(doc(db,'Courses',id),{
        chapterComplete:arrayUnion(parseInt(chapterindex))
      })
      setloader(false)
      router.replace({
        pathname:'/CourseView',
        params:{courseId:id}
      })
    }
    return (
    <View style={{
        flex:1,
      
        backgroundColor:Colors.WHITE
    }}>        
    <View style={{
        marginTop:20,
        padding:25
    }}>
      <ProgressBar progress={getProgress({currentPage})} 
      width={Dimensions.get('screen').width *0.85}/>
      <View >
        <Text style={{
          fontFamily:"outfit-bold",
          fontSize:25,
          marginTop:15
        }}>{item?.content[currentPage]?.topic}</Text>
        <Text style={{
          fontFamily:"outfit",
          fontSize:18,
          marginTop:10,
        }}>{item?.content[currentPage]?.explain}</Text>
        {item?.content[currentPage]?.code && (<Text style={[style.codeExampleText,{backgroundColor:Colors.BLACK,color:Colors.WHITE}]}>{item.content[currentPage].code}</Text>)}
        {item?.content[currentPage]?.example && (<Text style={[style.codeExampleText]} >{item.content[currentPage].example}</Text>)}
      </View>
     
    </View>
     <View style={{
        position:'absolute',
        bottom:15,
        width:'100%',
        paddingHorizontal:20
      }}>
        {item?.content?.length-1!=currentPage?
        <Button text='Next' onPress={()=>setCurrentPage(currentPage+1)}/>
        : <Button text='Finish' onPress={chapterComplete} loading={loader}/>
        } 
      </View>
    <Ionicons name='arrow-back' size={30} onPress={()=> router.back()} style={{position:"absolute"}}/>
    </View>
  )
}
const style = StyleSheet.create({
  codeExampleText:{
    padding:15,
    backgroundColor:Colors.BG_GRAY,
    marginTop:15,
    fontSize:18,
    fontFamily:'outfit',
    borderRadius:15
  }
})