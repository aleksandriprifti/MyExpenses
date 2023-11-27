import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.button, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: COLORS.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: COLORS.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: COLORS.primary100,
    borderRadius: 4,
  },
});
