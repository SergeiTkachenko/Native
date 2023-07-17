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
import Background from "../../images/Photo_BG.jpg";

export const LoginScreen = () => {
  const imageStyle = StyleSheet.absoluteFillObject;
  const [isKeyboardOpen, setKeyboardOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleEmailFocus = () => {
    setEmailFocused(true);
    setPasswordFocused(false);
    setKeyboardOpen(true);
  };

  const handlePasswordFocus = () => {
    setEmailFocused(false);
    setPasswordFocused(true);
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
    if (email === "" || password === "") {
      alert("Пожалуйста, введите адрес электронной почты и пароль.");
      return;
    } else {
      alert(`email: ${email}, password: ${password}`);
      console.log(`email: ${email}, password: ${password}`);
    }

    // отправить запрос авторизации на сервер
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View accessibilityIgnoresInvertColors={true} style={styles.containerBG}>
        <Image
          source={Background}
          style={[imageStyle, styles.backgroundImage]}
        />
        <View style={[styles.container, isKeyboardOpen && styles.keyboardOpen]}>
          <Text style={styles.logInTitleText}>Увійти</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              style={[styles.input, isEmailFocused && styles.inputFocused]}
              placeholder="Адреса електронної пошти"
              onFocus={handleEmailFocus}
              autoComplete="email"
              value={email}
              onChangeText={setEmail}
            />

            <View style={styles.passwordInputContainer}>
              <TextInput
                style={[styles.input, isPasswordFocused && styles.inputFocused]}
                secureTextEntry={!showPassword}
                placeholder="Пароль"
                onFocus={handlePasswordFocus}
                autoComplete="password"
                value={password}
                onChangeText={setPassword}
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
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.logInBtn} onPress={handleLogin}>
            <Text style={styles.logInBtnText}>Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.registrationBtnBtn}>
              Немає акаунту? Зареєструватися
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
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

  keyboardOpen: {
    width: 410,
    height: 549,
    marginTop: 355,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 200,
  },

  logInTitleText: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35,
    letterSpacing: 0.01,
    marginTop: 36,
    marginBottom: 30,
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

  passwordToggleBtnText: {
    fontSize: 16,
    color: "#1B4371",
    position: "absolute",
    marginTop: -48,
    marginLeft: 285,
  },

  logInBtn: {
    width: 343,
    height: 51,
    borderRadius: 100,
    marginTop: 30,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },

  logInBtnText: {
    fontSize: 16,
    color: "#FFFFFF",
  },

  registrationBtnBtn: {
    fontSize: 16,
    color: "#1B4371",
    marginTop: 14,
  },
});

// export default LoginScreen;
