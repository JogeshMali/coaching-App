import { UserDetail, UserDetailContext } from "@/context/userContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {
  useFonts({
    'outfit':require('.././assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold':require('.././assets/fonts/Outfit-Bold.ttf')
  })
  const [userDetail, setUserDetail] = useState<UserDetail | null>(null);
  return <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
     <Stack 
  screenOptions={{headerShown:false}}
  /></UserDetailContext.Provider>;
}
