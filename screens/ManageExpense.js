<<<<<<< HEAD
import { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { useColorScheme } from "react-native";
import { COLORS } from "../constants/theme";
import Button from "../components/UI/Button";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {};

  const cancelExpenseHandler = () => {};
  const confirmExpenseHandler = () => {};
=======
import { View, Text, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";

const ManageExpense = ({ route, navigation }) => {
  // use ? in case the expense is undefined
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(
    () =>
      navigation.setOptions({
        title: isEditing ? "Edit Expense" : "Add Expense",
      }),
    [navigation, isEditing]
  );

>>>>>>> 37b0cd0b090424f7bc388922b8cdf328df8e1531
  return (
    <View style={styles.container}>
      <View>
        <Button mode="flat" onPress={cancelExpenseHandler}>
          Cancel
        </Button>
        <Button onPress={confirmExpenseHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={COLORS.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.primary700,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: COLORS.primary200,
    alignItems: "center",
  },
});
=======
const styles = StyleSheet.create({});
>>>>>>> 37b0cd0b090424f7bc388922b8cdf328df8e1531
