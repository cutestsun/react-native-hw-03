import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";

import { colors } from "../utils/variables"; //! FIX
import { useState } from "react";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

  const handleFormSubmit = () => {
    const formData = {
      email: email,
      password: password,
    };

    console.log(formData);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            ...styles.mainContainer,
            paddingBottom: isOpenKeyboard ? 10 : 128,
            height: isOpenKeyboard ? 250 : "auto",
          }}
        >
          <Text style={styles.title}>Увійти</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              placeholderTextColor={colors.inputPlaceholderColor}
              value={email}
              onChangeText={setEmail}
              onFocus={() => setIsOpenKeyboard(true)}
              onBlur={() => setIsOpenKeyboard(false)}
            />
            <View style={{ position: "relative" }}>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                placeholderTextColor={colors.inputPlaceholderColor}
                secureTextEntry={isVisiblePassword}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setIsOpenKeyboard(true)}
                onBlur={() => setIsOpenKeyboard(false)}
              />
              <TouchableOpacity
                onPress={() => setIsVisiblePassword((prevState) => !prevState)}
                style={styles.showPasswordBtnContainer}
                accessibilityLabel="Show or hide password"
              >
                <Text style={styles.showPasswordBtnText}>
                  {isVisiblePassword ? "Показати" : "Сховати"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleFormSubmit}
            style={styles.submitBtnContainer}
            accessibilityLabel="Sign Up"
          >
            <Text style={styles.submitBtnText}>Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signUpBtnContainer}
            accessibilityLabel="Link to Log In page"
          >
            <Text style={styles.signUpBtnText}>
              Немає акаунту? Зареєструватися
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: "relative",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  addPhotoBtn: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
    width: 120,
    height: 120,
    backgroundColor: colors.inputBgColor,
    borderRadius: 16,
  },
  addPhotoIconWrapper: {
    borderRadius: 50,
    position: "absolute",
    right: -14,
    bottom: 12,
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  addPhotoIcon: {
    backgroundColor: "#fff",
    position: "relative",
    marginLeft: -2,
    marginTop: -4,
  },
  title: {
    color: colors.mainTextColor,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  input: {
    backgroundColor: colors.inputBgColor,
    borderColor: colors.inputBorderColor,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,

    fontFamily: "Roboto-Regular",
    height: Platform.OS === "ios" ? 52 : 50,
    // height: 50,
  },
  inputWrapper: {
    rowGap: 16,
    marginBottom: 43,
  },
  showPasswordBtnContainer: {
    position: "absolute",
    right: 16,
    // top: 16,
    paddingTop: Platform.OS === "ios" ? 16 : 14.5,
    paddingBottom: Platform.OS === "ios" ? 16 : 14.5,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  showPasswordBtnText: {
    color: colors.secondAccentColor,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  submitBtnContainer: {
    padding: 16,
    borderRadius: 100,
    backgroundColor: colors.mainAccentColor,
  },
  submitBtnText: {
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  signUpBtnContainer: {
    padding: 16,
    borderRadius: 100,
  },
  signUpBtnText: {
    textAlign: "center",
    color: colors.secondAccentColor,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
});
