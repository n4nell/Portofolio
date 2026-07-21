import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PortfolioPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Portfolio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});