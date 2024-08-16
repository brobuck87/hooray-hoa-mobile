import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.dark.background,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="registration" />
      <Stack.Screen name="login" />
      <Stack.Screen name="home" />
    </Stack>
  );
}
