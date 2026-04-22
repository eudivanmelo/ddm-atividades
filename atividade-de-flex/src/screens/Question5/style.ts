import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    gap: 14,
    backgroundColor: "#f8fafc",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchField: {
    flex: 1,
    height: 44,
    borderRadius: 999,
    backgroundColor: "#e2e8f0",
  },
  squareButton: {
    width: 44,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: "#64748b",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
    rowGap: 10,
  },
  card: {
    width: "48%",
    height: "50%",
    aspectRatio: 1.3,
    borderRadius: 12,
    backgroundColor: "#cbd5e1",
  },
});
