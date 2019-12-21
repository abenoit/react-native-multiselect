import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import ShiftsContainer from "./components/container/ShiftsContainer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ShiftsContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
