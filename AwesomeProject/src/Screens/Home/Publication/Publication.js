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
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const Publication = ({ placeName, location }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.publicationPhoto}></View>
      <View style={styles.descriptionGroup}>
        <Text style={styles.publicationName}>{placeName}</Text>
        <View style={styles.rowGroup}>
          <TouchableOpacity
            style={styles.publicationComments}
            onPress={() => navigation.navigate("CommentsScreen")}
          >
            <Feather name="message-circle" size={24} color="#BDBDBD">
              <Text> 0</Text>
            </Feather>
          </TouchableOpacity>
          <View style={styles.publicationLocation}>
            <TouchableOpacity onPress={() => navigation.navigate("MapScreen")}>
              <SimpleLineIcons name="location-pin" size={20} color="#BDBDBD" />
            </TouchableOpacity>

            <Text>{location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  publicationPhoto: {
    width: "90%",
    aspectRatio: 4 / 3,
    backgroundColor: "#bdb6b6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  descriptionGroup: {
    width: "90%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  rowGroup: {
    flexDirection: "row",
    marginTop: 10,
    width: 343,
    justifyContent: "space-between",
  },
  publicationName: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 500,
    justifyContent: "flex-start",
  },
  publicationLocation: {
    flexDirection: "row",
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 500,
    justifyContent: "flex-start",
    // borderBottomColor: "black",
    // borderBottomWidth: 2,
  },
});
