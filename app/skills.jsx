import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Octicons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const SKILL_SECTIONS = [
  {
    title: 'Perangkat',
    icon: <Octicons name="tools" size={20} color="#1d9bf0" />,
    items: ['Android Studio', 'Visual Studio', 'Microsoft SQL Server'],
  },
  {
    title: 'Keterampilan Teknis',
    icon: <MaterialCommunityIcons name="laptop" size={22} color="#1d9bf0" />,
    items: ['UI/UX Design','Java', ' React Native'],
  },
  {
    title: 'Keterampilan Non-Teknis',
    icon: <Ionicons name="people-outline" size={22} color="#1d9bf0" />,
    items: ['Pemecahan Masalah', 'Berorientasi pada Detail', 'Kemampuan Komunikasi', 'Kolaborasi Tim'],
  },
];

export default function SkillsPage() {
  return (
    <View style={styles.container}>
      {SKILL_SECTIONS.map((section, idx) => (
        <View key={idx} style={styles.sectionRow}>
          <View style={styles.iconBadge}>{section.icon}</View>

          <View style={styles.contentColumn}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            
            {section.items.map((item, itemIdx) => (
              <View key={itemIdx} style={styles.bulletItem}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
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