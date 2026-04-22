import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
    backgroundColor: "#f8fafc",
  },
  sectionBase: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 12,
    justifyContent: "center",
  },
  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowSpaceAround: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  rowBottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  square: {
    width: 36,
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: "#0f172a",
  },
  circle: {
    width: 36,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: "#334155",
  },
});
