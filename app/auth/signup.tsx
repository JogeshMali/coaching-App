import { UserDetailContext } from '@/context/userContext';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { auth, db } from '../../config/firebaseConfigs';
import Colors from '../constant/Colors';

const Signup = () => {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [name,setName] = useState<string>('')
  const [email,setEmail] = useState<string>('')
  const [password,setPassword] = useState<string>('')
  const [loading,setloading]=useState(false)
  const router = useRouter()
  const {userDetail,setUserDetail}=useContext(UserDetailContext)

  const CreateNewAccount = ()=>{
    setloading(true)
    createUserWithEmailAndPassword(auth,email,password)
    .then(async (res) =>{
      const user = res.user
      await saveUser(user) 
      setloading(false)
      router.replace('/(tabs)/home')
      console.log(user)
    }).catch(e=>{
      console.log(e.message)
            setloading(false)
    })
  }
  const saveUser =async (user :any)=>{
    const data = {
      name:name,
      email:email,
      member:false,
      uid:user?.uid
    }
    await setDoc(doc(db ,'users',email),data)
    setUserDetail(data)
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
        Create New Account
      </Text>

      <TextInput
        style={[
          styles.input,
          focusedInput === 'name' && { borderColor: Colors.PRIMARY },
        ]}
        onChangeText={setName}
        placeholder="Name"
        onFocus={() => setFocusedInput('name')}
        onBlur={() => setFocusedInput(null)}
      />
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

      <TouchableOpacity style={styles.btn} onPress={CreateNewAccount}>
        {!loading?<Text
          style={{
            fontFamily: 'outfit',
            fontSize: 18,
            color: Colors.WHITE,
            textAlign: 'center',
          }}
        >
          Create Account
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
          Already have an Account ?
        </Text>
        <Text
          onPress={()=> router.push('/auth/signin')}
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 18,
            color: Colors.PRIMARY,
            textAlign: 'center',
            textDecorationLine: 'underline',
          }}
        >
          Sign in
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

export default Signup;
