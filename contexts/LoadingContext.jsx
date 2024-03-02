import { useState, createContext, useContext, useEffect } from "react";

const LoadingContext = createContext()

export const useLoadingContext = () => {

    const context = useContext(LoadingContext)

    if (!context) {
        throw new Error("Error de contexto");
    }
    return context;

};

export function LoadingProvider({children}) {

    const [loading, setLoading] = useState(true)

    function startLoading(){
        setLoading(true)
    }

    function endLoading() {
        setLoading(false)
    }




    useEffect(()=>{
        setTimeout(() => {
            endLoading()
        }, 5000);
    }, [])




    return (
        <LoadingContext.Provider value={{ loading, startLoading, endLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}
