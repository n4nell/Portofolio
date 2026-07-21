import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExperiencePage() {
  const experiences = [
    {
      company: 'Pelatihan IT Software',
      location: 'Jakarta, Indonesia',
      period: 'Ags 2024 - Mei 2025',
      role: 'Software Development Trainee',
      points: [
        'Mempelajari pengembangan aplikasi desktop menggunakan Microsoft Visual Studio.',
        'Mengembangkan aplikasi mobile sederhana menggunakan Android Studio dengan Java dan desain antarmuka (UI).',
        'Mengelola basis data menggunakan Microsoft SQL Server Management Studio (SSMS).',
        'Mengintegrasikan aplikasi dengan API menggunakan Swagger.',
      ],
    },
  ];

  return (
    <View style={styles.container}>
      {experiences.map((exp, index) => (
        <View key={index} style={styles.experienceCard}>
          <View style={styles.headerRow}>
            <Text style={styles.companyTitle}>
              {exp.company}{' '}
              <Text style={styles.locationText}>- {exp.location}</Text>
            </Text>
            <Text style={styles.dateText}>{exp.period}</Text>
          </View>

          <Text style={styles.roleText}>{exp.role}</Text>

          <View style={styles.bulletList}>
            {exp.points.map((point, idx) => (
              <View key={idx} style={styles.bulletItem}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.bulletText}>{point}</Text>
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
  experienceCard: {
    marginBottom: 28,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  companyTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
    flex: 1,
    paddingRight: 10,
  },
  locationText: {
    color: '#8b98a5',
    fontSize: 14,
    fontWeight: '400',
  },
  dateText: {
    color: '#8b98a5',
    fontSize: 14,
    fontWeight: '500',
  },
  roleText: {
    color: '#e7e9ea',
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 12,
  },
  bulletList: {
    paddingLeft: 2,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bulletDot: {
    color: '#8b98a5',
    fontSize: 14,
    marginRight: 10,
    lineHeight: 22,
  },
  bulletText: {
    color: '#8b98a5',
    fontSize: 14,
    lineHeight: 22,
    flex: 1,
  },
});