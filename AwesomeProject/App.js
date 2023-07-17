import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen/LoginScreen";
import { Home } from "./src/Screens/Home/Home";
import { AddPublication } from "./src/Screens/AddPublication/AddPublication";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <RegistrationScreen />
      <LoginScreen /> */}
      {/* <Home /> */}
      <AddPublication />

      <StatusBar style="auto" />
    </View>
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
