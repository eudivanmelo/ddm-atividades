import { Text, View } from "react-native";
import { styles } from "./style";

export const Question6 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.avatar} />
        <Text style={styles.name}>Maria Silva</Text>
        <Text style={styles.subtitle}>Desenvolvedora Mobile</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard} />
        <View style={styles.statCard} />
        <View style={styles.statCard} />
      </View>

      <View style={styles.actionsRow}>
        <View style={styles.actionButton} />
        <View style={styles.actionButton} />
      </View>

      <View style={styles.footerInfo}>
        <Text style={styles.infoText}>Ultimo acesso: hoje</Text>
        <Text style={styles.infoText}>Plano: estudante</Text>
      </View>
    </View>
  );
};
