import { StyleSheet } from "react-native";
import COLORS from "./colors";

const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  authWrapper: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 24,
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: 28,
    padding: 24,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 5,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.textSecondary,
    marginBottom: 24,
  },

  input: {
    backgroundColor: COLORS.inputBg,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 15,
    fontSize: 16,
    color: COLORS.textPrimary,
    marginBottom: 14,
  },

  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  buttonDisabled: {
    opacity: 0.7,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },

  linkText: {
    marginTop: 18,
    color: COLORS.primaryDark,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },

  message: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },

  successText: {
    color: COLORS.success,
  },

  errorText: {
    color: COLORS.error,
  },
});

export default globalStyles;