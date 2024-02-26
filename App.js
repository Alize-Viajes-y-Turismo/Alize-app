import Router from "./navigation/Router";
import { AuthProvider } from "./contexts/AuthContext";
import { LoadingProvider } from "./contexts/LoadingContext";

function App() {

  return (
    
    <LoadingProvider>
      <AuthProvider>
        <Router/>
      </AuthProvider>
    </LoadingProvider>

  )

}

export default App
