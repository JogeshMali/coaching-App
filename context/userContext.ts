import { createContext, Dispatch, SetStateAction } from "react";

export interface UserDetail {
  name?: string;
  email?: string;
  member?:boolean,
  uid:string
  // Add any other fields you need
}

interface UserContextType {
  userDetail: UserDetail | null;
setUserDetail: Dispatch<SetStateAction<UserDetail | null>>;}

export const UserDetailContext = createContext<UserContextType>({
  userDetail: null,
  setUserDetail: () => {},
});
