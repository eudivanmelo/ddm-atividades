import { View } from "react-native";
import { styles } from "./style";

export const Question2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionBase}>
        <View style={styles.rowSpaceBetween}>
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
        </View>
      </View>

      <View style={styles.sectionBase}>
        <View style={styles.rowSpaceAround}>
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.square} />
        </View>
      </View>

      <View style={styles.sectionBase}>
        <View style={styles.rowBottom}>
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.square} />
        </View>
      </View>

      <View style={styles.sectionBase}>
        <View style={styles.rowCenter}>
          <View style={styles.square} />
          <View style={styles.square} />
        </View>
      </View>
    </View>
  );
};
