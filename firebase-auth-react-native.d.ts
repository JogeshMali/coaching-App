// firebase-auth-react-native.d.ts
declare module 'firebase/auth/react-native' {
  import AsyncStorage from '@react-native-async-storage/async-storage';
    import { Persistence } from 'firebase/auth';

  export function getReactNativePersistence(storage: typeof AsyncStorage): Persistence;
}
