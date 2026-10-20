import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function RentalsScreen({
  navigation,
  route,
}: any) {
  const name = route.params?.name || 'Driver';
  const email = route.params?.email || '';
  const newRental = route.params?.newRental;

  const rentals = newRental ? [newRental] : [];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.small}>
        YOUR GARAGE
      </Text>

      <Text style={styles.title}>
        My bookings
      </Text>

      {rentals.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyIcon}>◇</Text>

          <Text style={styles.emptyTitle}>
            No bookings yet
          </Text>

          <Text style={styles.emptyText}>
            Your rented cars will appear here.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Cars', {
                name,
                email,
              })
            }
          >
            <Text style={styles.buttonText}>
              FIND A CAR →
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {rentals.map((rental: any, index: number) => (
            <View style={styles.card} key={index}>
              <View style={styles.top}>
                <Text style={styles.carIcon}>
                  {rental.icon}
                </Text>

                <View style={styles.active}>
                  <View style={styles.dot} />

                  <Text style={styles.activeText}>
                    ACTIVE
                  </Text>
                </View>
              </View>

              <Text style={styles.carName}>
                {rental.carName}
              </Text>

              <View style={styles.line} />

              <View style={styles.row}>
                <Text style={styles.label}>
                  START DATE
                </Text>

                <Text style={styles.value}>
                  {rental.date}
                </Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>
                  DURATION
                </Text>

                <Text style={styles.value}>
                  {rental.days} DAYS
                </Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>
                  DAILY RATE
                </Text>

                <Text style={styles.price}>
                  {rental.price}
                </Text>
              </View>
            </View>
          ))}

          <TouchableOpacity
            style={styles.outline}
            onPress={() =>
              navigation.navigate('Cars', {
                name,
                email,
              })
            }
          >
            <Text style={styles.outlineText}>
              + RENT ANOTHER CAR
            </Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
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
    fontSize: 32,
    fontWeight: '900',
    marginTop: 7,
    marginBottom: 25,
  },

  empty: {
    backgroundColor: '#181818',
    borderRadius: 22,
    padding: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#292929',
    marginTop: 30,
  },

  emptyIcon: {
    color: '#ff6b00',
    fontSize: 65,
  },

  emptyTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '900',
    marginTop: 15,
  },

  emptyText: {
    color: '#666',
    marginTop: 7,
    textAlign: 'center',
  },

  button: {
    height: 52,
    backgroundColor: '#ff6b00',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    marginTop: 22,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '900',
    letterSpacing: 1,
  },

  card: {
    backgroundColor: '#181818',
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: '#292929',
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  carIcon: {
    fontSize: 60,
  },

  active: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#102417',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#4ade80',
    marginRight: 6,
  },

  activeText: {
    color: '#4ade80',
    fontSize: 9,
    fontWeight: '900',
  },

  carName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '900',
    marginTop: 12,
  },

  line: {
    height: 1,
    backgroundColor: '#292929',
    marginVertical: 18,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 13,
  },

  label: {
    color: '#555',
    fontSize: 10,
    fontWeight: '900',
  },

  value: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '800',
  },

  price: {
    color: '#ff6b00',
    fontSize: 13,
    fontWeight: '900',
  },

  outline: {
    height: 52,
    borderWidth: 1,
    borderColor: '#ff6b00',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },

  outlineText: {
    color: '#ff6b00',
    fontWeight: '900',
    letterSpacing: 1,
  },
});