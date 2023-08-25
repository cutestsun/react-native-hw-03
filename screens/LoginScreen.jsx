import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import { colors } from "../utils/variables";
import { useState } from "react";

export const LoginScreen = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

  const inputTheme = {
    roundness: 8,
    colors: {
      primary: colors.mainAccentColor,
      background: colors.inputBgColor,
    },
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Недійсна електронна пошта")
      .required("Необхідно вказати електронну пошту"),
    password: Yup.string()
      .min(6, "Пароль має бути не менше 6 символів")
      .required("Необхідно вказати пароль"),
  });

  const onFocus = () => {
    setIsOpenKeyboard(true);
  };

  const onBlur = () => {
    setIsOpenKeyboard(false);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values, actions) => {
                console.log(values);
                actions.resetForm();
              }}
              validationSchema={validationSchema}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <View style={styles.inputWrapper}>
                    <TextInput
                      // placeholder="Адреса електронної пошти"
                      // placeholderTextColor={colors.inputPlaceholderColor}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onFocus={onFocus}
                      onBlur={() => {
                        handleBlur("email");
                        onBlur();
                      }}
                      mode="outlined"
                      label="Адреса електронної пошти"
                      outlineColor={colors.inputBorderColor}
                      outlineStyle={{ borderWidth: 1 }}
                      theme={inputTheme}
                      contentStyle={styles.input}
                    />
                    {touched.email && errors.email && (
                      <Text style={{ color: "red", marginLeft: 16 }}>
                        {errors.email}
                      </Text>
                    )}
                    <View style={{ position: "relative" }}>
                      <TextInput
                        // placeholder="Пароль"
                        // placeholderTextColor={colors.inputPlaceholderColor}
                        secureTextEntry={isVisiblePassword}
                        value={values.password}
                        onChangeText={handleChange("password")}
                        onFocus={onFocus}
                        onBlur={() => {
                          handleBlur("password");
                          onBlur();
                        }}
                        mode="outlined"
                        label="Пароль"
                        outlineColor={colors.inputBorderColor}
                        outlineStyle={{ borderWidth: 1 }}
                        theme={inputTheme}
                        contentStyle={styles.input}
                      />
                      {touched.password && errors.password && (
                        <Text
                          style={{ color: "red", marginTop: 8, marginLeft: 16 }}
                        >
                          {errors.password}
                        </Text>
                      )}
                      <TouchableOpacity
                        onPress={() =>
                          setIsVisiblePassword((prevState) => !prevState)
                        }
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
                    onPress={handleSubmit}
                    style={styles.submitBtnContainer}
                    accessibilityLabel="Sign Up"
                  >
                    <Text style={styles.submitBtnText}>Увійти</Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
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
    </TouchableWithoutFeedback>
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
    marginBottom: 25,
  },
  input: {
    fontSize: 16,
    color: colors.mainTextColor,
    fontFamily: "Roboto-Regular",
    height: 50,
  },
  inputWrapper: {
    rowGap: 8,
    marginBottom: 43,
  },
  showPasswordBtnContainer: {
    position: "absolute",
    zIndex: 1,
    right: 16,
    top: 6,
    paddingTop: 16,
    paddingBottom: 16,
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
