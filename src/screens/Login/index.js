import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';

import { UserContext } from '../../contexts/UserContext';
import api from '../../services/api';

import { theme } from '../../global/theme';
import {
  Container,
  Header,
  Title,
  TextArea,
  Text,
  InputsButtonContainer,
  InputsButtonArea,
  AccountButton,
  AccountText,
} from '../../global/styles/styles';

import SignInput from '../../components/SignInput';
import Button from '../../components/Button';

import Email from '../../assets/email.svg';
import Lock from '../../assets/lock.svg';

export default function Login({ navigation }) {
  const { dispatch: userDispatch, state: user } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMsg, setAlertMsg] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    if (email && password) {
      const res = await api.post('user/auth', { email, password });

      if (res.data.token) {
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
        userDispatch({
          type: 'setToken',
          payload: {
            token: res.data.token,
          },
        });
        await AsyncStorage.setItem('token', res.data.token);
        setLoading(false);
        navigation.reset({
          routes: [{ name: 'MainTab' }],
        });
      } else {
        setAlert(true);
        setAlertMsg(`${res.data.error} :(`);
        setAlertTitle('Erro');
        setLoading(false);
      }
    } else {
      setAlert(true);
      setAlertMsg('Preencha todos os campos =D');
      setAlertTitle('Campos vazios');
      setLoading(false);
    }
    setLoading(false);
  };

  const hideAlert = () => {
    setAlert(false);
  };

  return (
    <Container>
      <StatusBar style="light" backgroundColor={'transparent'} />
      <Header>
        <TextArea>
          <Title>Login</Title>
          <Text>
            Por favor, entre com seu email e senha {`\n`} para fazer login.
          </Text>
        </TextArea>
      </Header>
      <InputsButtonContainer>
        <InputsButtonArea>
          <SignInput
            onChangeText={(t) => setEmail(t)}
            value={email}
            nameInput="Seu email"
            placeholder="Endereço de email"
            Icon={Email}
          />
          <SignInput
            onChangeText={(t) => setPassword(t)}
            value={password}
            password
            nameInput="Sua senha"
            placeholder="Palavra-passe"
            size
            Icon={Lock}
          />
          <Button
            loading={loading}
            onPress={async () => handleLogin()}
            text="Login"
          />
        </InputsButtonArea>
        <AccountButton
          onPress={() => navigation.navigate('SignUp')}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <AccountText>Ainda não tem uma conta? Cadastre-se</AccountText>
        </AccountButton>
        <AwesomeAlert
          show={alert}
          showProgress={false}
          title={alertTitle}
          message={alertMsg}
          closeOnTouchOutside
          showConfirmButton
          confirmText="Pode deixar!"
          confirmButtonColor={theme.colors.primary}
          onConfirmPressed={() => {
            hideAlert();
          }}
          contentContainerStyle={styles.container}
          titleStyle={styles.title}
          messageStyle={styles.message}
          confirmButtonStyle={styles.button}
          confirmButtonTextStyle={styles.titleButton}
        />
      </InputsButtonContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 175,
    borderRadius: 20,
    backgroundColor: theme.colors.background,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: theme.fonts.text600,
    fontSize: 20,
    color: theme.colors.primary,
  },
  message: {
    fontFamily: theme.fonts.text400,
    fontSize: 14,
    color: theme.colors.lightGray4,
  },
  button: {
    height: 35,
    paddingHorizontal: 35,
    borderRadius: 10,
  },
  titleButton: {
    fontFamily: theme.fonts.text400,
    fontSize: 14,
    color: theme.colors.white,
  },
});
