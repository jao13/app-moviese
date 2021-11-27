import styled from 'styled-components/native';
import { theme } from '../theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  background-color: ${theme.colors.primary};
`;

export const Header = styled.View`
  flex: 1;
  width: 100%;
  padding: 0px 34px;
  justify-content: center;
`;

export const TextArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.marginTop || 0}px;
`;

export const Title = styled.Text`
  font-size: ${(props) => props.font || 34}px;
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.secondary};
  text-align: center;
`;

export const Text = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: ${theme.colors.text2};
`;

export const InputsButtonContainer = styled.KeyboardAvoidingView`
  flex: ${(props) => props.flex || 2};
  max-height: ${(props) => props.maxHeight || 470}px;
  width: 100%;
  background-color: ${theme.colors.secondary};
  border-top-left-radius: 75px;
  padding: ${34*2}px 34px 34px 40px;
  justify-content: space-between;
`;

export const InputsButtonArea = styled.View``;

export const AccountButton = styled.TouchableOpacity`

`;

export const AccountText = styled.Text`
  font-size: 12px;
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.primary};
  text-align: center;
`;