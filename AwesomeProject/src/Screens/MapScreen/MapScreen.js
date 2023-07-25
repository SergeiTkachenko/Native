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
import { HeaderMapScreen } from "./HeaderMapScreen/HeaderMapScreen";
import MapView, { Marker } from "react-native-maps";

export const MapScreen = ({ markerCoords }) => {
  return (
    <View style={styles.container}>
      <HeaderMapScreen />
      <View style={styles.content}>
        <MapView style={styles.mapStyle}>
          {markerCoords && (
            <Marker
              coordinate={markerCoords}
              draggable={true}
              onDragEnd={(e) => setMarkerCoords(e.nativeEvent.coordinate)}
              title="I was here"
              description="Hello"
            />
          )}
        </MapView>
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
  mapStyle: {
    width: "100%",
    height: "100%",
  },
});
