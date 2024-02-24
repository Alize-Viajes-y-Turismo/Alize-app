import { useState, createContext, useContext } from "react";

const LoadingContext = createContext()

export function LoadingContextProvider({children}) {

    const [loading, setLoading] = useState(true)

    function startLoading(){
        setLoading(true)
    }

    function endLoading() {
        setLoading(false)
    }

    return (
        <LoadingContext.Provider value={{ loading, startLoading, endLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}

export function useLoadingContext() {
    return useContext(LoadingContext)
}