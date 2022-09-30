const initialState: StateType = {
    isInitialized: false,
}

export const appReducer = (state: StateType = initialState, action: AppActionsType): StateType => {
    switch (action.type) {
        case "APP/IS-INITIALIZED":
            return {...state, isInitialized: action.isInitialized}
        default:
            return state
    }
}

//actions
export const setIsInitializedAC = (isInitialized: boolean) => ({type: "APP/IS-INITIALIZED", isInitialized} as const)


//types
type StateType = {
    isInitialized: boolean
}
export type AppActionsType = |ReturnType<typeof setIsInitializedAC>