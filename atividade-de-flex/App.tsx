import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import {
  Pressable,
  SafeAreaViewBase,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Question1 } from "./src/screens/Question1";
import { Question2 } from "./src/screens/Question2";
import { Question3 } from "./src/screens/Question3";
import { Question4 } from "./src/screens/Question4";
import { Question5 } from "./src/screens/Question5";
import { Question6 } from "./src/screens/Question6";


type ScreenId = 1 | 2 | 3 | 4 | 5 | 6;

const tabs: { id: ScreenId; label: string }[] = [
  { id: 1, label: "Questao 01" },
  { id: 2, label: "Questao 02" },
  { id: 3, label: "Questao 03" },
  { id: 4, label: "Questao 04" },
  { id: 5, label: "Questao 05" },
  { id: 6, label: "Questao 06" },
];

export const App = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenId>(1);

  const currentScreen = useMemo(() => {
    if (activeScreen === 1) return <Question1 />;
    if (activeScreen === 2) return <Question2 />;
    if (activeScreen === 3) return <Question3 />;
    if (activeScreen === 4) return <Question4 />;
    if (activeScreen === 5) return <Question5 />;
    return <Question6 />;
  }, [activeScreen]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Atividade de Flex</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tabList}
            >
              {tabs.map((tab) => {
                const isActive = tab.id === activeScreen;

                return (
                  <Pressable
                    key={tab.id}
                    style={[
                      styles.tabButton,
                      isActive && styles.tabButtonActive,
                    ]}
                    onPress={() => setActiveScreen(tab.id)}
                  >
                    <Text
                      style={[
                        styles.tabLabel,
                        isActive && styles.tabLabelActive,
                      ]}
                    >
                      {tab.label}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>

          <View style={styles.screenArea}>{currentScreen}</View>
        </View>
        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 10,
    paddingHorizontal: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0f172a",
  },
  tabList: {
    gap: 8,
    paddingRight: 10,
  },
  tabButton: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#ffffff",
  },
  tabButtonActive: {
    backgroundColor: "#0f172a",
    borderColor: "#0f172a",
  },
  tabLabel: {
    color: "#0f172a",
    fontWeight: "600",
  },
  tabLabelActive: {
    color: "#ffffff",
  },
  screenArea: {
    flex: 1,
  },
});
