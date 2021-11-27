import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/theme';

import EyeIcon from '../../assets/eye.svg';

export default function CardHome({ openModal, data }) {
  return (
    <Container style={styles.box}>
      <Cover>
        <CoverImage source={{ uri: data.cover }} />
      </Cover>
      <InfoCard>
        <Title numberOfLines={2}>{data.name}</Title>
        <Button onPress={openModal} style={styles.box}>
          <EyeIcon />
        </Button>
      </InfoCard>
    </Container>
  );
}

const styles = StyleSheet.create({
  box: {
    shadowColor: 'rgba(146, 146, 146, 0.7)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,

    elevation: 5,
  },
});

const Container = styled.View`
  width: 100%;
  padding: 17px;
  align-items: center;
  background-color: ${theme.colors.secondary};
  margin-bottom: 17px;
  border-radius: 15px;
  border-top-right-radius: 0px;
  flex-direction: row;
  border: 1px solid ${theme.colors.text2};
`;

const Cover = styled.View`
  border-radius: 10px;
  border-top-right-radius: 0px;
  margin-right: 17px;
`;

const CoverImage = styled.Image`
  width: 70px;
  height: 98px;
  border-radius: 10px;
  border-top-right-radius: 0px;
  background-color: ${theme.colors.text1};
`;

const InfoCard = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text`
  flex: 1;
  font-family: ${theme.fonts.text700};
  font-size: 18px;
  color: ${theme.colors.primary};
  margin-right: 10px;
`;

const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background: ${theme.colors.secondary};
  align-items: center;
  justify-content: center;
  border-top-right-radius: 0px;
  border-radius: 5px;
`;
