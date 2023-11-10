import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

interface InputFieldProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  placeholder,
  onChangeText,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});

export default InputField;
