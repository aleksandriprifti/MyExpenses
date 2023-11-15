import { View, Text } from "react-native";
import React from "react";

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => <ExpensesList title={item.title} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
