import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen({ navigation, route }: any) {
  const name = route.params?.name || 'Driver';
  const email = route.params?.email || '';

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.mini}>CARRENT</Text>
            <Text style={styles.hello}>
              Hello, {name}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.avatar}
            onPress={() =>
              navigation.navigate('Profile', {
                name,
                email,
              })
            }
          >
            <Text style={styles.avatarText}>
              {name.charAt(0).toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroSmall}>
            PREMIUM MOBILITY
          </Text>

          <Text style={styles.heroTitle}>
            Find your{'\n'}
            <Text style={styles.orange}>
              perfect ride.
            </Text>
          </Text>

          <Text style={styles.heroText}>
            Choose from our collection of premium cars
            and hit the road.
          </Text>

          <TouchableOpacity
            style={styles.heroButton}
            onPress={() =>
              navigation.navigate('Cars', {
                name,
                email,
              })
            }
          >
            <Text style={styles.heroButtonText}>
              EXPLORE CARS
            </Text>

            <Text style={styles.heroArrow}>→</Text>
          </TouchableOpacity>

          <Text style={styles.bigCar}>🚘</Text>
        </View>

        <Text style={styles.sectionTitle}>
          Your dashboard
        </Text>

        <View style={styles.grid}>
          <TouchableOpacity
            style={styles.statCard}
            onPress={() =>
              navigation.navigate('Cars', {
                name,
                email,
              })
            }
          >
            <Text style={styles.statIcon}>🚗</Text>
            <Text style={styles.statNumber}>05</Text>
            <Text style={styles.statText}>
              Cars available
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.statCard}
            onPress={() =>
              navigation.navigate('Rentals', {
                name,
                email,
              })
            }
          >
            <Text style={styles.statIcon}>📋</Text>
            <Text style={styles.statNumber}>01</Text>
            <Text style={styles.statText}>
              My bookings
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.bookingCard}
          onPress={() =>
            navigation.navigate('Rentals', {
              name,
              email,
            })
          }
        >
          <View>
            <Text style={styles.bookingSmall}>
              QUICK ACCESS
            </Text>

            <Text style={styles.bookingTitle}>
              My bookings
            </Text>

            <Text style={styles.bookingText}>
              Check your current rentals
            </Text>
          </View>

          <Text style={styles.bookingArrow}>→</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    paddingHorizontal: 20,
    paddingTop: 35,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },

  mini: {
    color: '#ff6b00',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 3,
  },

  hello: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 5,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#ff6b00',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '900',
  },

  hero: {
    backgroundColor: '#1b1b1b',
    borderRadius: 25,
    padding: 25,
    minHeight: 310,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#292929',
  },

  heroSmall: {
    color: '#888',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
  },

  heroTitle: {
    color: '#fff',
    fontSize: 38,
    fontWeight: '900',
    lineHeight: 42,
    marginTop: 15,
  },

  orange: {
    color: '#ff6b00',
  },

  heroText: {
    color: '#777',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 12,
    width: '75%',
  },

  heroButton: {
    backgroundColor: '#ff6b00',
    borderRadius: 12,
    paddingHorizontal: 18,
    height: 48,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 180,
  },

  heroButtonText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '900',
  },

  heroArrow: {
    color: '#fff',
    fontSize: 20,
  },

  bigCar: {
    position: 'absolute',
    right: -5,
    bottom: 15,
    fontSize: 85,
    opacity: 0.35,
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 30,
    marginBottom: 15,
  },

  grid: {
    flexDirection: 'row',
    gap: 12,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#181818',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#292929',
  },

  statIcon: {
    fontSize: 25,
  },

  statNumber: {
    color: '#fff',
    fontSize: 27,
    fontWeight: '900',
    marginTop: 15,
  },

  statText: {
    color: '#666',
    fontSize: 12,
    marginTop: 3,
  },

  bookingCard: {
    backgroundColor: '#ff6b00',
    borderRadius: 20,
    padding: 20,
    marginTop: 14,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bookingSmall: {
    color: '#ffd2b3',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
  },

  bookingTitle: {
    color: '#fff',
    fontSize: 21,
    fontWeight: '900',
    marginTop: 5,
  },

  bookingText: {
    color: '#ffe0cc',
    marginTop: 4,
  },

  bookingArrow: {
    color: '#fff',
    fontSize: 30,
  },
});