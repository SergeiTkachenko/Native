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

export const Publication = ({ placeName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.publicationPhoto}></View>
      <View style={styles.descriptionGroup}>
        <Text style={styles.publicationName}>{placeName}</Text>
        <View style={styles.rowGroup}>
          <TouchableOpacity style={styles.publicationComments}>
            <Feather name="message-circle" size={24} color="#BDBDBD">
              <Text> 0</Text>
            </Feather>
          </TouchableOpacity>
          <View style={styles.publicationLocation}>
            <SimpleLineIcons name="location-pin" size={20} color="#BDBDBD" />
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
    width: 343,
    height: 240,
    backgroundColor: "#bdb6b6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  descriptionGroup: {
    width: 343,
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
