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
import { HeaderAddPublication } from "./HederAddPublication/HederAddPublication";
import { DeleteBtn } from "./deleteBtn/DeleteBtn";
import { AddForm } from "./addForm/addForm";

export const AddPublication = () => {
  return (
    <View style={styles.container}>
      <HeaderAddPublication />
      <View style={styles.content}>
        <ScrollView>
          <AddForm></AddForm>
        </ScrollView>
        <DeleteBtn></DeleteBtn>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
