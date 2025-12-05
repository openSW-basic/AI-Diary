import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import WordMarkLogo from '../../assets/logos/logo-wordmark.svg';
import AppScreen from '../../components/layout/AppScreen';
import {AuthStackParamList} from '../../navigation/AuthStack';

const WelcomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList, 'Welcome'>>();

  return (
    <AppScreen style={styles.container}>
      <View style={styles.centerBox}>
        <WordMarkLogo />
        <Text style={styles.welcomeText}>AI와의 통화로, 감정을 기록해요</Text>
      </View>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('Login')}
        activeOpacity={0.8}>
        <Text style={styles.startButtonText}>시작하기</Text>
      </TouchableOpacity>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  centerBox: {
    marginTop: 212,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
  },
  welcomeText: {
    fontSize: 14,
    color: 'rgba(35, 35, 35, 0.84)',
    textAlign: 'center',
    fontWeight: '600',
  },
  startButton: {
    width: '100%',
    backgroundColor: '#232323',
    borderRadius: 12,
    paddingVertical: 18,
    marginBottom: 132,
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
