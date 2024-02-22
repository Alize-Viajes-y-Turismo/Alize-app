import AuthTabNavigator from "./AuthTabNavigatior";
import AppTabNAvigator from "./AppTabNavigator";
import { useAuthContext } from "../contexts/AuthContext";

function Router() {

    const token = useAuthContext()

    return (
        <>
            {token ? <AppTabNAvigator/> : <AuthTabNavigator/>}
        </>
    )
}

export default Router;