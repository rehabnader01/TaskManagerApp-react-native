import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem("token");

      setTimeout(() => {
        if (token) {
          navigation.replace("Login");
        } else {
          navigation.replace("Login");
        }
      }, 1500);
    };

    checkLogin();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}