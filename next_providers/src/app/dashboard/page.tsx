import { useEffect } from "react";
import { UseUsers } from "../../providers/userProvider";
import React from "react";
// import { IUser } from "src/providers/userProvider/context";
const Justshowing = () => {
    const { users, isPending, isError } = UseUsers();
    const { getUsers, getUser, createUser, updateUser, deleteUser } = UseUsers();
    useEffect(() => {
        getUsers();
        console.log("users are got");
    }, [getUsers]);
    if (isPending) {
        return <div>Loading users...</div>;
    }

    if (isError) {
        return <div>Error loading products!</div>;
    }

    if (!users || users.length === 0) {
        return <div>No products found !</div>;
    } 
    return (
        <div>
            <h1>Just showing</h1>
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default Justshowing;
