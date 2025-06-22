import Ionicons from '@expo/vector-icons/Ionicons'
import { Tabs } from 'expo-router'
import React from 'react'
import Colors from '../constant/Colors'
export default function _Tablayout() {
  return (
    <Tabs 
    screenOptions={{
      headerShown:false,
      tabBarStyle:{
        backgroundColor:Colors.PRIMARY,
        borderTopLeftRadius:35,
       borderTopRightRadius:35,
       
        marginHorizontal:5,
        height:60
      },
      tabBarActiveTintColor:Colors.WHITE,
      tabBarInactiveTintColor:Colors.BG_GRAY,
      tabBarLabelStyle:{
        fontFamily:'outfit',
        fontSize:14
      }
    }}>
      <Tabs.Screen name='home'
        options={{
          tabBarIcon:({color,size})=><Ionicons name='home-outline'size={size} color={color}/>,
          tabBarLabel:'Home'
        }}/>
          <Tabs.Screen name='explore'
        options={{
          tabBarIcon:({color,size})=><Ionicons name='search-outline' size={size} color={color}/>,
          tabBarLabel:'Explore'
        }}/> 
         <Tabs.Screen name='progress'
        options={{
          tabBarIcon:({color,size})=><Ionicons name='analytics-outline' size={size} color={color}/>,
          tabBarLabel:'Progress'
        }}/>  
        <Tabs.Screen name='profile'
        options={{
          tabBarIcon:({color,size})=><Ionicons name='person-circle-outline' size={size} color={color}/>,
          tabBarLabel:'Profile'
        }}/>

    </Tabs>
  )
}