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
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const AddCommentInput = () => {
  //   const [isKeyboardOpen, setKeyboardOpen] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  //   useEffect(() => {
  //     const keyboardDidShowListener = Keyboard.addListener(
  //       "keyboardDidShow",
  //       () => {
  //         setKeyboardOpen(true);
  //       }
  //     );
  //     const keyboardDidHideListener = Keyboard.addListener(
  //       "keyboardDidHide",
  //       () => {
  //         setKeyboardOpen(false);
  //       }
  //     );

  //     return () => {
  //       keyboardDidShowListener.remove();
  //       keyboardDidHideListener.remove();
  //     };
  //   }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container]}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, isInputFocused && styles.inputFocused]}
              placeholder="Коментувати..."
              onFocus={handleInputFocus}
            />

            <TouchableOpacity style={styles.postBtn}>
              <AntDesign name="arrowup" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  keyboardOpen: {},
  inputContainer: {
    position: "relative",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 25,
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#f6f6f6",
    fontSize: 16,
  },
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
  postBtn: {
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    position: "absolute",
    top: 8,
    right: 10,
  },
});
