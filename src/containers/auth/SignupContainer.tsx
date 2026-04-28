import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { router } from 'expo-router';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { AuthInput } from '../../components/auth/AuthInput';
import { SocialButton } from '../../components/auth/SocialButton';
import { validationService } from '../../services/validationService';
import { useAuth } from '../../contexts/AuthContext';

export const SignupContainer: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ fullName: '', email: '', password: '' });
  const { signup, isLoading } = useAuth();

  const validateForm = (): boolean => {
    const nameError = validationService.validateName(fullName);
    const emailError = validationService.validateEmail(email);
    const passwordError = validationService.validatePassword(password);

    setErrors({
      fullName: nameError,
      email: emailError,
      password: passwordError,
    });

    return !nameError && !emailError && !passwordError;
  };

  const handleSignup = async () => {
    if (!validateForm()) return;

    try {
      await signup(fullName, email, password);
      // Navigate to todo list on success
      router.replace('/(tabs)');
    } catch (error) {
      Alert.alert('Error', error instanceof Error ? error.message : 'Signup failed');
    }
  };

  const handleSocialSignup = (provider: string) => {
    Alert.alert('Info', `${provider} signup coming soon!`);
  };

  return (
    <View style={styles.container}>
      <AuthHeader 
        title="Join TaskFlow" 
        subtitle="Elevate your daily focus and productivity."
      />

      <View style={styles.form}>
        <AuthInput
          label="Full Name"
          placeholder="Enter your name"
          value={fullName}
          onChangeText={setFullName}
          error={errors.fullName}
        />

        <AuthInput
          label="Email Address"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          error={errors.email}
        />

        <AuthInput
          label="Password"
          placeholder="Min. 8 characters"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          error={errors.password}
        />

        <Text style={styles.termsText}>
          By signing up, you agree to our Terms and Privacy Policy.
        </Text>

        <TouchableOpacity 
          style={styles.signupButton} 
          onPress={handleSignup}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#ffffff" />
          ) : (
            <Text style={styles.signupButtonText}>Create Account →</Text>
          )}
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>

        <SocialButton
          onPress={() => handleSocialSignup('Google')}
          icon="G"
          title="Continue with Google"
        />

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.loginLink}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
  },
  form: {
    marginTop: 20,
  },
  termsText: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
    marginTop: -10,
  },
  signupButton: {
    backgroundColor: '#6366f1',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  signupButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e7eb',
  },
  orText: {
    marginHorizontal: 16,
    color: '#9ca3af',
    fontSize: 14,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  loginText: {
    color: '#6b7280',
    fontSize: 14,
  },
  loginLink: {
    color: '#6366f1',
    fontSize: 14,
    fontWeight: '600',
  },
});