const initialState={
    countries:[],
    isLoading:false
}

function countriesReducer(state=initialState,action){
    if(action.type==='UPDATE_COUNTRIES'){
        return {...state,countries:[...action.payload]}
    }
    return state
}

export default countriesReducer;