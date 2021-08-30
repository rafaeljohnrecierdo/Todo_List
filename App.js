import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Task </Text>

        <View style={styles.items}>
        
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tasksWrapper: {},
  sectionTitle: {},
  items: {}


});
