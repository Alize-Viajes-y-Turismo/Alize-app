import { AuthProvider } from "./auth/AuthContext"
import StackNavigator from "./navigation/StackNavigator"

function App() {
  return (
    <AuthProvider>
      <StackNavigator/>
    </AuthProvider>
  )
};



export default App