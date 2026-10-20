import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function RentalScreen({
  navigation,
  route,
}: any) {
  const car = route.params?.car;
  const name = route.params?.name || 'Driver';
  const email = route.params?.email || '';

  const [date, setDate] = useState('');
  const [days, setDays] = useState('1');

  const bookCar = () => {
    if (!date.trim() || !days.trim()) {
      Alert.alert(
        'Қате',
        'Күн мен жалға алу уақытын енгізіңіз'
      );
      return;
    }

    const numberOfDays = Number(days);

    if (isNaN(numberOfDays) || numberOfDays < 1) {
      Alert.alert(
        'Қате',
        'Күн саны дұрыс емес'
      );
      return;
    }

    navigation.navigate('Rentals', {
      name,
      email,
      newRental: {
        carName: car?.name || 'Car',
        date,
        days: numberOfDays,
        price: car?.price || '',
        icon: car?.icon || '🚗',
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.small}>BOOKING</Text>

      <Text style={styles.title}>
        Reserve your{'\n'}
        <Text style={styles.orange}>
          ride.
        </Text>
      </Text>

      <View style={styles.carCard}>
        <Text style={styles.icon}>
          {car?.icon || '🚗'}
        </Text>

        <View>
          <Text style={styles.carName}>
            {car?.name || 'Car'}
          </Text>

          <Text style={styles.price}>
            {car?.price || '0 ₸'} / day
          </Text>
        </View>
      </View>

      <Text style={styles.label}>
        START DATE
      </Text>

      <TextInput
        style={styles.input}
        placeholder="10.10.2026"
        placeholderTextColor="#555"
        value={date}
        onChangeText={setDate}
      />

      <Text style={styles.label}>
        NUMBER OF DAYS
      </Text>

      <TextInput
        style={styles.input}
        placeholder="3"
        placeholderTextColor="#555"
        keyboardType="numeric"
        value={days}
        onChangeText={setDays}
      />

      <View style={styles.info}>
        <Text style={styles.infoIcon}>!</Text>

        <Text style={styles.infoText}>
          A valid driver's license is required
          when picking up the car.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={bookCar}
      >
        <Text style={styles.buttonText}>
          CONFIRM BOOKING
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
    paddingTop: 30,
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
    fontSize: 39,
    fontWeight: '900',
    lineHeight: 44,
    marginTop: 8,
    marginBottom: 25,
  },

  orange: {
    color: '#ff6b00',
  },

  carCard: {
    backgroundColor: '#1b1b1b',
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#292929',
  },

  icon: {
    fontSize: 55,
    marginRight: 18,
  },

  carName: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '900',
  },

  price: {
    color: '#ff6b00',
    marginTop: 5,
    fontWeight: '800',
  },

  label: {
    color: '#666',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  input: {
    height: 54,
    backgroundColor: '#1b1b1b',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#292929',
    paddingHorizontal: 16,
    color: '#fff',
    marginBottom: 18,
  },

  info: {
    backgroundColor: '#24180f',
    borderRadius: 14,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#ff6b00',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 28,
    fontWeight: '900',
    marginRight: 12,
  },

  infoText: {
    color: '#a88a72',
    flex: 1,
    lineHeight: 18,
  },

  button: {
    height: 57,
    backgroundColor: '#ff6b00',
    borderRadius: 14,
    marginTop: 25,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
});