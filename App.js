import Router from "./navigation/Router"
import { AuthProvider } from "./contexts/AuthContext"
import {LoadingContextProvider} from "./contexts/LoadingContext"

function App() {

  return (
    <LoadingContextProvider>

        <AuthProvider>
          <Router />
        </AuthProvider>
      
    </LoadingContextProvider>
  )

}

export default App
