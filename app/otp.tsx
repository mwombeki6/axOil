import React, { useState, useRef, useEffect } from 'react';
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

interface OTPVerificationScreenProps {
  phoneNumber: string;
  onVerify: (otp: string) => void;
  onResendCode: () => void;
  onChangeNumber: () => void;
}

const OTPVerificationScreen: React.FC<OTPVerificationScreenProps> = ({
  phoneNumber,
  onVerify,
  onResendCode,
  onChangeNumber
}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState('');
  
  const inputRefs = useRef<Array<TextInput | null>>([]);
  
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);
  
  const handleOtpChange = (value: string, index: number) => {
    // Update the OTP array
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
    
    // Check if all digits are filled
    if (newOtp.every(digit => digit !== '') && newOtp.join('').length === 6) {
      handleVerify(newOtp.join(''));
    }
  };
  
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  
  const handleVerify = (otpCode: string) => {
    if (otpCode.length === 6) {
      setError('');
      onVerify(otpCode);
    } else {
      setError('Please enter a valid 6-digit code');
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Verification code</Text>
          <Text style={styles.subtitle}>
            Enter the 6-digit code sent to {phoneNumber}
          </Text>
          
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => { inputRefs.current[index] = ref; }}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                autoFocus={index === 0}
              />
            ))}
          </View>
          
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          
          <View style={styles.actionsContainer}>
            <TouchableOpacity 
              style={styles.textButton} 
              onPress={onChangeNumber}
            >
              <Text style={styles.textButtonContent}>Change number</Text>
            </TouchableOpacity>
            
            {timer > 0 ? (
              <Text style={styles.timerText}>Resend in {timer}s</Text>
            ) : (
              <TouchableOpacity 
                style={styles.textButton} 
                onPress={onResendCode}
              >
                <Text style={styles.textButtonContent}>Resend code</Text>
              </TouchableOpacity>
            )}
          </View>
          
          <TouchableOpacity 
            style={[
              styles.button, 
              otp.join('').length !== 6 ? styles.buttonDisabled : null
            ]}
            disabled={otp.join('').length !== 6}
            onPress={() => handleVerify(otp.join(''))}
          >
            <Text style={styles.buttonText}>Verify</Text>
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
  