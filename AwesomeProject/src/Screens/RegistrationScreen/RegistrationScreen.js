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
import { useNavigation } from "@react-navigation/native";

export const RegistrationScreen = () => {
  const imageStyle = StyleSheet.absoluteFillObject;
  const [isKeyboardOpen, setKeyboardOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginFocused, setLoginFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");

  const navigation = useNavigation();

  const emailSchema = /^\S+@\S+\.\S+$/;

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginFocus = () => {
    setLoginFocused(true);
    setEmailFocused(false);
    setPasswordFocused(false);
    setKeyboardOpen(true);
  };

  const handleEmailFocus = () => {
    setLoginFocused(false);
    setEmailFocused(true);
    setPasswordFocused(false);
    setKeyboardOpen(true);
  };

  const handlePasswordFocus = () => {
    setLoginFocused(false);
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

  const handleRegistration = () => {
    if (login === "") {
      alert("Будь ласка, введіть логін.");
      return;
    } else if (!emailSchema.test(email)) {
      alert("Будь ласка, введіть дійсну адресу електронної пошти.");
      return;
    } else if (password.length < 6) {
      alert("Пароль повинен містити щонайменше 6 символів.");
      return;
    } else {
      alert(`login: ${login}, email: ${email}, password: ${password}`);
      console.log(`login: ${login}, email: ${email}, password: ${password}`);
      navigation.navigate("Home");
      // отправить запрос авторизации на сервер
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View accessibilityIgnoresInvertColors={true} style={styles.containerBG}>
        <Image
          source={Background}
          style={[imageStyle, styles.backgroundImage]}
        />
        <View style={[styles.container, isKeyboardOpen && styles.keyboardOpen]}>
          <View style={styles.photo}>
            <TouchableOpacity style={styles.addPhoto}>
              <Text style={styles.addPhotoText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.registrationTitleText}>Реєстрація</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              style={[styles.input, isLoginFocused && styles.inputFocused]}
              placeholder="Логін"
              onFocus={handleLoginFocus}
              value={login}
              onChangeText={setLogin}
            />

            <TextInput
              style={[styles.input, isEmailFocused && styles.inputFocused]}
              placeholder="Адреса електронної пошти"
              onFocus={handleEmailFocus}
              autoCompleteType="email"
              value={email}
              onChangeText={setEmail}
            />

            <View style={styles.passwordInputContainer}>
              <TextInput
                style={[styles.input, isPasswordFocused && styles.inputFocused]}
                secureTextEntry={!showPassword}
                placeholder="Пароль"
                onFocus={handlePasswordFocus}
                autoCompleteType="password"
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
          <TouchableOpacity
            style={styles.registrationBtn}
            onPress={handleRegistration}
          >
            <Text style={styles.registrationBtnText}>Зареєстуватися</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.logInBtn}
              onPress={() => navigation.navigate("Login")}
            >
              Вже є акаунт? Увійти
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
    backgroundColor: "#fff",
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
    marginBottom: 450,
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

// export default RegistrationScreen;
