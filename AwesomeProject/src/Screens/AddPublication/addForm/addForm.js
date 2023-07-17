import { useEffect, useState } from "react";
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

export const AddForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [isKeyboardOpen, setKeyboardOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isNameFocused, setNameFocused] = useState(false);
  const [isLocationFocused, setLocationFocused] = useState(false);

  const handleNameFocus = () => {
    setNameFocused(true);
    setLocationFocused(false);
    setKeyboardOpen(true);
  };

  const handleLocationFocus = () => {
    setNameFocused(false);
    setLocationFocused(true);
    setKeyboardOpen(true);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardOpen(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardOpen(false);
      }
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleLogin = () => {
    if (name === "" || location === "") {
      alert("Пожалуйста, введите адрес электронной почты и пароль.");
      return;
    } else {
      alert(`name: ${name}, location: ${location}`);
      console.log(`name: ${name}, location: ${location}`);
    }

    // отправить запрос авторизации на сервер
  };

  return (
    <View style={styles.container}>
      <View style={styles.publicationPhoto}></View>
      <TouchableOpacity style={styles.editPhoto}>
        <Text style={styles.editPhotoText}>Завантажте фото</Text>
      </TouchableOpacity>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TextInput
          placeholder="Назва..."
          onFocus={handleNameFocus}
          value={name}
          onChangeText={setName}
        />

        <View>
          <TextInput
            placeholder="Місцевість..."
            onFocus={handleLocationFocus}
            value={location}
            onChangeText={setLocation}
          />
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.publishBtn} onPress={handleLogin}>
        <Text style={styles.publishBtnText}>Опубліковати</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  publicationPhoto: {
    width: 343,
    height: 240,
    backgroundColor: "#bdb6b6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  editPhoto: {
    width: 343,
    height: 30,
    justifyContent: "center",
  },
  editPhotoText: {
    color: "#BDBDBD",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
  },
  publishBtn: {
    width: 343,
    height: 51,
    borderRadius: 100,
    marginTop: 30,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },

  publishBtnText: {
    fontSize: 16,
    color: "#BDBDBD",
  },
});
