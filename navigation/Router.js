import AuthTabNavigator from "./navigators/AuthTabNavigatior";
import AppTabNAvigator from "./navigators/AppTabNavigator";
import { useAuthContext } from "../contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { useLoadingContext } from "../contexts/LoadingContext";
import LoadingScreen from "../screens/LoadingScreen"
import { useEffect } from "react"

function Router() {

    const {authData} = useAuthContext()
    const {loading, endLoading} = useLoadingContext()

    useEffect(()=>{
        setTimeout(() => {
            endLoading()
        }, 5000);
    })

    return (
        <>
            {
                loading ? <LoadingScreen/> :

                <NavigationContainer>
                    {authData ? <AppTabNAvigator /> : <AuthTabNavigator />}
                </NavigationContainer>
                
            }

        </>
        
    )
}

export default Router;