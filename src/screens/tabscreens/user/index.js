import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { styles } from "./styles";
import { colors } from "../../../constants/theme";
import { ImageSelector } from "../../../components/tabcomponents";

export const UserScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState('');

  const onHandleText = (text) => {
    setText(text);
  };

  const onHandleImage = (imageUri) => {
    setImage(imageUri);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>User Name</Text>
        <TextInput
          style={styles.input}
          placeholder="New User"
          onChangeText={(text) => onHandleText(text)}
          value={text}
        />
        <Button 
        title='Save'
        onPress={() => navigation.navigate('Kebab')}
        color= {colors.primary}
        />
      </View>
      <ImageSelector onImage={onHandleImage}/>
    </ScrollView>
  );
};

export default UserScreen;
