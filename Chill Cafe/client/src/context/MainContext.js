import { createContext, useState } from "react";

export const MainContext = createContext()

export const MainProvider = ({ children }) => {
    const [selectedFood, setSelectedFood] = useState()
    const [selectedDrink, setSelectedDrink] = useState()
    
    return (
        <MainContext.Provider value={{selectedFood, setSelectedFood, selectedDrink, setSelectedDrink}}>
            { children }
        </MainContext.Provider>
    )
}