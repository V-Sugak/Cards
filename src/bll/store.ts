import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import {AppActionsType, appReducer} from "./app-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";

let rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunk))


//types
export type RootStateType = ReturnType<typeof rootReducer>
export type RootActionsType =
    | AppActionsType
    | AuthActionsType
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, RootActionsType>
export type AppDispatch = ThunkDispatch<RootStateType, unknown, RootActionsType>