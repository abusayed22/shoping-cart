import { DECREASE_QUANTITY, GET_ITEM_QUANTITY, INCREASE_QUANTITY, REMOVE_TO_CART } from "./actionsType"

// type here 
type all_type = {
    get_item_quantity: (id:number) => number
    increase_quantity: (id:number) => void
    decrease_quantity: (id:number) => void
    remove_to_cart: (id: number) => void
}


export const get_item_quantity = (id: number) => {
    return {
        type: GET_ITEM_QUANTITY,
        payload: id
    }
}

export const remove_to_cart = (id: number) => {
    return {
        type: REMOVE_TO_CART,
        payload: id
    }
}
export const increase_quantity = (id: number) => {
    return {
        type: INCREASE_QUANTITY,
        payload: id
    }
}

export const decrease_quantity = ( id:number) => {
    return {
        type: DECREASE_QUANTITY,
        payload:id
    }
}