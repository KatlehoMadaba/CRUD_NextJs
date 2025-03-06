"use client"
import React ,{ useReducer, useContext} from "react";
import bcrypt from 'bcrypt'
import {
  UserStateContext,
  UserActionContext,
  INITIAL_STATE,
  IUser,
} from "./context";

import { UserReducer } from "./reducer";
import { createUserError, createUserPending, createUserSuccess, getUserError, getUserPending, getUsersError, getUsersPending, getUsersSuccess } from "./action";
import axios from "axios";


 const useUserState = () => {
  const context =useContext(UserStateContext);
  if (!context) {
    throw Error("Please ensure you have used the UserStateContext Provider");
  }
  return context;
};

 const useUserActionState = () => {
  const context = useContext(UserActionContext);;
  if (!context) {
    throw Error("Please ensure you have used the UserActionContext Provider");
  }
  return context;
};


const UseUsers = () => {
  return {
    ...useUserState(),
    ...useUserActionState(),
  };
};

export { UseUsers };

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  const getUsers = async () => {
    dispatch(getUsersPending());
    const endpoint = "https://api.jsonbin.io/v3/b/67c8c259acd3cb34a8f5a0d0";
    await axios(endpoint)
    .then((response) => {
        const record=response.data["record"];
        dispatch(getUsersSuccess(record));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getUsersError());
      });
  };

  const createUser = async (user: IUser) => {
    dispatch(createUserPending());
    const endpoint="https://api.jsonbin.io/v3/b/67c9f9f5ad19ca34f817bc27";
    const headers={
      'Content-Type':'application/json0',
      'X-Master-Key':'$2a$10$oEW1jrfwvebny1NG23sNu.AdElEtKjkIkD4/4.RqSnJKFU/BGGYxu'
    };
    const data={
      record:user,
    }
    try{
      const response =await axios.post(endpoint,data,{headers});
      dispatch(createUserSuccess(response.data.record));
    }catch (error){
      console.error('Error creating users:',error);
      dispatch(createUserError());
    }
    // const registeredUsers :IUser[]=getUsers()||[];

    // const exsitingEmail=registeredUsers.some(exsiting=>exsiting.email===user.email)
    // try{
    //   if(exsitingEmail){
    //     alert('This user already exits ')
    //     return
    //  }
    //  if(user.password !== user.confirmpassword){
    //   alert("Passwords are not matching");
    //   console.log("Passwords are not matching","CreatedPassword:",user.password,"ConfrimPassword",user.confirmpassword )
    //   return;
    //   }
    //   const hasedPassword:string=bcrypt.hashSync(user.password,10);
      
    //   const newUser:IUSER={
    //     id:user.id,
    //     name:user.name,
    //     surname:user.surname,
    //     email:user.email,
    //     password:user.password,
    //     confirmpassword:user.confirmpassword
    //   }
    //   registeredUsers.
    // }
    // catch{

    // }
  };

  const getUser = async (id: string) => {
    
  };

  const deleteUser = async (id: string) => {};
  const updateUser = async (user: IUser) => {};

  return (
    <div>
      <UserStateContext.Provider value={state}>
        <UserActionContext.Provider
          value={{ getUsers, getUser, createUser, updateUser, deleteUser }}
        >
          {children}
        </UserActionContext.Provider>
      </UserStateContext.Provider>
    </div>
  );
};
export default UserProvider;
