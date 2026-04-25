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
// import globalStyles from "../../constants/globalStyles";
// import COLORS from "../../constants/colors";

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
//     } catch (error) {
//       setMessage(
//         error.response?.data?.detail ||
//           error.response?.data?.message ||
//           "Invalid email or password."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={globalStyles.screen}>
//       <View style={styles.bgShapeTop} />
//       <View style={styles.bgShapeBottom} />

//       <View style={globalStyles.authWrapper}>
//         <View style={styles.header}>
//           <Text style={styles.smallLabel}>Welcome back</Text>
//           <Text style={globalStyles.title}>Login</Text>
//           <Text style={globalStyles.subtitle}>
//             Access your account and continue managing your tasks.
//           </Text>
//         </View>

//         <View style={globalStyles.card}>
//           <TextInput
//             placeholder="Email"
//             placeholderTextColor={COLORS.textSecondary}
//             style={globalStyles.input}
//             onChangeText={setEmail}
//             value={email}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />

//           <TextInput
//             placeholder="Password"
//             placeholderTextColor={COLORS.textSecondary}
//             secureTextEntry
//             style={globalStyles.input}
//             onChangeText={setPassword}
//             value={password}
//           />

//           <TouchableOpacity
//             style={[globalStyles.button, loading && globalStyles.buttonDisabled]}
//             onPress={handleLogin}
//             disabled={loading}
//           >
//             <Text style={globalStyles.buttonText}>
//               {loading ? "Logging in..." : "Login"}
//             </Text>
//           </TouchableOpacity>

//           {message ? (
//             <Text
//               style={[
//                 globalStyles.message,
//                 message.toLowerCase().includes("successful")
//                   ? globalStyles.successText
//                   : globalStyles.errorText,
//               ]}
//             >
//               {message}
//             </Text>
//           ) : null}

//           <Text
//             style={globalStyles.linkText}
//             onPress={() => navigation.navigate("Register")}
//           >
//             Don't have an account? Register
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   bgShapeTop: {
//     position: "absolute",
//     width: 220,
//     height: 220,
//     borderRadius: 110,
//     backgroundColor: COLORS.softPurple,
//     top: -80,
//     right: -70,
//   },
//   bgShapeBottom: {
//     position: "absolute",
//     width: 180,
//     height: 180,
//     borderRadius: 90,
//     backgroundColor: COLORS.softPink,
//     bottom: -50,
//     left: -50,
//   },
//   header: {
//     marginBottom: 18,
//     paddingHorizontal: 4,
//   },
//   smallLabel: {
//     fontSize: 13,
//     color: COLORS.primaryDark,
//     fontWeight: "600",
//     marginBottom: 8,
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
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
        email: email.trim().toLowerCase(),
        password,
      });

      const token = res.data.access_token;
      await AsyncStorage.setItem("token", token);

      setMessage("Login successful.");

      setTimeout(() => {
        // غيريها للشاشة الأساسية بعدين
        navigation.replace("Login");
      }, 900);
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
    <SafeAreaView style={styles.container}>
      <View style={styles.bgTopLeft} />
      <View style={styles.bgTopRight} />
      <View style={styles.bgBottomLeft} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={globalStyles.authWrapper}>
          <View style={globalStyles.authCard}>
            <View style={styles.topGlow} />

            <Text style={styles.pageLabel}>Log In</Text>

            <Text style={styles.mainTitle}>Welcome Back</Text>
            <Text style={styles.mainSubtitle}>
              It’s time to be productive
            </Text>

            <View style={styles.formHeaderRow}>
              <View style={styles.iconCircle}>
                <Text style={styles.iconText}>⇥</Text>
              </View>

              <View>
                <Text style={styles.formTitle}>Log In</Text>
                <Text style={styles.formHint}>
                  Enter Your Credentials to continue
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#A497CE"
              style={globalStyles.input}
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#A497CE"
              secureTextEntry
              style={globalStyles.input}
              onChangeText={setPassword}
              value={password}
            />

            <TouchableOpacity
              style={[globalStyles.button, loading && globalStyles.buttonDisabled]}
              onPress={handleLogin}
              disabled={loading}
              activeOpacity={0.85}
            >
              <Text style={globalStyles.buttonText}>
                {loading ? "Logging in..." : "Let’s Start"}
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
              Don&apos;t have an account? Register
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },

  bgTopLeft: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: COLORS.softPink,
    top: -50,
    left: -70,
  },

  bgTopRight: {
    position: "absolute",
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: COLORS.softMint,
    top: 30,
    right: -80,
  },

  bgBottomLeft: {
    position: "absolute",
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: COLORS.softBlue,
    bottom: -90,
    left: -100,
  },

  topGlow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 140,
    backgroundColor: "#F7F7F3",
    opacity: 0.7,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  pageLabel: {
    fontSize: 14,
    color: "#A7A1BE",
    fontWeight: "600",
    marginBottom: 8,
  },

  mainTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.textPrimary,
    textAlign: "center",
    marginTop: 8,
  },

  mainSubtitle: {
    fontSize: 15,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginTop: 4,
    marginBottom: 26,
  },

  formHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#B8A9FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  iconText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "800",
  },

  formTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: COLORS.textPrimary,
  },

  formHint: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
  },

  divider: {
    height: 1,
    backgroundColor: "#2D2547",
    opacity: 0.2,
    marginBottom: 18,
  },

  inputLabel: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
});