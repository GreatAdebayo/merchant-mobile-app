import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useState } from "react";
import AppLoading from "expo-app-loading";

//Screens
import IndexScreen from "./IndexScreen";
import SignInScreen from "./SignInScreen";
import OverViewScreen from "./OverviewScreen";
import NotificationScreen from "./NotificationScreen";
import OrderScreen from "./OrderScreen";
import OrderDetailsScreen from "./OrderDetailsScreen";
import ProfileScreen from "./ProfileScreen";

//Context
import authContext from "../context/auth/context";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const [appReady, setAppReady] = useState(false);
  const { isAuthenticated, persitLogin } = useContext(authContext);

  if (!appReady) {
    return (
      <AppLoading
        startAsync={persitLogin}
        onFinish={() => {
          setAppReady(true);
        }}
        onError={console.warn}
      />
    );
  }

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name="overview"
            component={OverViewScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="notification"
            component={NotificationScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="orders"
            component={OrderScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="orderdetails"
            component={OrderDetailsScreen}
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen
            name="profile"
            component={ProfileScreen}
            options={{
              headerShown: false,
            }}
          /> */}
        </>
      ) : (
        <>
          <Stack.Screen
            name="index"
            component={IndexScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="signin"
            component={SignInScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="profile"
            component={ProfileScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
