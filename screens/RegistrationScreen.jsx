import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../utils/variables";

export const RegistrationScreen = () => {
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
    name: Yup.string().required("Необхідно вказати логін"),
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
            <Formik
              initialValues={{ name: "", email: "", password: "" }}
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
                      // placeholder="Логін"
                      // placeholderTextColor={colors.inputPlaceholderColor}
                      value={values.name}
                      onChangeText={handleChange("name")}
                      onFocus={onFocus}
                      onBlur={() => {
                        handleBlur("name");
                        onBlur();
                      }}
                      mode="outlined"
                      label="Логін"
                      outlineColor={colors.inputBorderColor}
                      outlineStyle={{ borderWidth: 1 }}
                      theme={inputTheme}
                      contentStyle={styles.input}
                    />
                    {touched.name && errors.name && (
                      <Text style={{ color: "red", marginLeft: 16 }}>
                        {errors.name}
                      </Text>
                    )}
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
                    <Text style={styles.submitBtnText}>Зареєструватися</Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik>

            <TouchableOpacity
              style={styles.logInBtnContainer}
              accessibilityLabel="Link to Log In page"
            >
              <Text style={styles.logInBtnText}>Вже є акаунт? Увійти</Text>
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
