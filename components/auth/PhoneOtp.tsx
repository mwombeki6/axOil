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

interface PhoneInputScreenProps {
    onSubmit: (phoneNumber: string) => void;
}

export const PhoneInputScreen: React.FC<PhoneInputScreenProps> = ({ onSubmit }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    const validatePhoneNumber = (number: string) => {
        // Simple validation - at least 10 digits
        return number.replace(/\D/g, '').length >= 10;
    };

    const handleSubmit = () => {
        if (validatePhoneNumber(phoneNumber)) {
            setError('');
            onSubmit(phoneNumber);
        } else {
            setError('Please enter a valid phone number');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingView}
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Enter your phone number</Text>
                    <Text style={styles.subtitle}>
                        We'll send you a verification code to continue
                    </Text>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="+255 (555) 555-555"
                            keyboardType="phone-pad"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            autoFocus
                        />
                        {error ? <Text style={styles.errorText}>{error}</Text> : null}
                    </View>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            !phoneNumber ? styles.buttonDisabled : null
                        ]}
                        disabled={!phoneNumber}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>

                    <Text style={styles.termsText}>
                        By continuing, you agree to our Terms of Service and Privacy Policy
                    </Text>
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
