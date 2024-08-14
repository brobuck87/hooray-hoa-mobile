import RegisterForm from "@/components/RegistrationForm";
import { FontAwesome6 } from "@expo/vector-icons";
import { View, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

export default function RegistrationPage() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, textAlign: "center", marginTop: 20 }}>
        Get Started Today!
      </Text>
      <Link href="/registration" style={styles.registerBtn}>
        Register Here
      </Link>
      <Text style={{ fontSize: 24, textAlign: "center", marginTop: 20 }}>
        Already have an account? Log in here
      </Text>
      <Link href="/login" style={styles.loginBtn}>
        Log In
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignContent: "center",
  },
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
