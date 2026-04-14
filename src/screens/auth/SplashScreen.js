// import React, { useEffect } from "react";
// import { View, ActivityIndicator } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function SplashScreen({ navigation }) {
//   useEffect(() => {
//     const checkLogin = async () => {
//       const token = await AsyncStorage.getItem("token");

//       setTimeout(() => {
//         if (token) {
//           navigation.replace("Login");
//         } else {
//           navigation.replace("Login");
//         }
//       }, 1500);
//     };

//     checkLogin();
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <ActivityIndicator size="large" />
//     </View>
//   );
// }

import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import COLORS from "../../constants/colors";

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
      }, 1800);
    };

    checkLogin();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.topCircle} />
      <View style={styles.bottomCircle} />

      <View style={styles.logoBox}>
        <Text style={styles.logoText}>✓</Text>
      </View>

      <Text style={styles.title}>Task Manager</Text>
      <Text style={styles.subtitle}>
        Plan your day, track your goals, and stay organized.
      </Text>

      <ActivityIndicator size="small" color={COLORS.primary} style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    overflow: "hidden",
  },
  topCircle: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: COLORS.softPurple,
    top: -80,
    right: -90,
  },
  bottomCircle: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: COLORS.softPink,
    bottom: -70,
    left: -80,
  },
  logoBox: {
    width: 96,
    height: 96,
    borderRadius: 28,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.25,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  logoText: {
    fontSize: 38,
    fontWeight: "700",
    color: COLORS.white,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    color: COLORS.textSecondary,
    lineHeight: 22,
    maxWidth: 280,
  },
  loader: {
    marginTop: 28,
  },
});