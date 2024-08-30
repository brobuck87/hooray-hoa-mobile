import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import api from "@/services/apiService";

// Define the shape of the form data
interface FormData {
  name: string;
  email: string;
  password: string;
  role: string;
  // Add more fields as needed
}

// Define the shape of validation errors
interface Errors {
  [key: string]: string;
}

const RegisterForm: React.FC = () => {
  // Initialize form state with default values
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    role: "baseUser",
    // Add more fields as needed
  });

  const [errors, setErrors] = useState<Errors>({});

  // Handle form field change
  const handleChange = (name: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate the form data
  const validate = () => {
    const newErrors: Errors = {};

    if (!formData.name) newErrors.name = "Government Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (formData.password.length > 18) {
      newErrors.password = "Password must be at most 18 characters";
    }
    // else if (
    //   !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,18}$/.test(
    //     formData.password
    //   )
    // ) {
    //   newErrors.password =
    //     "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    // }
    // Add more validation rules as needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validate()) {
      console.log("Form data is valid", formData);
      api
        .register(formData)
        .then((response) => {
          console.log("Registration successful", JSON.stringify(response));
        })
        .catch((error) => {
          console.error("Registration failed", JSON.stringify(error));
        });
    } else {
      console.error("Form validation failed");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("name", text)}
          value={formData.name}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
      </View>
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          onChangeText={(text) => handleChange("email", text)}
          autoCapitalize="none"
          value={formData.email}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      </View>
      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          onChangeText={(text) => handleChange("password", text)}
          autoCapitalize="none"
          value={formData.password}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
      </View>

      <Button title="Register" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginHorizontal: "auto",
    marginVertical: 32,
  },
  inputContainer: {
    marginBottom: 12,
    gap: 8,
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  errorText: {
    color: "red",
    marginTop: 4,
  },
});

export default RegisterForm;
