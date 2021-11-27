import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/theme';

export default function InputSign({
  Icon,
  nameInput,
  password,
  placeholder,
  size,
  onChangeText,
  value,
}) {
  return (
    <Container style={styles.box}>
      <Header>
        <Icon
          width={size ? 22 : 19}
          height={size ? 17 : 15}
          fill={theme.colors.primary}
        />
        <NameInput>{nameInput}</NameInput>
      </Header>
      <Input
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.text1}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  box: {
    shadowColor: 'rgba(146, 146, 146, 0.6)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 10,

    elevation: 5,
  },
});

const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
  border-top-right-radius: 0px;
  border-radius: 15px;
  background-color: ${theme.colors.secondary};
  padding: 15px;
  flex-direction: column;
`;

const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const NameInput = styled.Text`
  font-size: 15px;
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.primary};
  margin-left: 15px;
`;

const Input = styled.TextInput`
  padding-left: 35px;
  color: ${theme.colors.text1};
  font-size: 14px;
  font-family: ${theme.fonts.text300};
`;
