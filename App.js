import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./screens/StackNavigation";

//State
import AuthState from "./context/auth/state";
import AlertState from "./context/alert/state";

const App = () => {
  return (
    <NavigationContainer>
      <AlertState>
        <AuthState>
          <StackNavigation />
        </AuthState>
      </AlertState>
    </NavigationContainer>
  );
};

export default App;
