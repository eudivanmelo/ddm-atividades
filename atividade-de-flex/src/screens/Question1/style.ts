import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 14,
    backgroundColor: '#f4f4f5',
  },
  sectionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e4e4e7',
  },
  rowGap: {
    flexDirection: 'row',
    gap: 10,
  },
  equalButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#0ea5e9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  tallCard: {
    flex: 1,
    minHeight: 140,
  },
  innerBlockLarge: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#dbeafe',
  },
  sideBlock: {
    flex: 1,
    aspectRatio: 1.45,
    borderRadius: 10,
    backgroundColor: '#fecaca',
  },
  smallCard: {
    minHeight: 84,
  },
  innerBlockSmall: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#dcfce7',
  },
});