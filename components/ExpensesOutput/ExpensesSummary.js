import { View, Text } from "react-native";
import React from "react";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, currentExpense) => {
    return sum + currentExpense.amount;
  }, 0);

  return (
    <View>
      <Text>Last {periodName} Days</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
