import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/theme';

export default function CardMovie({ data, dataProf, openModal }) {
  return (
    <CoverImage
      source={{
        uri: (data && data.i.imageUrl) || (dataProf && dataProf.cover),
      }}
      style={styles.box}
    >
      <Cover onPress={openModal} activeOpacity={0.8}>
        <MovieText>
          • {(data && data.q) || (dataProf && dataProf.type_movie) || 'Filme'} •
        </MovieText>
        <Title numberOfLines={2}>
          {(data && data.l) || (dataProf && dataProf.name)}
        </Title>
      </Cover>
    </CoverImage>
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

const CoverImage = styled.ImageBackground.attrs({
  imageStyle: {
    borderRadius: 15,
    borderTopRightRadius: 0,
  },
})`
  width: 140px;
  height: 180px;
  margin: 14px;
`;

const Cover = styled.TouchableOpacity`
  flex: 1;
  border-radius: 15px;
  border-top-right-radius: 0px;
  background-color: ${theme.colors.text1};
  align-items: center;
  justify-content: center;
  padding: 17px;
`;

const MovieText = styled.Text`
  font-family: ${theme.fonts.text300};
  font-size: 10px;
  line-height: 12px;
  text-transform: capitalize;
  color: ${theme.colors.secondary};
  margin-bottom: 5px;
`;

const Title = styled.Text`
  font-family: ${theme.fonts.text700};
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: ${theme.colors.secondary};
`;
