// import { useEffect, useState } from "react";
// import {
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   TextInput,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from "react-native";
// import { Fontisto } from "@expo/vector-icons";
// import * as ImagePicker from "expo-image-picker";

// export const AddForm = () => {
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [isNameFocused, setNameFocused] = useState(false);
//   const [isLocationFocused, setLocationFocused] = useState(false);
//   const [image, setImage] = useState(null);

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   const handleNameFocus = () => {
//     setNameFocused(true);
//     setLocationFocused(false);
//   };

//   const handleLocationFocus = () => {
//     setNameFocused(false);
//     setLocationFocused(true);
//   };

//   const handlePublication = () => {
//     if (name === "" || location === "") {
//       alert("Пожалуйста, заполните пустые поля.");
//       return;
//     } else {
//       alert(`name: ${name}, location: ${location}`);
//       console.log(`name: ${name}, location: ${location}`);
//     }

//     // отправить запрос авторизации на сервер
//   };

//   const handleOutsidePress = () => {
//     Keyboard.dismiss();
//     setNameFocused(false);
//     setLocationFocused(false);
//   };

//   return (
//     <TouchableWithoutFeedback onPress={handleOutsidePress}>
//       <View style={styles.container}>
//         <View style={styles.publicationPhoto}>
//           <TouchableOpacity style={styles.eddPhotoBtn} onPress={pickImage}>
//             <Fontisto name="camera" size={24} color="#bdb6b6" />
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity style={styles.editPhoto}>
//           <Text style={styles.editPhotoText}>Завантажте фото</Text>
//         </TouchableOpacity>
//         <KeyboardAvoidingView
//           behavior={Platform.OS == "ios" ? "padding" : "height"}
//         >
//           <TextInput
//             style={[styles.input, isNameFocused && styles.inputFocused]}
//             placeholder="Назва..."
//             placeholderTextColor="#b3b2b2"
//             onFocus={handleNameFocus}
//             value={name}
//             onChangeText={setName}
//           />

//           <View>
//             <TextInput
//               style={[styles.input, isLocationFocused && styles.inputFocused]}
//               placeholder="Місцевість..."
//               placeholderTextColor="#b3b2b2"
//               onFocus={handleLocationFocus}
//               value={location}
//               onChangeText={setLocation}
//             />
//           </View>
//         </KeyboardAvoidingView>
//         <TouchableOpacity style={styles.publishBtn} onPress={handlePublication}>
//           <Text style={styles.publishBtnText}>Опубліковати</Text>
//         </TouchableOpacity>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: 30,
//   },
//   publicationPhoto: {
//     width: 343,
//     height: 240,
//     backgroundColor: "#2b2a2a",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 8,
//   },
//   editPhoto: {
//     width: 343,
//     height: 30,
//     justifyContent: "center",
//   },
//   editPhotoText: {
//     color: "#BDBDBD",
//     fontFamily: "Roboto",
//     fontSize: 16,
//     fontWeight: 400,
//   },
//   input: {
//     width: 358,
//     height: 50,
//     borderBottomWidth: 1,
//     borderColor: "#E8E8E8",
//     borderStyle: "solid",
//     marginBottom: 12,
//     padding: 10,
//     backgroundColor: "#ffffff",
//     fontSize: 16,
//   },

//   inputFocused: {
//     borderColor: "#FF6C00",
//     backgroundColor: "#FFFFFF",
//   },
//   publishBtn: {
//     width: 343,
//     height: 51,
//     borderRadius: 100,
//     marginTop: 30,
//     backgroundColor: "#F6F6F6",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   publishBtnText: {
//     fontSize: 16,
//     color: "#BDBDBD",
//   },
// });

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
import { Fontisto } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export const AddForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [isNameFocused, setNameFocused] = useState(false);
  const [isLocationFocused, setLocationFocused] = useState(false);
  const [image, setImage] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0]);
      setPhotoUri(result.assets[0].uri);
    }
  };

  const handleNameFocus = () => {
    setNameFocused(true);
    setLocationFocused(false);
  };

  const handleLocationFocus = () => {
    setNameFocused(false);
    setLocationFocused(true);
  };

  const handlePublication = () => {
    if (name === "" || location === "") {
      alert("Пожалуйста, заполните пустые поля.");
      return;
    } else {
      alert(`name: ${name}, location: ${location}`);
      console.log(`name: ${name}, location: ${location}`);
    }

    // отправить запрос авторизации на сервер
  };

  const handleOutsidePress = () => {
    Keyboard.dismiss();
    setNameFocused(false);
    setLocationFocused(false);
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={styles.container}>
        <View style={styles.publicationPhoto}>
          <TouchableOpacity style={styles.addPhotoBtn} onPress={pickImage}>
            <Fontisto name="camera" size={24} color="#bdb6b6" />
          </TouchableOpacity>
          {photoUri && (
            <Image style={styles.backgroundImage} source={{ uri: photoUri }} />
          )}
        </View>
        <TouchableOpacity style={styles.editPhoto} onPress={pickImage}>
          <Text style={styles.editPhotoText}>Завантажте фото</Text>
        </TouchableOpacity>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            style={[styles.input, isNameFocused && styles.inputFocused]}
            placeholder="Назва..."
            placeholderTextColor="#b3b2b2"
            onFocus={handleNameFocus}
            value={name}
            onChangeText={setName}
          />

          <View>
            <TextInput
              style={[styles.input, isLocationFocused && styles.inputFocused]}
              placeholder="Місцевість..."
              placeholderTextColor="#b3b2b2"
              onFocus={handleLocationFocus}
              value={location}
              onChangeText={setLocation}
            />
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.publishBtn} onPress={handlePublication}>
          <Text style={styles.publishBtnText}>Опубліковати</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
  },
  addPhotoBtn: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
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
  input: {
    width: 358,
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#ffffff",
    fontSize: 16,
  },
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
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
