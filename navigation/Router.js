import AuthTabNavigator from "./navigators/AuthTabNavigatior";
import AppTabNAvigator from "./navigators/AppTabNavigator";
import { useAuthContext } from "../contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { useLoadingContext } from "../contexts/LoadingContext";
import LoadingScreen from "../screens/LoadingScreen"
import { useEffect } from "react"
import Layout from "../Componentes/LayoutComponent";

function Router() {

    const { authData } = useAuthContext()
    const { loading, endLoading } = useLoadingContext()

    useEffect(() => {
        setTimeout(() => {
            endLoading()
        }, 5000);
    })

    return (
        <>
            {
                loading ?

                    <LoadingScreen />

                    :

                    <NavigationContainer>
                        <Layout>
                            {authData ? <AppTabNAvigator /> : <AuthTabNavigator />}
                        </Layout>
                    </NavigationContainer>
            }

        </>

    )
}

export default Router;