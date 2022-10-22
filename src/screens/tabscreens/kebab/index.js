import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Kebab = ({ navigation, route }) => {
  const onHandlePress = () => {
    navigation.navigate("User");
  };

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onHandlePress}>
        <Text style={styles.text}>UserScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Kebab;
