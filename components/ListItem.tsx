import { View, StyleSheet, Text } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

type NavItemProps = { icon: string };

const Item = ({ icon }: NavItemProps) => (
  <View style={styles.navItem}>
    <FontAwesome6 name={icon} size={24} color="#fff" style={styles.icon} />
  </View>
);

export default Item;

const styles = StyleSheet.create({
  navItem: {
    backgroundColor: "#293241",
    padding: 20,
    alignItems: "center",
    flexDirection: "column",
  },
  icon: {},
});
