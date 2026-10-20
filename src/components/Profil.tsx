import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProfileScreen({
  navigation,
  route,
}: any) {
  const name = route.params?.name || 'Driver';
  const email = route.params?.email || '';

  const logout = () => {
    Alert.alert(
      'Logout',
      'Аккаунттан шығуға сенімдісіз бе?',
      [
        {
          text: 'CANCEL',
          style: 'cancel',
        },
        {
          text: 'LOG OUT',
          onPress: () => navigation.replace('Login'),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.small}>
        ACCOUNT
      </Text>

      <Text style={styles.title}>
        Profile
      </Text>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {name.charAt(0).toUpperCase()}
          </Text>
        </View>

        <Text style={styles.name}>
          {name}
        </Text>

        <Text style={styles.email}>
          {email}
        </Text>

        <View style={styles.member}>
          <View style={styles.dot} />

          <Text style={styles.memberText}>
            PREMIUM MEMBER
          </Text>
        </View>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.item}
          onPress={() =>
            navigation.navigate('Rentals', {
              name,
              email,
            })
          }
        >
          <Text style={styles.itemIcon}>
            ▣
          </Text>

          <View>
            <Text style={styles.itemTitle}>
              My bookings
            </Text>

            <Text style={styles.itemSub}>
              View your rentals
            </Text>
          </View>

          <Text style={styles.arrow}>
            →
          </Text>
        </TouchableOpacity>

        <View style={styles.item}>
          <Text style={styles.itemIcon}>
            @
          </Text>

          <View>
            <Text style={styles.itemTitle}>
              Email address
            </Text>

            <Text style={styles.itemSub}>
              {email}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.logout}
        onPress={logout}
      >
        <Text style={styles.logoutText}>
          LOG OUT
        </Text>
      </TouchableOpacity>

      <Text style={styles.version}>
        CARRENT • PREMIUM MOBILITY
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    padding: 20,
    paddingTop: 45,
  },

  small: {
    color: '#ff6b00',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 10,
  },

  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '900',
    marginTop: 7,
    marginBottom: 22,
  },

  profileCard: {
    backgroundColor: '#181818',
    borderRadius: 22,
    padding: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#292929',
  },

  avatar: {
    width: 85,
    height: 85,
    borderRadius: 43,
    backgroundColor: '#ff6b00',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '900',
  },

  name: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '900',
    marginTop: 15,
  },

  email: {
    color: '#666',
    marginTop: 5,
  },

  member: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#25170d',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 13,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#ff6b00',
    marginRight: 6,
  },

  memberText: {
    color: '#ff8a42',
    fontSize: 9,
    fontWeight: '900',
  },

  menu: {
    backgroundColor: '#181818',
    borderRadius: 20,
    marginTop: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#292929',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#292929',
  },

  itemIcon: {
    color: '#ff6b00',
    fontSize: 24,
    width: 45,
  },

  itemTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '800',
  },

  itemSub: {
    color: '#666',
    marginTop: 4,
    fontSize: 12,
  },

  arrow: {
    marginLeft: 'auto',
    color: '#666',
    fontSize: 22,
  },

  logout: {
    height: 52,
    borderWidth: 1,
    borderColor: '#3a2420',
    backgroundColor: '#1a1211',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  logoutText: {
    color: '#ff5c4d',
    fontWeight: '900',
    letterSpacing: 1,
  },

  version: {
    color: '#333',
    textAlign: 'center',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginTop: 20,
  },
});