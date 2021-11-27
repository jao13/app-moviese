import styled from 'styled-components/native';
import { theme } from '../../global/theme';

export const Container = styled.View`
  flex: 1;
  padding: 68px 17px 0px 17px;
  background-color: ${theme.colors.secondary};
`;

export const Header = styled.View`
  width: 100%;
  margin-bottom: 34px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.text600};
  font-size: 22px;
  line-height: 33px;
  color: ${theme.colors.primary};
`;

export const SearchArea = styled.View`
  height: 55px;
  width: 100%;
  background-color: ${theme.colors.secondary};
  border-radius: 15px;
  flex-direction: row;
  border: 1px solid ${theme.colors.text2};
  margin-bottom: 34px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-family: ${theme.fonts.text300};
  font-size: 13px;
  color: ${theme.colors.text1};
  padding: 10px;
`;

export const SearchButton = styled.TouchableOpacity`
  height: 100%;
  width: 60px;
  background-color: ${theme.colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

export const ListCards = styled.FlatList.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 100,
  },
})`
  flex: 1;
`;

export const ListCardsArea = styled.View`
  flex: 1;
`;
export const Area = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator``;
