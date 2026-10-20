import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Қате', 'Email және құпия сөзді енгізіңіз');
      return;
    }

    const name = email.trim().split('@')[0] || 'Қолданушы';

    navigation.replace('Home', {
      name,
      email: email.trim(),
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>CAR</Text>
          <Text style={styles.logoOrange}>RENT</Text>
        </View>

        <Text style={styles.car}>◢</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.smallTitle}>WELCOME BACK</Text>

        <Text style={styles.title}>
          Drive your{'\n'}
          <Text style={styles.orange}>dream.</Text>
        </Text>

        <Text style={styles.description}>
          Premium cars. Simple booking.
          {'\n'}
          Your journey starts here.
        </Text>

        <View style={styles.form}>
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

          <Text style={styles.label}>PASSWORD</Text>

          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#666"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.forgot}>
              Forgot password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={login}
          >
            <Text style={styles.buttonText}>
              SIGN IN
            </Text>

            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.register}>
          <Text style={styles.registerText}>
            New to CarRent?
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.registerLink}>
              Create account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    paddingHorizontal: 25,
    paddingTop: 45,
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logoContainer: {
    flexDirection: 'row',
  },

  logo: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 2,
  },

  logoOrange: {
    color: '#ff6b00',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 2,
  },

  car: {
    color: '#ff6b00',
    fontSize: 32,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  smallTitle: {
    color: '#ff6b00',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 3,
    marginBottom: 12,
  },

  title: {
    color: '#ffffff',
    fontSize: 46,
    fontWeight: '900',
    lineHeight: 50,
  },

  orange: {
    color: '#ff6b00',
  },

  description: {
    color: '#777',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 15,
    marginBottom: 35,
  },

  form: {
    backgroundColor: '#181818',
    borderRadius: 22,
    padding: 22,
    borderWidth: 1,
    borderColor: '#292929',
  },

  label: {
    color: '#777',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  input: {
    height: 52,
    backgroundColor: '#222',
    borderRadius: 12,
    paddingHorizontal: 16,
    color: '#fff',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#2d2d2d',
  },

  forgot: {
    color: '#ff6b00',
    textAlign: 'right',
    marginBottom: 22,
    fontSize: 13,
    fontWeight: '700',
  },

  button: {
    height: 56,
    backgroundColor: '#ff6b00',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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

  register: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },

  registerText: {
    color: '#666',
  },

  registerLink: {
    color: '#ff6b00',
    fontWeight: '800',
    marginLeft: 6,
  },
});