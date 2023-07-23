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
import publicationList from "../../db/db.json";
import { HeaderHome } from "./HeaderHome/HeaderHome";
import { Publication } from "./Publication/Publication";
import { CharacterInfo } from "./CharacterInfo/CharacterInfo";
import { BottomNavigation } from "./BottomNavigation/BottomNavigation";

export const Home = () => {
  return (
    <View style={styles.container}>
      <HeaderHome />
      <View style={styles.content}>
        <CharacterInfo />
        <ScrollView>
          {publicationList.map(({ id, placeName, location }) => {
            return (
              <Publication key={id} placeName={placeName} location={location} />
            );
          })}
        </ScrollView>
        <BottomNavigation></BottomNavigation>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    width: "100%",
    height: "90%",
  },
});
