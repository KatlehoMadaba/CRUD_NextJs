import { IUser, IUserStateContext } from "./context";
import { createAction } from "redux-actions"

export enum UserActionEnums {
    getUsersPending = "GET_USERS_PENDING",
    getUsersSuccess = "GET_USERS_SUCCESS",
    getUsersError = "GET_USERS_ERROR",

    getUserPending = "GET_USER_PENDING",
    getUserSuccess = "GET_USER_SUCCESS",
    getUserError = "GET_USER_ERROR",

    createUserPending = "CREATE_USER_PENDING",
    createUserSuccess = "CREATE_USER_SUCCESS",
    createUserError = "CREATE_USER_ERROR",

    updateUserPending = "UPDATE_USER_PENDING",
    updateUserSuccess = "UPDATE_USER_SUCCESS",
    updateUserError = "UPDATE_USER_ERROR",

    deleteUserPending = "DELETE_USER_PENDING",
    deleteUserSuccess = "DELETE_USER_SUCCESS",
    deleteUserError = "DELETE_USER_ERROR",
};

export const getUsersPending = createAction<IUserStateContext>(
    UserActionEnums.getUsersPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getUsersSuccess = createAction<
    IUserStateContext,
    IUser[]>(
        UserActionEnums.getUsersSuccess,
        (users: IUser[]) => ({
            isPending: false,
            isSuccess: true,
            isError: false,
            users
        })
    );

export const getUsersError = createAction<IUserStateContext>(
    UserActionEnums.getUsersError,
    () => ({ isPending: false, isSuccess: false, isError: true })
);

export const getUserPending = createAction<IUserStateContext>(
    UserActionEnums.getUserPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getUserSuccess = createAction<
    IUserStateContext, IUser>(
        UserActionEnums.getUserSuccess,
        (user: IUser) => ({
            isPending: false,
            isSuccess: true,
            isError: false,
            user
        })
    )

export const getUserError = createAction<IUserStateContext>(
    UserActionEnums.getUserError,
    () => ({ isPending: false, isSuccess: false, isError: true })
)

export const createUserPending = createAction<IUserStateContext>(
    UserActionEnums.createUserPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
)

export const createUserSuccess = createAction<
    IUserStateContext, IUser>(
        UserActionEnums.createUserSuccess,
        (user: IUser) => ({
            isPending: false,
            isSuccess: true,
            isError: false,
            user
        })
    )

export const createUserError = createAction<IUserStateContext>(
    UserActionEnums.createUserError,
    () => ({ isPending: false, isSuccess: false, isError: true })
)

export const deleteUserPending = createAction<
    IUserStateContext, IUser>(
        UserActionEnums.deleteUserPending,
        (user: IUser) => ({
            isPending: true,
            isSuccess: false,
            isError: false,
            user,
        })
    );

export const deleteUserSuccess = createAction<
    IUserStateContext, IUser>(
        UserActionEnums.deleteUserSuccess,
        (user: IUser) => ({
            isPending: false,
            isSuccess: true,
            isError: false,
            user,
        })
    );

export const deleteUserError = createAction<
    IUserStateContext, IUser>(
        UserActionEnums.deleteUserError,
        (user: IUser) => ({
            isPending: false,
            isSuccess: false,
            isError: true,
            user,
        })
    );

export const updateUserPending = createAction<IUserStateContext>(
    UserActionEnums.updateUserPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
)

export const updateUserSuccess = createAction<
    IUserStateContext, IUser>(
        UserActionEnums.updateUserSuccess,
        (user: IUser) => ({
            isPending: false,
            isSuccess: true,
            isError: false,
            user
        })
    )

export const updateUserError = createAction<IUserStateContext>(
  UserActionEnums.updateUserError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);