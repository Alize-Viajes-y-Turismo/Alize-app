import AuthTabNavigator from "./navigators/AuthTabNavigatior";
import AppTabNAvigator from "./navigators/AppTabNavigator";
import { useAuthContext } from "../contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { useLoadingContext } from "../contexts/LoadingContext";
import LoadingScreen from "../screens/LoadingScreen"


function Router() {

    const { loading } = useLoadingContext()
    const { authData } = useAuthContext()

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