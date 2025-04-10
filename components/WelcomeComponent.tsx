import React, { useEffect, useState } from 'react';
import { View, Text, Image, StatusBar, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import { Feather } from '@expo/vector-icons';
import { Skeleton } from 'moti/skeleton';

import { COLORS } from '@/constants/theme';
import PrimaryButton from '@/components/station/PrimaryButton';
import SecondaryButton from '@/components/station/SecondaryButton';

const WelcomeScreen: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 justify-center px-6">
        <Skeleton show={loading} height={96} width={96} radius="round" colorMode="light">
          {loading ? null : (
            <Image
              source={require('@/assets/logo.png')}
              className="h-24 w-24 self-center mb-8"
              resizeMode="contain"
            />
          )}
        </Skeleton>

        <Skeleton show={loading} height={32} width="80%" radius={8} colorMode="light">
          {loading ? null : (
            <Text className="text-4xl font-bold text-center text-gray-800 mb-3">
              FuelGo
            </Text>
          )}
        </Skeleton>

        <Skeleton show={loading} height={24} width="90%" radius={6} colorMode="light">
          {loading ? null : (
            <Text className="text-gray-500 text-center text-lg mb-10">
              Purchase fuel in advance, skip the lines
            </Text>
          )}
        </Skeleton>

        <Skeleton show={loading} height={250} width="100%" radius={12} colorMode="light">
          {loading ? null : (
            <LottieView
              source={require('@/assets/fuel-animation.json')}
              autoPlay
              loop
              style={{ height: 250, alignSelf: 'center' }}
            />
          )}
        </Skeleton>

        {!loading && (
          <View className="mt-12">
            <PrimaryButton title="Get Started" onPress={() => router.push('/auth/phone')} />
            <SecondaryButton
              title="Learn More"
              onPress={() => {}}
              icon={<Feather name="info" size={18} color={COLORS.primary} />}
              style={{ marginTop: 12 }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
