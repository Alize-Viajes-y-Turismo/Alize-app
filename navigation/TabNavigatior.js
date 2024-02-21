import AuthTab from './AuthTab.js';
import AppTab from './AppTab.js';
import { useAuth } from '../auth/authentication';



function TabNavigator() {

    const { authData } = useAuth()

    return (
        <>
            {authData ? <AppTab /> : <AuthTab />}
        </>

    )
};

export default TabNavigator;

