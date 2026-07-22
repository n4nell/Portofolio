import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';

export default function AboutPage() {
  const SKILLS = [
    <>Pengelolaan database (<Text style={styles.boldText}>MySQL, phpMyAdmin</Text>)</>,
    <>Desain UI/UX (<Text style={styles.boldText}>Figma</Text>)</>,
    <>Hasil dari <Text style={styles.boldText}>pembelajaran mandiri, kursus online</Text>, & <Text style={styles.boldText}>proyek akademik</Text></>,
  ];

  return (
    <View style={styles.container}>
      
      <View style={styles.pinnedHeader}>
        <Octicons name="pin" size={14} color="#71767b" />
        <Text style={styles.pinnedText}>Pinned Article</Text>
      </View>

      <View style={styles.authorRow}>
        <Image
          source={require('../assets/images/foto_formal.jpeg')}
          style={styles.avatar}
        />
        <Text style={styles.authorName}>Khairin Naila Robiatul Adawiyah</Text>
        <Text style={styles.metaText}>•  08 September 2008</Text>
      </View>

      <Text style={styles.title}>👋 Halo, Saya Khairin Naila Robiatul Adawiyah</Text>

      <Text style={styles.paragraph}>
        Siswa dengan minat pada <Text style={styles.boldText}>pengembangan aplikasi mobile Android</Text>.
      </Text>

      <Text style={styles.paragraph}>
        Memiliki pengalaman menggunakan <Text style={styles.boldText}>Android Studio</Text> dan{' '}
        <Text style={styles.boldText}>Expo</Text>, serta pemahaman dasar mengenai:
      </Text>

      <View style={styles.bulletList}>
        {SKILLS.map((item, index) => (
          <BulletItem key={index}>{item}</BulletItem>
        ))}
      </View>

      <Text style={styles.paragraph}>
        Didukung <Text style={styles.boldText}>semangat belajar</Text>, <Text style={styles.boldText}>berpikir logis</Text>, dan <Text style={styles.boldText}>problem solving</Text> untuk terus berkembang di dunia kerja.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.boldText}>Mari terhubung dan membangun solusi mobile yang bermanfaat bersama!</Text>
      </Text>

    </View>
  );
}

function BulletItem({ children }) {
  return (
    <View style={styles.bulletItem}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.paragraph}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  pinnedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 12,
  },
  pinnedText: {
    color: '#71767b',
    fontSize: 13,
    fontWeight: '600',
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  authorName: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 15,
  },
  metaText: {
    color: '#71767b',
    fontSize: 14,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 16,
  },
  paragraph: {
    color: '#e7e9ea',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 12,
    flex: 1,
  },
  boldText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  bulletList: {
    marginBottom: 8,
    paddingLeft: 8,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bulletDot: {
    color: '#e7e9ea',
    fontSize: 16,
    marginRight: 10,
    lineHeight: 24,
  },
});