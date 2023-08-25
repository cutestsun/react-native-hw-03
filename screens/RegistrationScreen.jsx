import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { colors } from "../utils/variables"; //! FIX
import { useState } from "react";

export const RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

  const handleFormSubmit = () => {
    const formData = {
      name: name,
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
            paddingBottom: isOpenKeyboard ? 10 : 78,
            height: isOpenKeyboard ? 370 : "auto",
          }}
        >
          <TouchableOpacity
            // onPress={}
            style={styles.addPhotoBtn}
            accessibilityLabel="Add photo"
          >
            <View style={styles.addPhotoIconWrapper}>
              <Icon
                name="add-circle-outline"
                size={34}
                color={colors.mainAccentColor}
                style={styles.addPhotoIcon}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              placeholderTextColor={colors.inputPlaceholderColor}
              value={name}
              onChangeText={setName}
              onFocus={() => setIsOpenKeyboard(true)}
              onBlur={() => setIsOpenKeyboard(false)}
            />
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
            <Text style={styles.submitBtnText}>Зареєстуватися</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logInBtnContainer}
            accessibilityLabel="Link to Log In page"
          >
            <Text style={styles.logInBtnText}>Вже є акаунт? Увійти</Text>
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
    paddingTop: 92,
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
  },
  inputWrapper: {
    rowGap: 16,
    marginBottom: 43,
  },
  showPasswordBtnContainer: {
    position: "absolute",
    right: 16,

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
  logInBtnContainer: {
    padding: 16,
    borderRadius: 100,
  },
  logInBtnText: {
    textAlign: "center",
    color: colors.secondAccentColor,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
});
