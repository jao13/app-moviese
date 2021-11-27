import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import styled from 'styled-components/native';

import api from '../../services/api';

import { theme } from '../../global/theme';

import Button from '../Button';

export default function Modal({ visible, onClose, data, dataHome, button }) {
  const [alert, setAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMsg, setAlertMsg] = useState('');

  const handleCatalog = async () => {
    const token = await AsyncStorage.getItem('token');

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      name: data.l,
      description: data.s,
      cover: data.i.imageUrl,
      type_movie: (data && data.q) || 'Filme',
    };

    const res = await api.post('movie', bodyParameters, config).then().catch();

    if (res.data) {
      setAlert(true);
      setAlertMsg(`${res.data.name} catalogado :)`);
      setAlertTitle('Filme catalogado');
    } else {
      setAlert(true);
      setAlertMsg(`${res.data.name} já foi catalogado :(`);
      setAlertTitle('Filme já catalogado');
    }
  };

  const hideAlert = () => {
    setAlert(false);
  };

  return (
    <Container animationType="slide" transparent visible={visible}>
      <Background
        source={{
          uri: (data ? data.i.imageUrl : null) || (dataHome && dataHome.cover),
        }}
      >
        <Content>
          <TextModal>
            <MovieText>
              •{' '}
              {(data && data.q) || (dataHome && dataHome.type_movie) || 'Filme'}
              •
            </MovieText>
            <Title numberOfLines={2}>
              {(data && data.l) || (dataHome && dataHome.name)}
            </Title>
            <Description numberOfLines={10}>
              {(data && data.s) || (dataHome && dataHome.description)}
            </Description>
          </TextModal>
          {!button && (
            <Button
              onPress={() => handleCatalog()}
              background={theme.colors.secondary}
              color={theme.colors.primary}
              text="Catalogar Filme"
            />
          )}
        </Content>
      </Background>
      <ModalClose onPress={onClose}>
        <ModalBack />
      </ModalClose>
      <AwesomeAlert
        show={alert}
        showProgress={false}
        title={alertTitle}
        message={alertMsg}
        closeOnTouchOutside
        showConfirmButton
        confirmText="Beleza!"
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

const Container = styled.Modal`
  width: 100%;
  height: 700px;
`;

const Background = styled.ImageBackground.attrs({
  imageStyle: {
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
})`
  flex: 1;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
`;

const Content = styled.View`
  flex: 1;
  background-color: ${theme.colors.text3};
  align-items: center;
  justify-content: space-evenly;
  padding: 34px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

const TextModal = styled.View`
  margin: 85px 0px;
`;

const MovieText = styled.Text`
  font-family: ${theme.fonts.text500};
  font-size: 14px;
  text-align: center;
  text-transform: capitalize;
  color: ${theme.colors.secondary};
  margin-top: 17px;
`;

const Title = styled.Text`
  font-family: ${theme.fonts.text700};
  font-size: 32px;
  text-align: center;
  line-height: 35px;
  text-transform: uppercase;
  color: ${theme.colors.secondary};
  margin: 17px 0px;
`;

const Description = styled.Text`
  font-family: ${theme.fonts.text300};
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: ${theme.colors.secondary};
`;

const ModalBack = styled.View`
  background-color: ${theme.colors.text3};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const ModalClose = styled.TouchableWithoutFeedback``;
