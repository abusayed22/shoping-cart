import { INCREASE_QUANTITY,DECREASE_QUANTITY,GET_ITEM_QUANTITY,REMOVE_TO_CART } from "./actionsType";



type ICatalog = {
    isLoading: boolean;
    isLoaded: boolean;
    items: [];
    error: null
};
interface Iaction {
    type?: 'INCREASE_QUANTITY' | 'DECREASE_QUANTITY' |'GET_ITEM_QUANTITY' | 'REMOVE_TO_CART',
    payload: ICatalog
}

const initState: ICatalog = {
    isLoading: false,
    isLoaded: false,
    items: [],
    error: null
  };

const reducer = (state = initState, action:Iaction) => {
    switch (action.type) {
        case :
            return {
                ...state
            }

    
        default:
            return state;
    }
}
export default reducer;