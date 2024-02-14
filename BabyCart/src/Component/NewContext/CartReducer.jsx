export const reducer=(state,action)=>{
    switch(action){
        case 'ADD_ITEM':{
            return{
                ...state,
                cartItem:[...state.cartItem,action.payload]
            }
        }
        default :
        return state;

    }
}
export default reducer