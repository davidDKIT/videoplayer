import { View, Text } from "react-native";
import React from "react";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  return (
    <View className="space-y-2">
      <Text className="text-base text-black-100 font-pmedium">{title}</Text>
      <View /> 
    </View>
  );
};

export default FormField;
