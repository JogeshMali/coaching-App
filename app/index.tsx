import { auth, db } from "@/config/firebaseConfigs";
import { UserDetail, UserDetailContext } from "@/context/userContext";
import { useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useContext } from "react";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "./constant/Colors";

export default function Index() {
  const router = useRouter()
  const {userDetail,setUserDetail} = useContext(UserDetailContext)

  onAuthStateChanged(auth,async (user)=>{
    if(user?.email){
      const result= await getDoc(doc(db,'users',user.email))
          console.log('getUser'+user)
          setUserDetail(result.data() as UserDetail )
      router.replace('/(tabs)/home')    
    }
  })
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:Colors.WHITE
      }}
    >
    <Image
    style={{
      width:"100%",
      height:350,
      marginTop:70

    }}
    source={require('../assets/images/landing.png')}/>
    <View
      style={{
        backgroundColor:Colors.PRIMARY,
        padding:25,
        height:"100%",
        borderTopLeftRadius:35,
        borderTopRightRadius:35
      }}>
      <Text 
       style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        color:Colors.WHITE,
        textAlign:'center',
        marginTop:10
       }}>Welcome to Coaching Guru</Text>

       <Text 
       style={{
        fontFamily:'outfit',
        fontSize:20,
        color:Colors.WHITE,
        textAlign:'center',
        marginTop:25
       }}>Transform your ideas into engaging educational content , effortlessly with AI 📖🤖</Text>

       <TouchableOpacity 
       onPress={()=> router.push('/auth/signup')}
         style={styles.btn}
         >
         <Text 
         style={{
          fontFamily:'outfit',
        fontSize:18,
        
        textAlign:'center',
         }}>Get Started</Text>
       </TouchableOpacity>
       <View 
        style={{
          flexDirection:"row",
          marginTop:15,
          padding:10,
          gap:10,
          justifyContent:'center'
        }}
        >
        <Text
         style={{
          
        fontFamily:'outfit',
        fontSize:18,
        color:Colors.WHITE,
        textAlign:'center',
     
         }}>Already have an Account ?</Text>
        <Pressable
        onPress={()=>router.push('/auth/signin')}
        >< Text 
        style={{
            
        fontFamily:'outfit-bold',
        fontSize:18,
        color:Colors.WHITE,
        textAlign:'center',
        textDecorationLine:"underline"
        }}>Sign in</Text></Pressable>
       </View>

    </View>
    </View>
  );
}
const styles  = StyleSheet.create({
btn:{
  backgroundColor:Colors.WHITE,
          padding:20,
          borderRadius:6,
          borderColor:Colors.BLACK,
          borderWidth:1,
          elevation:8,
          shadowColor:Colors.GRAY,
          shadowOffset:{
            width:1,height:2
          },
          marginTop:25
}
})
