import { ADD_TO_CART, REMOVE_TO_CART } from './actionsType';
import { initialState } from './initialState';



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                {
                    // ...
                }
            ];

        case REMOVE_TO_CART:
            return 
    
        default:
            return state;
    }
}
export default reducer;