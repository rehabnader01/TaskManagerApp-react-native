// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import API from "../../../services/api";
// import globalStyles from "../../constants/globalStyles";
// import COLORS from "../../constants/colors";

// export default function RegisterScreen({ navigation }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const isValidEmail = (value) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//   };

//   const handleRegister = async () => {
//     setMessage("");

//     const trimmedName = name.trim();
//     const trimmedEmail = email.trim().toLowerCase();
//     const trimmedPassword = password.trim();

//     if (!trimmedName || !trimmedEmail || !trimmedPassword) {
//       setMessage("Please fill in name, email, and password.");
//       return;
//     }

//     if (!isValidEmail(trimmedEmail)) {
//       setMessage("Please enter a valid email address.");
//       return;
//     }

//     if (trimmedPassword.length < 6) {
//       setMessage("Password must be at least 6 characters.");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await API.post("/auth/register", {
//         name: trimmedName,
//         email: trimmedEmail,
//         password: trimmedPassword,
//       });

//       console.log("REGISTER SUCCESS:", res.data);

//       setMessage("Account created successfully. Redirecting to login...");

//       setTimeout(() => {
//         navigation.navigate("Login");
//       }, 1200);
//     } catch (error) {
//       console.log("REGISTER ERROR DATA:", error.response?.data);
//       console.log("REGISTER ERROR STATUS:", error.response?.status);

//       const backendError =
//         error.response?.data?.detail ||
//         error.response?.data?.message ||
//         error.response?.data?.error;

//       if (typeof backendError === "string" && backendError.trim()) {
//         setMessage(backendError);
//       } else if (Array.isArray(backendError)) {
//         setMessage(backendError.join(", "));
//       } else if (error.response?.status === 409) {
//         setMessage("This email is already registered. Please log in instead.");
//       } else if (error.response?.status === 400) {
//         setMessage("Please check your entered data and try again.");
//       } else {
//         setMessage("Registration failed. Please try again.");
//       }
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
//           <Text style={styles.smallLabel}>Create your account</Text>
//           <Text style={globalStyles.title}>Register</Text>
//           <Text style={globalStyles.subtitle}>
//             Enter your details below to create a new account.
//           </Text>
//         </View>

//         <View style={globalStyles.card}>
//           <Text style={styles.hint}>
//             Use a valid email address and a password with at least 6 characters.
//           </Text>

//           <TextInput
//             placeholder="Full name"
//             placeholderTextColor={COLORS.textSecondary}
//             style={globalStyles.input}
//             onChangeText={setName}
//             value={name}
//           />

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
//             onPress={handleRegister}
//             disabled={loading}
//           >
//             <Text style={globalStyles.buttonText}>
//               {loading ? "Creating account..." : "Sign Up"}
//             </Text>
//           </TouchableOpacity>

//           {message ? (
//             <Text
//               style={[
//                 globalStyles.message,
//                 message.toLowerCase().includes("success")
//                   ? globalStyles.successText
//                   : globalStyles.errorText,
//               ]}
//             >
//               {message}
//             </Text>
//           ) : null}

//           <Text
//             style={globalStyles.linkText}
//             onPress={() => navigation.navigate("Login")}
//           >
//             Already have an account? Login
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
//     left: -70,
//   },
//   bgShapeBottom: {
//     position: "absolute",
//     width: 180,
//     height: 180,
//     borderRadius: 90,
//     backgroundColor: COLORS.softPink,
//     bottom: -50,
//     right: -50,
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
//   hint: {
//     fontSize: 13,
//     color: COLORS.textSecondary,
//     marginBottom: 14,
//     lineHeight: 20,
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import API from "../../../services/api";
import globalStyles from "../../constants/globalStyles";
import COLORS from "../../constants/colors";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleRegister = async () => {
    setMessage("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPassword) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (trimmedPassword.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        name: trimmedName,
        email: trimmedEmail,
        password: trimmedPassword,
      };

      console.log("REGISTER PAYLOAD:", payload);

      const res = await API.post("/auth/register", payload);

      console.log("REGISTER SUCCESS:", res.data);

      setMessage("Account created successfully.");

      setTimeout(() => {
        navigation.navigate("Login");
      }, 1200);
    } catch (error) {
      console.log("=== REGISTER ERROR START ===");
      console.log("error.message:", error.message);
      console.log("error.response?.status:", error.response?.status);
      console.log("error.response?.data:", error.response?.data);
      console.log("error.request:", error.request);
      console.log("=== REGISTER ERROR END ===");

      const data = error.response?.data;

      if (typeof data === "string" && data.trim()) {
        setMessage(data);
      } else if (data?.detail) {
        setMessage(
          typeof data.detail === "string"
            ? data.detail
            : JSON.stringify(data.detail)
        );
      } else if (data?.message) {
        setMessage(data.message);
      } else if (data?.error) {
        setMessage(data.error);
      } else if (!error.response) {
        setMessage("Cannot connect to server.");
      } else {
        setMessage("Registration failed. Please try again.");
      }
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
          <Text style={styles.smallLabel}>Create your account</Text>
          <Text style={globalStyles.title}>Register</Text>
          <Text style={globalStyles.subtitle}>
            Enter your details below to create a new account.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={styles.hint}>
            Please enter your name, a valid email, and a password with at least
            6 characters.
          </Text>

          <TextInput
            placeholder="Full name"
            placeholderTextColor={COLORS.textSecondary}
            style={globalStyles.input}
            onChangeText={setName}
            value={name}
          />

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
            onPress={handleRegister}
            disabled={loading}
          >
            <Text style={globalStyles.buttonText}>
              {loading ? "Creating account..." : "Sign Up"}
            </Text>
          </TouchableOpacity>

          {message ? (
            <Text
              style={[
                globalStyles.message,
                message.toLowerCase().includes("success")
                  ? globalStyles.successText
                  : globalStyles.errorText,
              ]}
            >
              {message}
            </Text>
          ) : null}

          <Text
            style={globalStyles.linkText}
            onPress={() => navigation.navigate("Login")}
          >
            Already have an account? Login
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
    left: -70,
  },
  bgShapeBottom: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: COLORS.softPink,
    bottom: -50,
    right: -50,
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
  hint: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 14,
    lineHeight: 20,
  },
});