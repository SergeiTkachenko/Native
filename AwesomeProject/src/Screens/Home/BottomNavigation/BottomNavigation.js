import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
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

export const BottomNavigation = () => {
  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="grid-outline" size={24} color="#212121" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addPublication} onPress={() => {}}>
        <Feather name="plus" size={24} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Feather name="user" size={22} color="#212121" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    height: "10%",
    gap: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "#BDBDBD",
    borderTopWidth: 1,
  },

  addPublication: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});
