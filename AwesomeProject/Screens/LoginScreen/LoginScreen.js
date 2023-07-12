import { Image, View } from "react-native";
import Background from "../../images/Photo_BG.jpg";

export const LoginScreen = () => {
  return (
    <View
      accessibilityIgnoresInvertColors={true}
      importantForAccessibility={importantForAccessibility}
      style={style}
      ref={this._captureRef}
    >
      <Image
        source={Background}
        {...props}
        importantForAccessibility={importantForAccessibility}
        style={[
          StyleSheet.absoluteFill,
          {
            width: flattenedStyle?.width,
            height: flattenedStyle?.height,
          },
          imageStyle,
        ]}
        ref={imageRef}
      />
      {children}
    </View>
  );
};
