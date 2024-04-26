import React, { useState, createContext, useContext, useEffect } from "react";

// Creamos el contexto de carga
const LoadingContext = createContext();

// Hook personalizado para acceder al contexto de carga
export const useLoadingContext = () => {
    const context = useContext(LoadingContext);

    if (!context) {
        throw new Error("useLoadingContext debe ser usado dentro de un LoadingProvider");
    }
    return context;
};

// Proveedor de carga para envolver los componentes con el contexto de carga
export function LoadingProvider({ children }) {
    // Estado para la carga general
    const [loading, setLoading] = useState(true);
    // Estado para la carga de inicio de sesión
    const [loginLoading, setLoginLoading] = useState(false);

    // Función para iniciar la carga
    const startLoading = () => setLoading(true);
    // Función para finalizar la carga
    const endLoading = () => setLoading(false);
    // Función para iniciar la carga de inicio de sesión
    const startLoginLoading = () => setLoginLoading(true);
    // Función para finalizar la carga de inicio de sesión
    const endLoginLoading = () => setLoginLoading(false);

    // Simulación de carga durante 5 segundos al cargar el componente
    useEffect(() => {
        const timeout = setTimeout(endLoading, 5000);
        return () => clearTimeout(timeout);
    }, []);

    // Proveedor de contexto de carga
    return (
        <LoadingContext.Provider value={{ loading, startLoading, endLoading, loginLoading, startLoginLoading, endLoginLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}