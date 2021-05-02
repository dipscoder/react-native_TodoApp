import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTilte}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* This is where all the tasks will go! */}
          <Task text={'Hello'}/>
          <Task text={'JI'}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTilte: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {},
});
