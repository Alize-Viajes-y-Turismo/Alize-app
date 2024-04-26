import AuthTabNavigator from "./navigators/AuthTabNavigator";
import NotAuthTabNavigator from "./navigators/NotAuthTabNavigatior"; 
import { useAuthContext } from "../contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { useLoadingContext } from "../contexts/LoadingContext";
import LoadingScreen from "../screens/LoadingScreen";
import Layout from "../components/LayoutComponent";

function Router() {
    const { navigateVerify } = useAuthContext();
    const { loading } = useLoadingContext();

    return (
        <>
            {loading ? (
                <LoadingScreen />
            ) : (
                <NavigationContainer>
                    <Layout>
                        {navigateVerify ? <AuthTabNavigator /> : <NotAuthTabNavigator />}
                    </Layout>
                </NavigationContainer>
            )}
        </>
    );
}

export default Router;