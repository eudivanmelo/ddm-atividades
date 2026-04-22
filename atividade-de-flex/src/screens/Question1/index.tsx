import { Text, View } from "react-native";
import { styles } from "./style";


export const Question1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionCard}>
        <View style={styles.rowGap}>
          <View style={styles.equalButton}>
            <Text style={styles.buttonText}>Home</Text>
          </View>
          <View style={styles.equalButton}>
            <Text style={styles.buttonText}>Perfil</Text>
          </View>
        </View>
      </View>

      <View style={[styles.sectionCard, styles.tallCard]}>
        <View style={styles.innerBlockLarge} />
      </View>

      <View style={styles.sectionCard}>
        <View style={styles.rowGap}>
          <View style={styles.sideBlock} />
          <View style={styles.sideBlock} />
        </View>
      </View>

      <View style={[styles.sectionCard, styles.smallCard]}>
        <View style={styles.innerBlockSmall} />
      </View>
    </View>
  );
};
