import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
    backgroundColor: "#f1f5f9",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#d4d4d8",
    padding: 12,
    gap: 14,
  },
  topArea: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 52,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: "#a5b4fc",
  },
  textStack: {
    flex: 1,
    gap: 8,
  },
  titleLine: {
    width: "62%",
    height: 14,
    borderRadius: 8,
    backgroundColor: "#c7d2fe",
  },
  subtitleLine: {
    width: "42%",
    height: 11,
    borderRadius: 8,
    backgroundColor: "#e0e7ff",
  },
  actionButton: {
    borderRadius: 10,
    backgroundColor: "#4f46e5",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  actionLabel: {
    color: "#ffffff",
    fontWeight: "700",
  },
});
