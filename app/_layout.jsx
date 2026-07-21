import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView, Platform } from 'react-native';
import { Slot, useRouter, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  const router = useRouter();
  const pathname = usePathname();

  const RESUME_DRIVE_URL = 'https://drive.google.com/file/d/1xzH_s3KbD_MiXcB4COayKwNS49ehYeTx/view?usp=drivesdk';

  const openResume = () => {
    Linking.openURL(RESUME_DRIVE_URL);
  };

  const openAvatarImage = () => {
    const avatarSource = require('../assets/images/foto_formal.jpeg');
    
    let imageUrl = '';
    if (typeof avatarSource === 'string') {
      imageUrl = avatarSource;
    } else if (typeof avatarSource === 'object') {
      imageUrl = avatarSource.default || avatarSource.uri || avatarSource;
    }

    if (imageUrl) {
      if (Platform.OS === 'web') {
        window.open(imageUrl, '_blank');
      } else {
        Linking.openURL(imageUrl);
      }
    }
  };

  const navItems = [
    { label: 'Tentang', path: '/' },
    { label: 'Pengalaman', path: '/experience' },
    { label: 'Keterampilan', path: '/skills' },
    { label: 'Portofolio', path: '/portfolio' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      
      <View style={styles.mainWrapper}>
        <View style={styles.bannerContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200' }}
            style={styles.bannerImage}
          />
        </View>

        <View style={styles.profileSection}>
          <View style={styles.avatarResumeRow}>
            <View style={styles.avatarContainer}>
              <TouchableOpacity activeOpacity={0.8} onPress={openAvatarImage}>
                <Image
                  source={require('../assets/images/foto_formal.jpeg')}
                  style={styles.avatar}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.resumeBtn} onPress={openResume}>
              <Text style={styles.resumeBtnText}>Resume</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.nameRow}>
              <Text style={styles.nameText}>Khairin Naila Robiatul Adawiyah</Text>
            </View>

            <Text style={styles.roleText}>Mobile Developer</Text>

            <View style={styles.metaRow}>
              <View style={styles.metaItem}>
                <Ionicons name="location-outline" size={16} color="#71767b" />
                <Text style={styles.metaText}>Indonesia</Text>
              </View>

              <View style={[styles.metaItem, { marginLeft: 15 }]}>
                <Ionicons name="calendar-outline" size={15} color="#71767b" />
                <Text style={styles.metaText}>Joined Sept 2008</Text>
              </View>
            </View>
          </View>

          <View style={styles.navbar}>
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <TouchableOpacity
                  key={item.path}
                  style={[styles.navItem, isActive && styles.activeNavItem]}
                  onPress={() => router.push(item.path)}
                >
                  <Text style={[styles.navText, isActive && styles.activeNavText]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.pageContent}>
          <Slot />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16181c',
  },
  topHeaderBar: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  topHeaderInner: {
    maxWidth: 900,
    width: '100%',
    alignSelf: 'center',
  },
  mainWrapper: {
    maxWidth: 800,
    width: '100%',
    alignSelf: 'center',
  },
  bannerContainer: {
    height: 200,
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileSection: {
    paddingHorizontal: 20,
  },
  avatarResumeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: -60,
  },
  avatarContainer: {
    padding: 3,
    backgroundColor: '#16181c',
    borderRadius: 80,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  resumeBtn: {
    backgroundColor: '#00b4d8',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginBottom: 10,
  },
  resumeBtnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 15,
  },
  infoContainer: {
    marginTop: 12,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  nameText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  roleText: {
    color: '#8f98a0',
    fontSize: 15,
    marginTop: 4,
    fontWeight: '400',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    color: '#71767b',
    fontSize: 14,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#2f3336',
    marginTop: 25,
  },
  navItem: {
    paddingVertical: 12,
    borderBottomWidth: 4,
    borderBottomColor: 'transparent',
  },
  activeNavItem: {
    borderBottomColor: '#1d9bf0',
  },
  navText: {
    color: '#71767b',
    fontWeight: '700',
    fontSize: 15,
  },
  activeNavText: {
    color: '#ffffff',
  },
  pageContent: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});