import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import Item from "@/components/ListItem";

export default function HomePage() {
  const NavItems = [
    {
      icon: "house-chimney",
      id: 123,
    },
    {
      icon: "user",
      id: 456,
    },
    {
      icon: "gear",
      id: 789,
    },
    {
      icon: "info",
      id: 101,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={NavItems}
        renderItem={({ item }) => <Item icon={item.icon} />}
        style={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "column",
  },
});
