import { View } from "react-native";
import { styles } from "./style";

export const Question5 = () => {
  const cards = Array.from({ length: 6 });

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.searchField} />
        <View style={styles.squareButton} />
      </View>

      <View style={styles.grid}>
        {cards.map((_, index) => (
          <View key={index} style={styles.card} />
        ))}
      </View>
    </View>
  );
};
