import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainTabNavigator from "../components/navigation/MainTabNavigator"; // Importing MainTabNavigator from the appropriate file

const Tab = createBottomTabNavigator();

export default function Home() {
  return <MainTabNavigator />;
}
