import { StyleSheet } from "react-native";
import colors from "../../config/themes/colors";

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey"
  },
  newUserText: {
    textAlign: "center",
    color: "white",
    textDecorationLine: "underline",
    fontSize: 15
  },
  title: {
    color: "#FFF",
    marginTop: 10,
    width: 200,
    textAlign: "center",
    opacity: 0.8
  },
  formContainer: {
    flex: 1
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "flex-start"
  },
  logo: {
    width: 180,
    height: 180
  }
});

export const FormStyles = StyleSheet.create({
  container: {
    padding: 15
  },
  input: {
    height: 40,
    marginBottom: 5,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    padding: 10
  },
  loginBtn: {
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: colors.darkButton,
    paddingVertical: 10,
    elevation: 7
  },
  loginBtn_disabled: {
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: colors.darkButton,
    opacity: 0.1,
    paddingVertical: 10,
    elevation: 7
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700"
  },
  disabledButtonText: {
    color: colors.disabledBtnColor,
    textAlign: "center",
    fontWeight: "700"
  },
  loader: {
    position: "absolute",
    right: 120,
    top: 10
  }
});
