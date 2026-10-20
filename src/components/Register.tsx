import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function RegisterScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Қате', 'Барлық жолды толтырыңыз');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Қате', 'Email дұрыс енгізілмеген');
      return;
    }

    if (password.length < 4) {
      Alert.alert(
        'Қате',
        'Құпия сөз кемінде 4 таңба болуы керек'
      );
      return;
    }

    navigation.replace('Home', {
      name: name.trim(),
      email: email.trim(),
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.back}>← BACK</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.orange}>JOIN CARRENT</Text>

        <Text style={styles.title}>
          Create your{'\n'}
          account.
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>FULL NAME</Text>

          <TextInput
            style={styles.input}
            placeholder="Your name"
            placeholderTextColor="#666"
            value={name}
            onChangeText={setName}
          />

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
            placeholder="Create password"
            placeholderTextColor="#666"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={register}
          >
            <Text style={styles.buttonText}>
              CREATE ACCOUNT
            </Text>

            <Text style={styles.arrow}>→</Text>
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

  orange: {
    color: '#ff6b00',
    fontWeight: '900',
    letterSpacing: 3,
    fontSize: 12,
  },

  title: {
    color: '#fff',
    fontSize: 43,
    fontWeight: '900',
    lineHeight: 48,
    marginTop: 10,
    marginBottom: 30,
  },

  form: {
    backgroundColor: '#181818',
    borderRadius: 22,
    padding: 22,
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

  button: {
    height: 56,
    backgroundColor: '#ff6b00',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 5,
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