// // High order Component function that accepts a component and returns a new Component
// // Purpose used to add common functionality to multiple Components without modifying the orginal code 
// import { Navigate } from "react-router";
// import Link from "next/link";
// import React from "react";
// interface PropsWithAuth {
//     allowedRoles?:string[]
// }

// const withAuth = (WrappedComponent:React.ComponentType,{allowedRoles=[]}:PropsWithAuth) => {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   return (props:any)=>{
//     const token = localStorage.getItem('auth_token');
//     const userRole = localStorage.getItem('user_role');
//     if(!token){
//         return 
//     }
//      //        //checking if the token exits
//     // if(!token){
//     //     //the user will be redirected to login page and the current page is replaced in the history stack preventing
//     //     //the user form navigating  back to current page using the broswer back button protection from unauth access
//     //     return <Navigate to="/login" replace/>
//     // }
//     //     //get the auth token from the local storage
//     //     const token =localStorage.getItem('auth_token');
//     //     const userRole=localStorage.getItem('user_role');
   
//     // //if the allowedRole array has values inside and the array doesnt not include a userRole or is empty then you check whether the userRole
//     // //is admin or client 
//     // //So if the the allowedRoles is populated and does not include the userRole exits or is empty.
//     // if(allowedRoles.length > 0 && !allowedRoles.includes(userRole || '') ){
//     //     if (userRole === 'admin') {
//     //         return <Navigate to="/admin" replace />;
//     //       }
//     //       return <Navigate to="/client" replace />;
//     //     }
//     //     //If authentication and authorization checks pass, it renders the WrappedComponent with all its props.
//     //     //WrappedComponent is a prop for the Component going to be based at App.jsx
//     //     
//     }
   
//   };
// export default withAuth;
