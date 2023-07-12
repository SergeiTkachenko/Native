import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import Background from "../../images/Photo_BG.jpg";

const RegistrationScreen = () => {
  const imageStyle = StyleSheet.absoluteFillObject;
  const imageRef = React.useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginFocused, setLoginFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginFocus = () => {
    setLoginFocused(true);
    setEmailFocused(false);
    setPasswordFocused(false);
  };

  const handleEmailFocus = () => {
    setLoginFocused(false);
    setEmailFocused(true);
    setPasswordFocused(false);
  };

  const handlePasswordFocus = () => {
    setLoginFocused(false);
    setEmailFocused(false);
    setPasswordFocused(true);
  };

  return (
    <View
      accessibilityIgnoresInvertColors={true}
      style={styles.containerBG}
      ref={imageRef}
    >
      <Image
        source={Background}
        style={[imageStyle, styles.backgroundImage]}
        ref={imageRef}
      />
      <View style={styles.container}>
        <View style={styles.photo}>
          <TouchableOpacity style={styles.addPhoto}>
            <Text style={styles.addPhotoText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.registrationTitleText}>Реєстрація</Text>
        <TextInput
          style={[styles.input, isLoginFocused && styles.inputFocused]}
          placeholder="Логін"
          onFocus={handleLoginFocus}
        />
        <TextInput
          style={[styles.input, isEmailFocused && styles.inputFocused]}
          placeholder="Адреса електронної пошти"
          onFocus={handleEmailFocus}
        />
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={[styles.input, isPasswordFocused && styles.inputFocused]}
            secureTextEntry={!showPassword}
            placeholder="Пароль"
            onFocus={handlePasswordFocus}
          />
          <TouchableOpacity
            style={styles.passwordToggleBtn}
            onPress={toggleShowPassword}
          >
            <Text style={styles.passwordToggleBtnText}>
              {showPassword ? "Сховати" : "Показати"}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.registrationBtn}>
          <Text style={styles.registrationBtnText}>Зареєстуватися</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.logInBtn}>Вже є акаунт? Увійти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBG: {
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: 410,
    height: 910,
  },
  container: {
    width: 410,
    height: 549,
    marginTop: 355,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderRadius: 25,
  },
  registrationTitleText: {
    fontSize: 30,
    fontWeight: "500",
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
  input: {
    width: 370,
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#F6F6F6",
    fontSize: 16,
  },
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
  passwordToggleBtn: {},
  passwordToggleBtnText: {
    fontSize: 16,
    color: "#1B4371",
    position: "absolute",
    marginTop: -48,
    marginLeft: 285,
  },
  registrationBtn: {
    width: 343,
    height: 51,
    borderRadius: 100,
    marginTop: 30,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
  registrationBtnText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  logInBtn: {
    fontSize: 16,
    color: "#1B4371",
    marginTop: 14,
  },
});

export default RegistrationScreen;
