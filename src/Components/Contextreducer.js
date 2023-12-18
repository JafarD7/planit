import React, { createContext, useContext, useReducer, useEffect } from "react";

const Cartstatecontext = createContext();
const Cartdispatchcontext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            // Check if the item is already in the cart
            const existingItemIndex = state.findIndex(item => item.id === action.id);

            // If the item is not in the cart and the cart has less than 3 items, add it
            if (existingItemIndex === -1 && state.length < 3) {
                return [...state, { id: action.id, img: action.img, name: action.name, price: action.price, date: action.date, area: action.area, themes: action.themes, guests: action.guests, adinfo: action.adinfo }];
            }
            return state;
        case "REMOVE":
            let newARR = [...state];
            newARR.splice(action.index, 1);
            return (newARR);
        case "DROP":
            let emparray = []
            return emparray
        default:
            return state;
    }
}

export const Cartprovider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [], () => {

        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state));
    }, [state]);

    return (
        <Cartdispatchcontext.Provider value={dispatch}>
            <Cartstatecontext.Provider value={state}>
                {children}
            </Cartstatecontext.Provider>
        </Cartdispatchcontext.Provider>
    );
}

export const useCart = () => useContext(Cartstatecontext);
export const useDispatchcart = () => useContext(Cartdispatchcontext);
