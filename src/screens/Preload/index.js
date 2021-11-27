import React, { useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { UserContext } from '../../contexts/UserContext';
import api from '../../services/api';

import { theme } from '../../global/theme';
import { Container, Loading } from './styles';

import Logo from '../../assets/logo.svg';

export default function Preload() {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      const res = await api.get('user', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data.user) {
        setTimeout(() => {
          userDispatch({
            type: 'setToken',
            payload: {
              token: token,
            },
          });
          userDispatch({
            type: 'setName',
            payload: {
              name: res.data.user.name,
            },
          });
          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: res.data.user.avatar,
            },
          });
          navigation.reset({
            routes: [{ name: 'MainTab' }],
          });
        }, 1000);
      }
    } else {
      setTimeout(() => {
        navigation.navigate('Login');
      }, 3000);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <Container>
      <Logo height="90" width="134" />
      <Loading size="large" color={theme.colors.primary} />
    </Container>
  );
}
