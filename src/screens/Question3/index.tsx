import { Text, View } from "react-native";
import { styles } from "./style";

const ProfileCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.topArea}>
        <View style={styles.avatar} />
        <View style={styles.textStack}>
          <View style={styles.titleLine} />
          <View style={styles.subtitleLine} />
        </View>
      </View>
      <View style={styles.actionButton}>
        <Text style={styles.actionLabel}>Acessar</Text>
      </View>
    </View>
  );
};

export const Question3 = () => {
  return (
    <View style={styles.container}>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </View>
  );
};
