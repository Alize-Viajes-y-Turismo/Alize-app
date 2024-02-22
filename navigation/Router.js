import AuthTabNavigator from "./navigators/AuthTabNavigatior";
import AppTabNAvigator from "./navigators/AppTabNavigator";
import { useAuthContext } from "../contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";

function Router() {

    const {isAuthenticated} = useAuthContext()

    return (
        <NavigationContainer>
            {isAuthenticated ? <AppTabNAvigator /> : <AuthTabNavigator />}
        </NavigationContainer>
    )
}

export default Router;