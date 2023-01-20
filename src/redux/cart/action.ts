import { ADD_TO_CART, REMOVE_TO_CART } from './actionsType';



export const add_to_cart = (obj) => {
    return {
        type: ADD_TO_CART,
        payload: obj
    }
}

export const remove_to_cart = (id) => {
    return {
        type: REMOVE_TO_CART,
        payload: id
    }
}