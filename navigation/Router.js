import AuthTabNavigator from "./navigators/AuthTabNavigatior";
import AppTabNAvigator from "./navigators/AppTabNavigator";
import { useAuthContext } from "../contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";

function Router() {

    const {authData} = useAuthContext()

    return (
        <NavigationContainer>
            {authData ? <AppTabNAvigator /> : <AuthTabNavigator />}
        </NavigationContainer>
    )
}

export default Router;