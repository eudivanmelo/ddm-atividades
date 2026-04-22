import { View } from "react-native";
import { styles } from "./style";

export const Question4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.mainArea} />
      <View style={styles.middleRow}>
        <View style={styles.middleCard} />
        <View style={styles.middleCard} />
      </View>
      <View style={styles.footer} />
    </View>
  );
};
