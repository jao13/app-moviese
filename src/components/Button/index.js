import React from 'react';
import styled from 'styled-components/native';

import { theme } from '../../global/theme';

export default function Button({ text, background, color, onPress, loading }) {
  return (
    <Container onPress={onPress} background={background} activeOpacity={0.7}>
      {loading === true ? (
        <Loading size="small" color={theme.colors.background} />
      ) : (
        <Title color={color}>{text}</Title>
      )}
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.background || theme.colors.primary};
  border-radius: 15px;
  border-top-right-radius: 0px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.text400};
  color: ${(props) => props.color || theme.colors.secondary};
`;

const Loading = styled.ActivityIndicator``;
