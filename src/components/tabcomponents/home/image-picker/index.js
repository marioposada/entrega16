import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { styles } from "./styles";
import * as ImagePicker from "expo-image-picker";

export const ImageSelector = ({ onImage }) => {
  const [pickUrl, setPickUrl] = useState(null);

  const verifyPermissions = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const onHandleImage = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickUrl(image.uri);
    onImage(image.uri);
    


   
  
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickUrl ? (
          <Text>No image picked yet.</Text>
        ) : (
          <Image source={{ uri: pickUrl }} style={styles.image} />
        )}
      </View>
      <Button style={styles.button} title="Pick Image" onPress={onHandleImage} />
    </View>
  );
};

export default ImageSelector;
