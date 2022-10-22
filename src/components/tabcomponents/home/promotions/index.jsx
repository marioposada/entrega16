import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { promocionados } from "../../../../constants/data/promocionados";
import PromotionItem from "../promotionItem";

const Promotion = () => {
  return (
    <SafeAreaView style={styles.wraper}>
      <View style={styles.container}>
        <Text style={styles.text}>Promocionados</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={promocionados}
          renderItem={({ item }) => (
            <PromotionItem item={item} onPress={() => {}} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Promotion;


