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
import Background from "../../images/Photo_BG.jpg";
import { BottomNavigation } from "./BottomNavigation/BottomNavigation";
import publicationList from "../../db/db.json";
import { Publication } from "../Home/Publication/Publication";

export const ProfileScreen = () => {
  return (
    <View accessibilityIgnoresInvertColors={true} style={styles.containerBG}>
      <Image source={Background} style={styles.backgroundImage} />
      <View style={[styles.container]}>
        <View style={styles.photo}>
          <TouchableOpacity style={styles.addPhoto}>
            <Text style={styles.addPhotoText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>Profile Name</Text>
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
  containerBG: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "90%",
    marginTop: 250,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderRadius: 25,
  },
  profileName: {
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    letterSpacing: 0.01,
    marginTop: 36,
    marginBottom: 30,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    marginTop: -60,
  },
  addPhoto: {
    marginTop: 80,
    marginLeft: 107,
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
    borderWidth: 2,
  },
  addPhotoText: {
    fontSize: 22,
    color: "#FF6C00",
    marginTop: "-25%",
  },
});
