import styled from 'styled-components/native';
import { theme } from '../../global/theme';

export const Container = styled.View`
  flex: 1;
  padding-top: 34px;
  align-items: center;
  justify-content: flex-start;
  background-color: ${theme.colors.secondary};
`;

export const LoadingArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator``;

export const ListCards = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 68,
  },
})`
  width: 100%;
  background-color: transparent;
  padding: 0px 17px;
`;
