import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const cars = [
  {
    id: 1,
    name: 'Toyota Camry',
    type: 'SEDAN',
    price: '18 000 ₸',
    rating: '4.8',
    icon: '🚗',
    seats: '5',
    transmission: 'AUTO',
  },
  {
    id: 2,
    name: 'Toyota RAV4',
    type: 'SUV',
    price: '22 000 ₸',
    rating: '4.9',
    icon: '🚙',
    seats: '5',
    transmission: 'AUTO',
  },
  {
    id: 3,
    name: 'Mercedes C-Class',
    type: 'PREMIUM',
    price: '35 000 ₸',
    rating: '4.9',
    icon: '🚘',
    seats: '5',
    transmission: 'AUTO',
  },
  {
    id: 4,
    name: 'BMW 5 Series',
    type: 'PREMIUM',
    price: '40 000 ₸',
    rating: '4.8',
    icon: '🚘',
    seats: '5',
    transmission: 'AUTO',
  },
  {
    id: 5,
    name: 'Hyundai Tucson',
    type: 'SUV',
    price: '20 000 ₸',
    rating: '4.7',
    icon: '🚙',
    seats: '5',
    transmission: 'AUTO',
  },
];

export default function CarsScreen({
  navigation,
  route,
}: any) {
  const name = route.params?.name || 'Driver';
  const email = route.params?.email || '';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.small}>
            OUR COLLECTION
          </Text>

          <Text style={styles.title}>
            Choose your car
          </Text>
        </View>

        <Text style={styles.count}>05</Text>
      </View>

      {cars.map((car) => (
        <View key={car.id} style={styles.card}>
          <View style={styles.image}>
            <Text style={styles.car}>
              {car.icon}
            </Text>

            <View style={styles.typeBadge}>
              <Text style={styles.type}>
                {car.type}
              </Text>
            </View>
          </View>

          <View style={styles.info}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>
                {car.name}
              </Text>

              <Text style={styles.rating}>
                ★ {car.rating}
              </Text>
            </View>

            <View style={styles.features}>
              <Text style={styles.feature}>
                👤 {car.seats}
              </Text>

              <Text style={styles.feature}>
                ⚙ {car.transmission}
              </Text>
            </View>

            <View style={styles.bottom}>
              <View>
                <Text style={styles.price}>
                  {car.price}
                </Text>

                <Text style={styles.per}>
                  PER DAY
                </Text>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.navigate('CarDetails', {
                    car,
                    name,
                    email,
                  })
                }
              >
                <Text style={styles.buttonText}>
                  VIEW →
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20,
  },

  small: {
    color: '#ff6b00',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '900',
    marginTop: 6,
  },

  count: {
    color: '#555',
    fontSize: 28,
    fontWeight: '900',
  },

  card: {
    backgroundColor: '#181818',
    borderRadius: 20,
    marginBottom: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#292929',
  },

  image: {
    height: 155,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },

  car: {
    fontSize: 90,
  },

  typeBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#ff6b00',
    borderRadius: 6,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },

  type: {
    color: '#fff',
    fontSize: 9,
    fontWeight: '900',
  },

  info: {
    padding: 17,
  },

  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  name: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '900',
  },

  rating: {
    color: '#ff9b5c',
    fontWeight: '800',
  },

  features: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },

  feature: {
    color: '#777',
    fontSize: 12,
  },

  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 17,
  },

  price: {
    color: '#ff6b00',
    fontSize: 19,
    fontWeight: '900',
  },

  per: {
    color: '#555',
    fontSize: 9,
    fontWeight: '800',
    marginTop: 2,
  },

  button: {
    backgroundColor: '#292929',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 11,
  },

  buttonText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '900',
  },
});