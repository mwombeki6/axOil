import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

interface UsernameInputScreenProps {
  onSubmit: (username: string) => void;
}

export const UsernameInputScreen: React.FC<UsernameInputScreenProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const validateUsername = (name: string) => {
    // Username validation - min 3 chars, alphanumeric + underscore
    return /^[a-zA-Z0-9_]{3,}$/.test(name);
  };

  const handleSubmit = () => {
    if (validateUsername(username)) {
      setError('');
      onSubmit(username);
    } else {
      setError('Username must be at least 3 characters (letters, numbers and underscore only)');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Choose a username</Text>
          <Text style={styles.subtitle}>
            This is how you'll appear to other users
          </Text>
          
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
          
          <TouchableOpacity 
            style={[
              styles.button, 
              !username ? styles.buttonDisabled : null
            ]}
            disabled={!username}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    keyboardAvoidingView: {
      flex: 1,
    },
    contentContainer: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      marginBottom: 32,
      textAlign: 'center',
    },
    inputContainer: {
      marginBottom: 24,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      padding: 16,
      fontSize: 16,
    },
    errorText: {
      color: 'red',
      marginTop: 8,
    },
    button: {
      backgroundColor: '#007AFF',
      borderRadius: 8,
      padding: 16,
      alignItems: 'center',
    },
    buttonDisabled: {
      backgroundColor: '#CCCCCC',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    termsText: {
      marginTop: 16,
      textAlign: 'center',
      color: '#666',
      fontSize: 12,
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 24,
    },
    otpInput: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      width: 48,
      height: 48,
      fontSize: 24,
      textAlign: 'center',
    },
    actionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 24,
    },
    textButton: {
      padding: 8,
    },
    textButtonContent: {
      color: '#007AFF',
      fontSize: 14,
    },
    timerText: {
      color: '#666',
      fontSize: 14,
      padding: 8,
    },
  });