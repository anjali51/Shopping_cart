
const initialState={
    products:[],
    isLoading:false,
    cart:[]
}

function productReducer(state=initialState,action){
    if(action.type==='UPDATE_PRODUCTS'){
        return {...state,products:[...action.payload]}
    }
    if(action.type==='TOGGLE_LOADER'){
        return {...state, isLoading:!state.isLoading}
    }
    if(action.type==='ADDTOCART'){
        action.payload.count=1
        return {...state,cart:[...state.cart,action.payload]}
    }
    if(action.type==='INC-CART-PROD-COUNT'){
        var temp=[...state.cart];
        temp=temp.map((cp)=>{
            if(cp.id===action.payload.id){
                cp.count++;
            }
            return cp;
        })
        return {...state,cart:[...temp]}
    }

    if(action.type==='DEC-CART-PROD-COUNT'){
        var temp=[...state.cart];
        temp=temp.map((cp)=>{
            if(cp.id===action.payload.id){
                cp.count--;
            }
            return cp;
        })
        return {...state,cart:[...temp]}
    }

    if(action.type==='DELETE-CART-PROD'){
        var temp=[...state.cart];
        temp=temp.filter((cp)=>{
            if(cp.id===action.payload.id){
                return false;
            }
            else{
                return true;
            }
        })
        return {...state,cart:[...temp]}
    }

    return state
}
export default productReducer