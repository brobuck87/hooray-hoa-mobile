import React, { useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import api from "@/services/apiService";
import { Link } from "expo-router";

export default function LoginForm() {
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sendLoginRequest = (data: { email: string; password: string }) => {
    console.log(
      `Sending login request with username: ${data.email} and password: ${data.password}`
    );
    api
      .login(data)
      .then((response) => {
        console.log(response);
        Alert.alert("Login successful!");
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Login failed!");
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FontAwesome6
        name="house-chimney-user"
        color="black"
        style={styles.icons}
      />
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="EMAIL OR USERNAME"
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Switch
            value={click}
            onValueChange={setClick}
            trackColor={{ true: "green", false: "gray" }}
          />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>
        <View>
          <Pressable onPress={() => Alert.alert("Forget Password!")}>
            <Text style={styles.forgetText}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.buttonView}>
        <Pressable
          style={styles.button}
          onPress={() =>
            sendLoginRequest({
              email: username,
              password: password,
            })
          }
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
      </View>

      <Text style={styles.footerText}>
        Don't Have Account?
        <Text style={styles.signup}>
          {" "}
          <Link href="/registration">Sign Up</Link>
        </Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 70,
  },
  image: {
    height: 160,
    width: 170,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: "#3D5A80",
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 10,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#3D5A80",
    borderWidth: 1,
    borderRadius: 7,
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  switch: {
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rememberText: {
    fontSize: 13,
    marginStart: 5,
  },
  forgetText: {
    fontSize: 13,
    color: "#3D5A80",
  },
  button: {
    backgroundColor: "#3D5A80",
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50,
  },
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "gray",
    fontSize: 13,
    marginBottom: 6,
  },
  icons: {
    fontSize: 60,
    marginTop: 30,
    marginHorizontal: "auto",
  },
  footerText: {
    textAlign: "center",
    color: "gray",
    marginTop: 5,
  },
  signup: {
    color: "#3D5A80",
    fontSize: 13,
  },
});
