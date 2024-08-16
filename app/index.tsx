import { View } from "react-native";
import Button from "@/components/Button";
import { Link } from "expo-router";

export default function RegistrationPage() {
  return (
    <View style={{ flex: 2 }}>
      <Button
        labelText={"Get Started Today!"}
        hrefRoute={"/registration"}
        linkText={"Register Here"}
        btnStyle={"registerBtn"}
      />
      <Button
        labelText={"Already have an account?"}
        hrefRoute={"/login"}
        linkText={"Log In Here"}
        btnStyle={"loginBtn"}
      />
      <Link href="/home">Home</Link>
    </View>
  );
}
