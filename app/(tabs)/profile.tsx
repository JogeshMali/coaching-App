import { auth } from '@/config/firebaseConfigs'
import { UserDetailContext } from '@/context/userContext'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import Colors from '../constant/Colors'
const router = useRouter()
const {userDetail,setUserDetail}= useContext(UserDetailContext)
export default function Profile() {
  
  return (
    <View style={{flex:1, backgroundColor: Colors.WHITE,
            padding: 20,}}> 
      <Text style={{
        fontFamily:"outfit-bold",
        fontSize:25,
      }}>Profile</Text>
    <View
          style={{
            
            justifyContent: 'center',
            alignItems: 'center',
            
          
          }}
        >
          <Image
            style={{
              width: 200,
              height: 200,
            }}
            source={require('@/assets/images/logo.png')}
          />
    
      <Text style={{
        fontFamily:"outfit-bold",
        fontSize:22,
      }}>{userDetail?.name}</Text>
      <Text style={{
        fontFamily:"outfit",
        fontSize:20,
        color:Colors.GRAY
      }}>{userDetail?.email}</Text>
      </View>
     <View style={{
      display:'flex',
      flex:1,
      justifyContent:'flex-start',
      marginTop:30
      
     }}>
      <Tab navigate='/(tabs)/explore' name='add' text='Add Course'/>
      <Tab navigate='/(tabs)/home' name='book' text='My Course'/>
      <Tab navigate='/(tabs)/progress' name='analytics-outline'text='Course Progress' />
      <Tab navigate='' name='exit' text='Logout'/>
     </View>
    </View>
    
  )
}
const logout=()=>{
  signOut(auth).then(res=>{
    console.log('logout')
    setUserDetail(null)
    router.replace('/auth/signin')
  })
}
const Tab= ({navigate,name,text}:any)=>{
  return(
    <Pressable onPress={()=>name=='exit'?logout(): router.push(navigate)} style={{
      padding:15,
      paddingRight:50,
      borderRadius:15,
      borderColor:Colors.BG_GRAY,
      borderWidth:1,
      elevation:10,
      shadowOffset:{
        width:4,
        height:3
      },
      shadowColor:Colors.BG_GRAY,
      marginTop:20,
      
    }}>
      <View style={{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:"center",
        flexDirection:'row',
        gap:20
      }}>

        <Ionicons name={name} size={30} color={Colors.PRIMARY} style={{
          backgroundColor:Colors.BG_GRAY,
          padding:8,
          borderRadius:12
        }}/>
        <Text style={{
        fontFamily:"outfit-bold",
        fontSize:22,
      }}>{text}</Text>
      </View>
     </Pressable>
  )
}