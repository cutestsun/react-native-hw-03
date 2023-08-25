import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./screens/RegistrationScreen";
import { LoginScreen } from "./screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.otf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.otf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require("./assets/img/bg-image.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        {/* <RegistrationScreen /> */}
        <LoginScreen />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
