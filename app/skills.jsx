import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Octicons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function SkillsPage() {

  const tools = [
    'Android Studio',
    'Visual Studio',
    'Microsoft SQL Server',
  ];

  const hardSkills = [
    'UI/UX Design',
    'Java',
    'React Native',
  ];

  const softSkills = [
    'Pemecahan Masalah',
    'Berorientasi pada Detail',
    'Kemampuan Komunikasi',
    'Kolaborasi Tim',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.sectionRow}>
        <View style={styles.iconBadge}>
          <Octicons name="tools" size={20} color="#1d9bf0" />
        </View>

        <View style={styles.contentColumn}>
          <Text style={styles.sectionTitle}>Perangkat</Text>
          <View style={styles.listContainer}>
            {tools.map((item, index) => (
              <View key={index} style={styles.bulletItem}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.sectionRow}>
        <View style={styles.iconBadge}>
          <MaterialCommunityIcons name="laptop" size={22} color="#1d9bf0" />
        </View>

        <View style={styles.contentColumn}>
          <Text style={styles.sectionTitle}>Keterampilan Teknis</Text>
          <View style={styles.listContainer}>
            {hardSkills.map((item, index) => (
              <View key={index} style={styles.bulletItem}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.sectionRow}>
        <View style={styles.iconBadge}>
          <Ionicons name="people-outline" size={22} color="#1d9bf0" />
        </View>

        <View style={styles.contentColumn}>
          <Text style={styles.sectionTitle}>Keterampilan Non-Teknis</Text>
          <View style={styles.listContainer}>
            {softSkills.map((item, index) => (
              <View key={index} style={styles.bulletItem}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 32,
    gap: 16,
  },
  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1e2732',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  contentColumn: {
    flex: 1,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  listContainer: {
    paddingLeft: 2,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  bulletDot: {
    color: '#8b98a5',
    fontSize: 14,
    marginRight: 8,
  },
  itemText: {
    color: '#8b98a5',
    fontSize: 15,
    lineHeight: 22,
  },
});