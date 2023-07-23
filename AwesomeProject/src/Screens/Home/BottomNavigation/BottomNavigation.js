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
import { useNavigation } from "@react-navigation/native";

export const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Ionicons name="grid-outline" size={24} color="#212121" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addPublication}
        onPress={() => navigation.navigate("CreatePostsScreen")}
      >
        <Feather name="plus" size={24} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
        <Feather name="user" size={22} color="#212121" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    height: 100,
    width: "100%",
    gap: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "#BDBDBD",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    position: "absolute",
    bottom: 0,
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
