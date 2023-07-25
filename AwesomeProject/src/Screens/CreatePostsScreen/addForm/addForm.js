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
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

export const AddForm = () => {
  const [name, setName] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [isNameFocused, setNameFocused] = useState(false);
  const [isLocationFocused, setLocationFocused] = useState(false);
  const [image, setImage] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [location, setLocation] = useState(null);
  const [markerCoords, setMarkerCoords] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  const handleLocationSelection = (e) => {
    const selectedCoords = e.nativeEvent.coordinate;
    setMarkerCoords(selectedCoords);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === false) {
    return alert("Доступ до камери заборонений.");
  }

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setPhotoUri(uri);

      const currentLocation = await Location.getCurrentPositionAsync({});
      setMarkerCoords({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    }
  };

  const removePhoto = () => {
    setPhotoUri(null);
  };

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
    if (name === "") {
      alert("Будь ласка, заповніть поле назви.");
      return;
    } else {
      alert(
        `
        name: ${name},
        location: ${locationInput},
        latitude: ${markerCoords.latitude.toFixed(6)},
        longitude: ${markerCoords.longitude.toFixed(6)}`
      );
      console.log(
        `
        name: ${name},
        location: ${locationInput},
        latitude: ${markerCoords.latitude.toFixed(6)},
        longitude: ${markerCoords.longitude.toFixed(6)}`
      );
      navigation.navigate("Home");
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
        {!photoUri && (
          <Camera style={styles.camera} ref={setCameraRef}>
            <TouchableOpacity style={styles.addPhotoBtn} onPress={takePhoto}>
              <Fontisto name="camera" size={24} color="#bdb6b6" />
            </TouchableOpacity>
            {photoUri && (
              <Image
                style={styles.backgroundImage}
                source={{ uri: photoUri }}
              />
            )}
          </Camera>
        )}

        {photoUri && (
          <View style={styles.camera}>
            <TouchableOpacity style={styles.addPhotoBtn} onPress={removePhoto}>
              <Fontisto name="camera" size={24} color="#bdb6b6" />
            </TouchableOpacity>
            {photoUri && (
              <Image
                style={styles.backgroundImage}
                source={{ uri: photoUri }}
              />
            )}
          </View>
        )}

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
              value={locationInput}
              onChangeText={setLocationInput}
            />
          </View>
        </KeyboardAvoidingView>
        <MapView
          style={styles.mapStyle}
          region={{
            ...location,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          onPress={handleLocationSelection}
        >
          {markerCoords && (
            <Marker
              coordinate={markerCoords}
              draggable={true}
              onDragEnd={(e) => setMarkerCoords(e.nativeEvent.coordinate)}
              title="I am here"
              description="Hello"
            />
          )}
        </MapView>
        {!photoUri ||
          (!name && (
            <TouchableOpacity
              style={styles.publishBtn}
              onPress={handlePublication}
              disabled={true}
            >
              <Text style={styles.publishBtnText}>Опубліковати</Text>
            </TouchableOpacity>
          ))}
        {photoUri && name && (
          <TouchableOpacity
            style={styles.publishBtnActive}
            onPress={handlePublication}
          >
            <Text style={styles.publishBtnTextActive}>Опубліковати</Text>
          </TouchableOpacity>
        )}
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
  camera: {
    width: 343,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
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
  publishBtnActive: {
    width: 343,
    height: 51,
    borderRadius: 100,
    marginTop: 30,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
  publishBtnTextActive: {
    fontSize: 16,
    color: "#ffffff",
  },

  mapStyle: {
    width: 330,
    height: 200,
  },
});

// import React, { useEffect, useState } from "react";
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
// import { Camera } from "expo-camera";
// import * as MediaLibrary from "expo-media-library";
// import MapView, { Marker } from "react-native-maps";
// import * as Location from "expo-location";
// import Geocoder from "react-native-geocoding";

// export const AddForm = () => {
//   const [name, setName] = useState("");
//   const [locationInput, setLocationInput] = useState("");
//   const [isNameFocused, setNameFocused] = useState(false);
//   const [isLocationFocused, setLocationFocused] = useState(false);
//   const [image, setImage] = useState(null);
//   const [photoUri, setPhotoUri] = useState(null);
//   const [cameraRef, setCameraRef] = useState(null);
//   const [hasPermission, setHasPermission] = useState(null);
//   const [location, setLocation] = useState(null);
//   const [markerCoords, setMarkerCoords] = useState(null);

//   useEffect(() => {
//     Geocoder.init("AIzaSyAiUITCLNduBudepLGn4KKM22r9MIc0wZM");
//   }, []);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestPermissionsAsync();
//       if (status !== "granted") {
//         console.log("Permission to access location was denied");
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       const coords = {
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       };
//       setLocation(coords);
//     })();
//   }, []);

//   const handleLocationSelection = async (event) => {
//     const { coordinate } = event.nativeEvent;

//     try {
//       const response = await Geocoder.from(
//         coordinate.latitude,
//         coordinate.longitude
//       );
//       const address = response.results[0].formatted_address;
//       setLocation(address);
//       setMarkerCoords(coordinate);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       await MediaLibrary.requestPermissionsAsync();

//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   if (hasPermission === false) {
//     return alert("Доступ до камери заборонений.");
//   }

//   const takePhoto = async () => {
//     if (cameraRef) {
//       const { uri } = await cameraRef.takePictureAsync();
//       await MediaLibrary.createAssetAsync(uri);
//       setPhotoUri(uri);
//     }
//   };

//   const removePhoto = () => {
//     setPhotoUri(null);
//   };

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     // console.log(result);

//     if (!result.canceled) {
//       setImage(result.assets[0]);
//       setPhotoUri(result.assets[0].uri);
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
//     if (name === "" || locationInput === "") {
//       alert("Пожалуйста, заполните пустые поля.");
//       return;
//     } else {
//       alert(
//         `
//         name: ${name},
//         location: ${locationInput},
//         latitude: ${markerCoords.latitude.toFixed(6)},
//         longitude: ${markerCoords.longitude.toFixed(6)}`
//       );
//       console.log(
//         `
//         name: ${name},
//         location: ${locationInput},
//         latitude: ${markerCoords.latitude.toFixed(6)},
//         longitude: ${markerCoords.longitude.toFixed(6)}`
//       );
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
//         {!photoUri && (
//           <Camera style={styles.camera} ref={setCameraRef}>
//             <TouchableOpacity style={styles.addPhotoBtn} onPress={takePhoto}>
//               <Fontisto name="camera" size={24} color="#bdb6b6" />
//             </TouchableOpacity>
//             {photoUri && (
//               <Image
//                 style={styles.backgroundImage}
//                 source={{ uri: photoUri }}
//               />
//             )}
//           </Camera>
//         )}

//         {photoUri && (
//           <View style={styles.camera}>
//             <TouchableOpacity style={styles.addPhotoBtn} onPress={removePhoto}>
//               <Fontisto name="camera" size={24} color="#bdb6b6" />
//             </TouchableOpacity>
//             {photoUri && (
//               <Image
//                 style={styles.backgroundImage}
//                 source={{ uri: photoUri }}
//               />
//             )}
//           </View>
//         )}

//         <TouchableOpacity style={styles.editPhoto} onPress={pickImage}>
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
//               value={locationInput}
//               onChangeText={setLocationInput}
//             />
//           </View>
//         </KeyboardAvoidingView>
//         <MapView
//           style={styles.mapStyle}
//           region={{
//             ...location,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           showsUserLocation={true}
//           onPress={handleLocationSelection} // Добавляем обработчик события для выбора локации на карте
//         >
//           {markerCoords && (
//             <Marker
//               coordinate={markerCoords}
//               draggable={true}
//               onDragEnd={(e) => setMarkerCoords(e.nativeEvent.coordinate)}
//               title="I am here"
//               description="Hello"
//             />
//           )}
//         </MapView>
//         {markerCoords && (
//           <View style={styles.addressContainer}>
//             <Text style={styles.addressText}>{location}</Text>
//           </View>
//         )}
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
//   camera: {
//     width: 343,
//     height: 240,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 8,
//   },
//   addPhotoBtn: {
//     width: 60,
//     height: 60,
//     backgroundColor: "#fff",
//     borderRadius: 30,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//     zIndex: 1,
//   },
//   backgroundImage: {
//     width: "100%",
//     height: "100%",
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
//   mapStyle: {
//     width: 330,
//     height: 200,
//   },
// });
