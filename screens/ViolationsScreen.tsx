import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const violations = [
  { id: "1", description: "Unapproved fence installation", status: "Pending" },
  { id: "2", description: "Overgrown lawn", status: "Resolved" },
];

const ViolationsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={violations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.violation}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  violation: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  description: {
    fontSize: 18,
  },
  status: {
    marginTop: 8,
    color: "gray",
  },
});

export default ViolationsScreen;
