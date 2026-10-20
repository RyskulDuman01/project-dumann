import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CarDetailsScreen({
  navigation,
  route,
}: any) {
  const car = route.params?.car;
  const name = route.params?.name || 'Driver';
  const email = route.params?.email || '';

  if (!car) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>
          Car not found
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Text style={styles.car}>
          {car.icon}
        </Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {car.type}
          </Text>
        </View>
      </View>

      <Text style={styles.name}>
        {car.name}
      </Text>

      <View style={styles.ratingRow}>
        <Text style={styles.rating}>
          ★ {car.rating}
        </Text>

        <Text style={styles.available}>
          AVAILABLE NOW
        </Text>
      </View>

      <View style={styles.specs}>
        <View style={styles.spec}>
          <Text style={styles.icon}>👤</Text>
          <Text style={styles.specTitle}>Seats</Text>
          <Text style={styles.specValue}>
            {car.seats}
          </Text>
        </View>

        <View style={styles.spec}>
          <Text style={styles.icon}>⚙</Text>
          <Text style={styles.specTitle}>
            Gearbox
          </Text>
          <Text style={styles.specValue}>
            {car.transmission}
          </Text>
        </View>

        <View style={styles.spec}>
          <Text style={styles.icon}>⛽</Text>
          <Text style={styles.specTitle}>Fuel</Text>
          <Text style={styles.specValue}>
            PETROL
          </Text>
        </View>
      </View>

      <View style={styles.priceBox}>
        <View>
          <Text style={styles.priceLabel}>
            DAILY RATE
          </Text>

          <Text style={styles.price}>
            {car.price}
          </Text>
        </View>

        <Text style={styles.per}>
          / DAY
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Rental', {
            car,
            name,
            email,
          })
        }
      >
        <Text style={styles.buttonText}>
          BOOK THIS CAR
        </Text>

        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    padding: 20,
    paddingTop: 25,
  },

  image: {
    height: 230,
    backgroundColor: '#1c1c1c',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  car: {
    fontSize: 120,
  },

  badge: {
    position: 'absolute',
    left: 15,
    top: 15,
    backgroundColor: '#ff6b00',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 7,
  },

  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '900',
  },

  name: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '900',
    marginTop: 22,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  rating: {
    color: '#ff9b5c',
    fontWeight: '900',
    fontSize: 16,
  },

  available: {
    color: '#4ade80',
    fontSize: 10,
    fontWeight: '900',
    marginLeft: 15,
  },

  specs: {
    flexDirection: 'row',
    backgroundColor: '#181818',
    borderRadius: 18,
    marginTop: 25,
    padding: 18,
    justifyContent: 'space-between',
  },

  spec: {
    alignItems: 'center',
    flex: 1,
  },

  icon: {
    fontSize: 22,
  },

  specTitle: {
    color: '#555',
    fontSize: 10,
    marginTop: 7,
  },

  specValue: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 12,
    marginTop: 3,
  },

  priceBox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 25,
  },

  priceLabel: {
    color: '#555',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },

  price: {
    color: '#ff6b00',
    fontSize: 28,
    fontWeight: '900',
    marginTop: 3,
  },

  per: {
    color: '#666',
    fontSize: 11,
    marginLeft: 8,
    marginBottom: 5,
  },

  button: {
    height: 57,
    backgroundColor: '#ff6b00',
    borderRadius: 14,
    marginTop: 25,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '900',
    letterSpacing: 1,
  },

  arrow: {
    color: '#fff',
    fontSize: 25,
  },

  error: {
    color: '#fff',
  },
});