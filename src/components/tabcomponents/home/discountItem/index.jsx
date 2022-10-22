import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

const DiscountItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.wraper} onPress={onPress}>
      <View style={styles.container}>
        <Ionicons style={styles.iconstyle} name="construct"  />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DiscountItem;