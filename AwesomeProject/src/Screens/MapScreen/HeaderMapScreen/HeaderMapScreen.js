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

export const HeaderMapScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Карта</Text>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="arrow-back" size={24} color="#212121" />
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
    borderBottomWidth: 2,
  },
  headerText: {
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: 700,
    lineHeight: 22,
  },

  back: {
    position: "absolute",
    left: "5%",
    top: "70%",
  },
});
