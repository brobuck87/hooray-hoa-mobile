import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import { useState } from "react";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const [input, setInput] = useState("");

  // this function should take what is being type in the textinput and set it to the input state
  const handleInput = (userInput: string) => {
    setInput(userInput);
  };

  const validateUsername = () => {
    if (input.length < 3) {
      alert("Username must be at least 3 characters long");
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#1d3557", dark: "#1D3D47" }}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Get Started with Hooray HOA!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            value={input}
            placeholder="Enter your username"
            onChangeText={handleInput}
            onBlur={validateUsername}
          />
          <TextInput
            style={styles.input}
            value={input}
            placeholder="Enter your password"
            onChangeText={handleInput}
          />
          <TextInput
            style={styles.input}
            value={input}
            placeholder="Confirm your password"
            onChangeText={handleInput}
          />
          <Button
            title="Press me"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </SafeAreaView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
