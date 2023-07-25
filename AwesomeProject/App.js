import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen/LoginScreen";
import { Home } from "./src/Screens/Home/Home";
import { CreatePostsScreen } from "./src/Screens/CreatePostsScreen/CreatePostsScreen";
import { ProfileScreen } from "./src/Screens/ProfileScreen/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CommentsScreen } from "./src/Screens/CommentsScreen/CommentsScreen";
import { MapScreen } from "./src/Screens/MapScreen/MapScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      {/* <RegistrationScreen /> */}
      {/* <LoginScreen /> */}
      {/* <Home /> */}
      {/* <AddPublication /> */}
      {/* <Profile></Profile> */}
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>

    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
