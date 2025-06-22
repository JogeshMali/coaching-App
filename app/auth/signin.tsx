import { auth, db } from '@/config/firebaseConfigs';
import { UserDetail, UserDetailContext } from '@/context/userContext';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Colors from '../constant/Colors';

const Signin = () => {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [email,setEmail] = useState<string>('')
  const [password,setPassword] = useState<string>('')
  const [loading ,setloading]= useState(false)
  const router = useRouter()
  const {userDetail,setUserDetail} = useContext(UserDetailContext)


  const signInCheck = ()=>{
          setloading(true)
    signInWithEmailAndPassword(auth,email,password)
    .then(async(res) =>{

      const user = res.user
      router.replace('/(tabs)/home')
     // ToastAndroid.show('Login Successful',ToastAndroid.BOTTOM)
      console.log(user)
      await getUserDetail()
      setloading(false)

    }).catch(e =>{
      console.log(e.message)
            setloading(false)

      //ToastAndroid.show('Incorrect Email & Password',ToastAndroid.BOTTOM)
    })
  }

  const getUserDetail =async ()=>{
    const result  = await getDoc(doc(db,'users',email))
    console.log('getUser'+result.data())
    setUserDetail(result.data() as UserDetail )
    console.log('getUser'+userDetail)
  }
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        padding: 60,
      }}
    >
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        source={require('@/assets/images/logo.png')}
      />

      <Text style={{ fontFamily: 'outfit-bold', fontSize: 24 }}>
        Welcome Back
      </Text>

     
      <TextInput
        style={[
          styles.input,
          focusedInput === 'email' && { borderColor: Colors.PRIMARY },
        ]}
        onChangeText={setEmail}
        placeholder="Email"
        onFocus={() => setFocusedInput('email')}
        onBlur={() => setFocusedInput(null)}
      />
      <TextInput
        style={[
          styles.input,
          focusedInput === 'password' && { borderColor: Colors.PRIMARY },
        ]}
        onChangeText={setPassword}

        placeholder="Password"
        secureTextEntry
        onFocus={() => setFocusedInput('password')}
        onBlur={() => setFocusedInput(null)}
        
      />

      <TouchableOpacity style={styles.btn}>
       {!loading? <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 18,
            color: Colors.WHITE,
            textAlign: 'center',
          }}
          onPress={signInCheck}
        >
          Login
        </Text>:
        <ActivityIndicator size={'large'} color={Colors.WHITE}/>
        }
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          gap: 10,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 18,
            textAlign: 'center',
          }}
        >
          Create  an Account ?
        </Text>
        <Text
          onPress={()=> router.push('/auth/signup')}
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 18,
            color: Colors.PRIMARY,
            textAlign: 'center',
            textDecorationLine: 'underline',
          }}
        >
          Sign up
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    marginTop: 25,
    fontSize: 18,
    fontFamily: 'outfit',
    elevation: 6,
    borderColor: Colors.GRAY,
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    padding: 20,
    borderRadius: 6,
    borderColor: Colors.BLACK,
    borderWidth: 1,
    elevation: 8,
    shadowColor: Colors.GRAY,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    marginTop: 25,
    width: '100%',
  },
});

export default Signin;
