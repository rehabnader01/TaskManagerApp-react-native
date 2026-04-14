// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import API from "../../../services/api";

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     setMessage("");

//     if (!email || !password) {
//       setMessage("Please enter email and password.");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await API.post("/auth/login", {
//         email,
//         password,
//       });

//       const token = res.data.access_token;
//       await AsyncStorage.setItem("token", token);

//       setMessage("Login successful.");

//       setTimeout(() => {
//         navigation.replace("Login"); // غيريها بعدين لـ Home لما تعمليها
//       }, 1000);
//     } catch (error) {
//       setMessage("Invalid email or password.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>

//       <TextInput
//         placeholder="Email"
//         style={styles.input}
//         onChangeText={setEmail}
//         value={email}
//       />

//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         style={styles.input}
//         onChangeText={setPassword}
//         value={password}
//       />

//       <TouchableOpacity
//         style={[styles.button, loading && styles.buttonDisabled]}
//         onPress={handleLogin}
//         disabled={loading}
//       >
//         <Text style={styles.buttonText}>
//           {loading ? "Logging in..." : "Login"}
//         </Text>
//       </TouchableOpacity>

//       {message ? (
//         <Text
//           style={[
//             styles.message,
//             message.toLowerCase().includes("successful")
//               ? styles.successText
//               : styles.errorText,
//           ]}
//         >
//           {message}
//         </Text>
//       ) : null}

//       <Text onPress={() => navigation.navigate("Register")}>
//         Don't have account? Register
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", padding: 20 },
//   title: { fontSize: 24, marginBottom: 20 },
//   input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 8 },
//   button: { backgroundColor: "#6C63FF", padding: 15, borderRadius: 8 },
//   buttonDisabled: { opacity: 0.7 },
//   buttonText: { color: "#fff", textAlign: "center" },
//   message: { marginTop: 12, marginBottom: 10, fontSize: 14 },
//   successText: { color: "green" },
//   errorText: { color: "red" },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import API from "../../../services/api";
import globalStyles from "../../constants/globalStyles";
import COLORS from "../../constants/colors";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setMessage("");

    if (!email || !password) {
      setMessage("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/login", {
        email,
        password,
      });

      const token = res.data.access_token;
      await AsyncStorage.setItem("token", token);

      setMessage("Login successful.");
    } catch (error) {
      setMessage(
        error.response?.data?.detail ||
          error.response?.data?.message ||
          "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={globalStyles.screen}>
      <View style={styles.bgShapeTop} />
      <View style={styles.bgShapeBottom} />

      <View style={globalStyles.authWrapper}>
        <View style={styles.header}>
          <Text style={styles.smallLabel}>Welcome back</Text>
          <Text style={globalStyles.title}>Login</Text>
          <Text style={globalStyles.subtitle}>
            Access your account and continue managing your tasks.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={COLORS.textSecondary}
            style={globalStyles.input}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor={COLORS.textSecondary}
            secureTextEntry
            style={globalStyles.input}
            onChangeText={setPassword}
            value={password}
          />

          <TouchableOpacity
            style={[globalStyles.button, loading && globalStyles.buttonDisabled]}
            onPress={handleLogin}
            disabled={loading}
          >
            <Text style={globalStyles.buttonText}>
              {loading ? "Logging in..." : "Login"}
            </Text>
          </TouchableOpacity>

          {message ? (
            <Text
              style={[
                globalStyles.message,
                message.toLowerCase().includes("successful")
                  ? globalStyles.successText
                  : globalStyles.errorText,
              ]}
            >
              {message}
            </Text>
          ) : null}

          <Text
            style={globalStyles.linkText}
            onPress={() => navigation.navigate("Register")}
          >
            Don't have an account? Register
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgShapeTop: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: COLORS.softPurple,
    top: -80,
    right: -70,
  },
  bgShapeBottom: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: COLORS.softPink,
    bottom: -50,
    left: -50,
  },
  header: {
    marginBottom: 18,
    paddingHorizontal: 4,
  },
  smallLabel: {
    fontSize: 13,
    color: COLORS.primaryDark,
    fontWeight: "600",
    marginBottom: 8,
  },
});