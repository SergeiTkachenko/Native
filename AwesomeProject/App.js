// import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, View } from "react-native";
// import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
// import { LoginScreen } from "./src/Screens/LoginScreen/LoginScreen";
// import { Home } from "./src/Screens/Home/Home";
// import { AddPublication } from "./src/Screens/AddPublication/AddPublication";
// import { Profile } from "./src/Screens/Profile/Profile";
// import { NavigationContainer } from "@react-navigation/native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <NavigationContainer>
//         {/* <RegistrationScreen /> */}
//         {/* <LoginScreen /> */}
//         {/* <Home /> */}
//         {/* <AddPublication /> */}
//         <Profile></Profile>
//       </NavigationContainer>

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen/LoginScreen";
import { Home } from "./src/Screens/Home/Home";
import { AddPublication } from "./src/Screens/AddPublication/AddPublication";
import { Profile } from "./src/Screens/Profile/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
          name="AddPublication"
          component={AddPublication}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Profile"
          component={Profile}
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
