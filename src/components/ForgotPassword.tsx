import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ForgotPasswordScreen({ navigation }: any) {
  const [email, setEmail] = useState('');

  const resetPassword = () => {
    if (!email.trim()) {
      Alert.alert('Қате', 'Email енгізіңіз');
      return;
    }

    Alert.alert(
      'Дайын!',
      'Қалпына келтіру сілтемесі email-ге жіберілді.'
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.back}>← BACK</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.icon}>↻</Text>

        <Text style={styles.orange}>
          RESET PASSWORD
        </Text>

        <Text style={styles.title}>
          Forgot your{'\n'}
          password?
        </Text>

        <Text style={styles.description}>
          Enter your email and we'll send you a link
          to reset your password.
        </Text>

        <Text style={styles.label}>EMAIL</Text>

        <TextInput
          style={styles.input}
          placeholder="your@email.com"
          placeholderTextColor="#666"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={resetPassword}
        >
          <Text style={styles.buttonText}>
            SEND LINK →
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    padding: 25,
    paddingTop: 45,
  },

  back: {
    color: '#888',
    fontWeight: '800',
    fontSize: 12,
    letterSpacing: 1,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  icon: {
    color: '#ff6b00',
    fontSize: 45,
    marginBottom: 15,
  },

  orange: {
    color: '#ff6b00',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 3,
  },

  title: {
    color: '#fff',
    fontSize: 43,
    fontWeight: '900',
    lineHeight: 48,
    marginTop: 10,
  },

  description: {
    color: '#777',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 15,
    marginBottom: 30,
  },

  label: {
    color: '#777',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  input: {
    height: 55,
    backgroundColor: '#1b1b1b',
    borderRadius: 13,
    paddingHorizontal: 16,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#2d2d2d',
  },

  button: {
    height: 55,
    backgroundColor: '#ff6b00',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '900',
    letterSpacing: 1,
  },
});