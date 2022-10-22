import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import CategoryItem from "../categoryItem";

const Categories = ({ navigation, tecnicos, onSelected }) => {
 
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categorias</Text>
      <FlatList
      scrollEnabled={false}
        numColumns={3}
        data={tecnicos}
        renderItem={({ item }) => (
          <CategoryItem item={item} onPress={onSelected} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Categories;
