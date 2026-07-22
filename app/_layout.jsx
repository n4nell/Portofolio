import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView, Platform, useWindowDimensions } from 'react-native';
import { Slot, useRouter, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const RESUME_URL = 'https://drive.google.com/file/d/1xzH_s3KbD_MiXcB4COayKwNS49ehYeTx/view?usp=drivesdk';
const NAV_ITEMS = [
  { label: 'Tentang', path: '/' },
  { label: 'Pengalaman', path: '/experience' },
  { label: 'Keterampilan', path: '/skills' },
  { label: 'Portofolio', path: '/portfolio' },
];

export default function Layout() {
  const router = useRouter();
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const isMobile = width < 600;

  const openResume = () => Linking.openURL(RESUME_URL);
  
  const openAvatar = () => {
    const avatar = require('../assets/images/foto_formal.jpeg');
    const url = avatar.default || avatar.uri || avatar;
    Platform.OS === 'web' ? window.open(url, '_blank') : Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.mainWrapper}>
        
        <View style={[styles.banner, isMobile && styles.bannerMobile]}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200' }}
            style={styles.fullSize}
            resizeMode="cover"
          />
        </View>

        <View style={styles.profileSection}>
          
          <View style={[styles.avatarRow, isMobile && styles.avatarRowMobile]}>
            <TouchableOpacity activeOpacity={0.8} onPress={openAvatar} style={styles.avatarBorder}>
              <Image
                source={require('../assets/images/foto_formal.jpeg')}
                resizeMode="cover"
                style={[styles.avatar, isMobile ? styles.avatarMobile : styles.avatarDesktop]}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.resumeBtn} onPress={openResume}>
              <Text style={styles.resumeText}>Resume</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoBox}>
            <Text style={[styles.nameText, isMobile && styles.nameTextMobile]}>
              Khairin Naila Robiatul Adawiyah
            </Text>
            <Text style={styles.roleText}>Mobile Developer</Text>

            <View style={styles.metaRow}>
              <MetaItem icon="location-outline" text="Indonesia" />
              <MetaItem icon="calendar-outline" text="Joined Sept 2008" />
            </View>
          </View>

          <View style={styles.navbar}>
            {NAV_ITEMS.map((item) => (
              <NavButton 
                key={item.path}
                label={item.label}
                isActive={pathname === item.path}
                isMobile={isMobile}
                onPress={() => router.push(item.path)}
              />
            ))}
          </View>
        </View>

        <View style={styles.pageContent}>
          <Slot />
        </View>

      </View>
    </ScrollView>
  );
}

function MetaItem({ icon, text }) {
  return (
    <View style={styles.metaItem}>
      <Ionicons name={icon} size={15} color="#71767b" />
      <Text style={styles.metaText}>{text}</Text>
    </View>
  );
}

function NavButton({ label, isActive, isMobile, onPress }) {
  return (
    <TouchableOpacity 
      style={[styles.navItem, isActive && styles.activeNavItem]} 
      onPress={onPress}
    >
      <Text style={[
        styles.navText, 
        isMobile && styles.navTextMobile, 
        isActive && styles.activeNavText
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16181c',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  mainWrapper: {
    maxWidth: 800,
    width: '100%',
    alignSelf: 'center',
  },
  fullSize: {
    width: '100%',
    height: '100%',
  },

  banner: {
    width: '100%',
    height: 200,
    borderRadius: 4,
    overflow: 'hidden',
  },
  bannerMobile: {
    height: 140,
  },

  profileSection: {
    paddingHorizontal: 16,
  },
  avatarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: -60,
  },
  avatarRowMobile: {
    marginTop: -45,
  },
  avatarBorder: {
    padding: 3,
    backgroundColor: '#16181c',
    borderRadius: 80,
  },
  avatar: {
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  avatarDesktop: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  avatarMobile: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  resumeBtn: {
    backgroundColor: '#00b4d8',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginBottom: 5,
  },
  resumeText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 15,
  },

  infoBox: {
    marginTop: 12,
  },
  nameText: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 26,
    letterSpacing: 0.3,
  },
  nameTextMobile: {
    fontSize: 20,
  },
  roleText: {
    color: '#8f98a0',
    fontSize: 15,
    marginTop: 4,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
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
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#2f3336',
    marginTop: 20,
  },
  navItem: {
    paddingVertical: 12,
    borderBottomWidth: 3,
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
  navTextMobile: {
    fontSize: 13,
  },
  activeNavText: {
    color: '#ffffff',
  },

  pageContent: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});