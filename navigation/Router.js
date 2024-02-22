import AuthTabNavigator from "./AuthTabNavigatior";
import AppTabNAvigator from "./AppTabNavigator";

function Router() {
    return (
        <>
            {auth ? <AppTabNAvigator/> : <AuthTabNavigator/>}
        </>
    )
}

export default Router;