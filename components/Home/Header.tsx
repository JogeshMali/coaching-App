import Colors from '@/app/constant/Colors'
import { UserDetailContext } from '@/context/userContext'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Header() {
    const {userDetail,setUserDetail} = useContext(UserDetailContext)
    console.log(userDetail)
    const router=useRouter()
  return (
    <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center"
    }}>
      <View>
        <Text style={{
            fontFamily:"outfit-bold",
            fontSize:25,
            color:Colors.WHITE
        }}>Hello, {userDetail?.name}</Text>
        <Text style={{
            fontFamily:"outfit",
            fontSize:17,
            color:Colors.WHITE
        }}>Let's get Started</Text>
      </View>
    <TouchableOpacity onPress={()=>router.push('/(tabs)/profile')}>
        <Ionicons name='settings-outline' size={30} color={Colors.WHITE}/>
    </TouchableOpacity>
    </View>
  )
}