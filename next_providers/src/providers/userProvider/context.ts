"use client"
import { createContext } from "react";

//shape of User object
//data stucture from api
export interface IUser{
    id:string;
    name:string;
    surname:string;
    username:string;
    email:string;
    password:string;
    confirmpassword:string;
}

//state shape for our context 
export interface IUserStateContext{
    isPending:boolean;
    isSuccess:boolean;
    isError:boolean;
    user?:IUser;//Single User(optional)
    users?:IUser[];//Array of Users(optional)
    readonly UserCreated?:IUser;
}

//defining th actions that can be performed on proudcst
 export interface IUserActionContext{
    getUsers:()=>void;
    getUser:(id:string)=>void;
    createUser:(user:IUser)=>void;//create new User//ask your self why you dont recieve an id but a User
    updateUser:(user:IUser)=>void;//update exiting User
    deleteUser:(id:string)=>void;
 }

 export const INITIAL_STATE:IUserStateContext={
    isPending:false,
    isSuccess:false,
    isError:false,
 }

 export const UserStateContext=
    createContext<IUserStateContext>(INITIAL_STATE);

export const UserActionContext=
    createContext<IUserActionContext>(undefined);
