import { Provider } from 'react-redux';
import React, { ReactNode, createContext, useContext,useState } from "react";

type cartProps = {
    children: ReactNode
}

type shopingCartContext = {
    openCart: () => void;
    clossCart: () => void;
    getItemQuntity: (id: number) => number;
    removeCart: (id: number) => void;
    increaseQuntity: (id: number) => void;
    decreaseQuntity: (id: number) => void;
    cartQuntity: number;
}

// state type
type cartItems = {
    id:number;
    quantity: number
};

const shopingCartContext = createContext({} as shopingCartContext);

export const useCartContext = () => {
    return useContext(shopingCartContext)
};

export const useCartProvider = ({ children }: cartProps) => {
    const [cartItems, setCartItems] = useState<cartItems[]>()
    
    const getItemQuntity = (id:number) => {
        return cartItems?.find(item => item.id === id )?.quantity || 0
    }

    const increaseQuntity = (id: number) => {
        
        setCartItems(currentItem => {
            if(currentItem?.find(item => item.id ===id ) ==null) {
                return [...currentItem, {id, quantity:1}]
            }
        })
    }

    return (

        <shopingCartContext.Provider value={{}} > 
            { children } 
        < /shopingCartContext.Provider>
    )
}