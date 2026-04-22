import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 14,
    backgroundColor: "#f8fafc",
  },
  hero: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    paddingVertical: 18,
    gap: 6,
  },
  avatar: {
    width: 92,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: "#93c5fd",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
  },
  subtitle: {
    fontSize: 13,
    color: "#475569",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statCard: {
    width: "28%",
    aspectRatio: 1.2,
    borderRadius: 10,
    backgroundColor: "#dbeafe",
  },
  actionsRow: {
    flexDirection: "row",
    gap: 10,
  },
  actionButton: {
    flex: 1,
    height: 44,
    borderRadius: 10,
    backgroundColor: "#1d4ed8",
  },
  footerInfo: {
    marginTop: "auto",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    padding: 12,
    gap: 4,
  },
  infoText: {
    color: "#334155",
    fontSize: 13,
  },
});
