import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PortfolioPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Portfoliooooooooooooooooooooooooooooooo</Text>
      <Text style={styles.subtitle}>(belum selesai ya iniiiiii, progresssssssss)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justify: 'center',
    paddingHorizontal: 20, 
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    maxWidth: '90%',
  },
  subtitle: {
    color: '#71767b', 
    fontSize: 14,
    textAlign: 'center',
  },
});