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
