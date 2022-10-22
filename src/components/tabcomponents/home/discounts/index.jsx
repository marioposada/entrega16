import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { promocionados } from "../../../../constants/data/promocionados";
import DiscountItem from "../discountItem";

const Discount = () => {
  return (
    <SafeAreaView style={styles.wraper}>
      <View style={styles.container}>
        <Text style={styles.text}>Descuentos y Cupones</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={promocionados}
          renderItem={({ item }) => (
            <DiscountItem item={item} onPress={() => {}} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Discount;