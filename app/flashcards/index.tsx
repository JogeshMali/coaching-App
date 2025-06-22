import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, FlatList, Image, Text, View } from 'react-native';
import FlipCard from 'react-native-flip-card';
import Colors from '../constant/Colors';
const ProgressBar = require('react-native-progress/Bar').default;

export default function FlashCard() {

     const { courseParams } = useLocalSearchParams()
      if (!courseParams || Array.isArray(courseParams)) {
        return null
      }
      const id = JSON.parse(courseParams as string)
      const course = JSON.parse(courseParams as string).course
      const flashcardList = course.flashcards

      console.log('corse', flashcardList)
      
      const router = useRouter()
      const [currentPage, setCurrentPage] = useState(0)
      const width = Dimensions.get('screen').width


      const onscroll =(event:any)=>{
        const index = Math.round(event?.nativeEvent?.contentOffset.x/width)
        console.log(index)
        setCurrentPage(index)
      }
  return (
    <View>
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
          }}>{currentPage + 1} of {course.flashcards.length} </Text>

        </View>
        <ProgressBar progress={(currentPage ) / course.flashcards.length} color={Colors.WHITE}
          width={Dimensions.get('screen').width * 0.85} />

    <FlatList 
     data={flashcardList}
     horizontal
     pagingEnabled
     onScroll={onscroll}
     showsHorizontalScrollIndicator={false}
     renderItem={({item,index})=>(
         <View key={index}
         style={{
             height:600,
            
             marginTop:50,
             //backgroundColor:Colors.WHITE
            }}>
            
<FlipCard style={{
    width:width*0.78,
    height:500,
    backgroundColor:Colors.WHITE,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    marginHorizontal:width*0.05
}}>
  
  <View style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    borderRadius:20,

  }} >
    <Text style={{
        fontFamily:'outfit-bold',
        fontSize:28
    }}>{item.front}</Text>
  </View>

  <View style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    borderRadius:20,
    backgroundColor:Colors.PRIMARY
  }}>
    <Text style={{
        fontFamily:'outfit',
        fontSize:25,
        padding:15,
        width:width*0.78,
        textAlign:'center',
        color:Colors.WHITE
    }}>{item.back}</Text>
  </View>
</FlipCard>
        </View>
     )}
     />
    </View>
     </View>
  )
}