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

export const DeleteBtn = () => {
  return (
    <View style={styles.deleteBtnContainer}>
      <TouchableOpacity style={styles.deleteBtn} onPress={() => {}}>
        <Ionicons name="trash-outline" size={24} color="#BDBDBD" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  deleteBtnContainer: {
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },

  deleteBtn: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    // top: "900%",
  },
});
