import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const Button = ({
  labelText,
  hrefRoute,
  linkText,
  btnStyle,
}: {
  labelText: string;
  hrefRoute: any;
  linkText: string;
  btnStyle: string;
}) => {
  const btnStyles =
    btnStyle === "registerBtn" ? styles.registerBtn : styles.loginBtn;

  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: "center", marginTop: 20 }}>
        {labelText}
      </Text>
      <Link href={hrefRoute} style={btnStyles}>
        {linkText}
      </Link>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  registerBtn: {
    backgroundColor: "#3D5A80",
    color: "#E0FBFC",
    padding: 10,
    textAlign: "center",
    width: "60%",
    marginHorizontal: "auto",
    marginTop: 20,
    fontSize: 18,
  },
  loginBtn: {
    backgroundColor: "#98C1D9",
    color: "#151515",
    padding: 10,
    textAlign: "center",
    width: "60%",
    marginHorizontal: "auto",
    marginTop: 20,
    fontSize: 18,
  },
});
