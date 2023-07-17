import { Feather } from "@expo/vector-icons";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";

export const HeaderHome = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Публікації</Text>
      <TouchableOpacity style={styles.logOut} onPress={() => {}}>
        <Feather name="log-out" size={24} color="#BDBDBD" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
  },
  headerText: {
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: 700,
    lineHeight: 22,
  },

  logOut: {
    position: "absolute",
    right: "5%",
    top: "70%",
  },
});
