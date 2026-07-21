import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';

export default function AboutPage() {
  return (
    <View style={styles.container}>
      <View style={styles.pinnedHeader}>
        <Octicons name="pin" size={14} color="#71767b" />
        <Text style={styles.pinnedText}>Pinned Article</Text>
      </View>

      <View style={styles.authorRow}>
        <Image
          source={require('../assets/images/foto_formal.jpeg')}
          style={styles.smallAvatar}
        />
        <Text style={styles.authorName}>Khairin Naila Robiatul Adawiyah</Text>
        <Text style={styles.dotSeparator}>•</Text>
        <Text style={styles.dateText}>08 September 2008</Text>
      </View>

      <Text style={styles.greetingTitle}>
        👋 Halo, Saya Khairin Naila Robiatul Adawiyah
      </Text>

      <Text style={styles.paragraph}>
        Siswa dengan minat pada <Text style={styles.boldText}>pengembangan aplikasi mobile Android</Text>.
      </Text>

      <Text style={styles.paragraph}>
        Memiliki pengalaman menggunakan <Text style={styles.boldText}>Android Studio</Text> dan{' '}
        <Text style={styles.boldText}>Expo</Text> sebagai lingkungan pengembangan, serta pemahaman dasar mengenai:
      </Text>

      <View style={styles.bulletList}>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>
            <Text style={styles.boldText}>Pengelolaan database</Text> menggunakan <Text style={styles.boldText}>MySQL</Text> dan <Text style={styles.boldText}>phpMyAdmin</Text>
          </Text>
        </View>

        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>
            <Text style={styles.boldText}>Desain UI/UX</Text> menggunakan <Text style={styles.boldText}>Figma</Text>
          </Text>
        </View>

        <View style={styles.bulletItem}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>
            Kemampuan yang diperoleh melalui <Text style={styles.boldText}>pembelajaran mandiri, kursus online</Text>, dan <Text style={styles.boldText}>proyek-proyek akademik</Text>
          </Text>
        </View>
      </View>

      <Text style={styles.paragraph}>
        Didukung <Text style={styles.boldText}>semangat belajar</Text>, <Text style={styles.boldText}>kemampuan berpikir logis</Text>, dan <Text style={styles.boldText}>memecahkan masalah</Text>, serta <Text style={styles.boldText}>antusiasme untuk terus mengembangkan kemampuan</Text> di lingkungan kerja.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.boldText}>Mari terhubung dan membangun solusi mobile yang bermanfaat bersama!</Text>
      </Text>
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
  },
  smallAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  authorName: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 15,
  },
  dotSeparator: {
    color: '#71767b',
    fontSize: 14,
  },
  dateText: {
    color: '#71767b',
    fontSize: 14,
  },
  greetingTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 16,
  },
  paragraph: {
    color: '#e7e9ea',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 16,
  },
  boldText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  bulletList: {
    marginBottom: 16,
    paddingLeft: 8,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  bulletDot: {
    color: '#e7e9ea',
    fontSize: 16,
    marginRight: 12,
    lineHeight: 24,
  },
  bulletText: {
    color: '#e7e9ea',
    fontSize: 15,
    lineHeight: 24,
    flex: 1,
  },
});