const initialState: StateType = {
    isLoggedIn: false,
}

export const authReducer = (state: StateType = initialState, action: AuthActionsType): StateType => {
    switch (action.type) {
        case "AUTH/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

//actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'AUTH/SET-IS-LOGGED-IN', value} as const)


//types
type StateType = {
    isLoggedIn: boolean
}
export type AuthActionsType = |ReturnType<typeof setIsLoggedInAC>