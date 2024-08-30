import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const documents = [
  { id: "1", title: "HOA Bylaws" },
  { id: "2", title: "Community Rules" },
  { id: "3", title: "Meeting Minutes - July 2024" },
];

const DocumentsScreen = () => {
  const handleDocumentPress = (document: any) => {
    // Logic to open/view document
    console.log("Opening document:", document.title);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={documents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleDocumentPress(item)}>
            <Text style={styles.document}>{item.title}</Text>
          </TouchableOpacity>
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
  document: {
    fontSize: 18,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default DocumentsScreen;
