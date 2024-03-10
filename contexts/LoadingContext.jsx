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
    const [loginLoading, setLoginLoading] = useState(false)


    
    function startLoading(){
        setLoading(true)
    }

    function endLoading() {
        setLoading(false)
    }









    function startLoginLoading(){
        setLoginLoading(true)
    }

    function endLoginLoading() {
        setLoginLoading(false)
    }




    useEffect(()=>{
        setTimeout(() => {
            endLoading()
        }, 5000);
    }, [])




    return (
        <LoadingContext.Provider value={{ loading, startLoading, endLoading, loginLoading, startLoginLoading, endLoginLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}
