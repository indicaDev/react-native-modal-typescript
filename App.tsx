import { SafeAreaView } from "react-native";

import { Home } from "./src/screens/Home";

import styles from "./src/styles/app";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}
