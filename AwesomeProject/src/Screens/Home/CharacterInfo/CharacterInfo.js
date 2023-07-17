import React, { useEffect, useState } from "react";
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

export const CharacterInfo = () => {
  return (
    <View style={styles.characterContainer}>
      <View style={styles.characterPhoto}></View>
      <View style={styles.characterTextContainer}>
        <Text style={styles.characterName}>Name Name</Text>
        <Text style={styles.characterEmail}>email@gmail.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  characterContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 20,
  },

  characterPhoto: {
    width: 60,
    height: 60,
    backgroundColor: "#ddd8d8",
    borderRadius: 13,
  },

  characterTextContainer: {
    marginLeft: 15,
    justifyContent: "center",
  },

  characterName: {
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: 700,
    lineHeight: 15,
  },
  characterEmail: {
    fontFamily: "Roboto",
    fontSize: 11,
    fontWeight: 400,
    lineHeight: 15,
  },
});
