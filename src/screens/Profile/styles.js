import styled from 'styled-components/native';
import { theme } from '../../global/theme';

export const Container = styled.View`
  flex: 1;
  padding: 34px 0px 34px 0px;
  background-color: ${theme.colors.secondary};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  flex: 1;
  width: 100%;
  padding: 0px 17px;
`;

export const AvatarArea = styled.View`
  height: 130px;
  width: 130px;
  background-color: ${theme.colors.secondary};
  border-radius: 70px;
  margin-bottom: 34px;
`;

export const Avatar = styled.Image`
  flex: 1;
  border-radius: 70px;
`;

export const Area = styled.View`
  width: 100%;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.secondary};
  padding: 17px;
  margin-bottom: 17px;
`;

export const Text = styled.Text`
  font-family: ${theme.fonts.text600};
  font-size: 14px;
  line-height: 12px;
  color: ${theme.colors.primary};
  padding: 17px 0px;
`;

export const TextArea = styled.Text`
  font-family: ${theme.fonts.text500};
  font-size: 14px;
  line-height: 12px;
  color: ${theme.colors.text1};
  padding: 17px 0px;
`;

export const CatalogedMoviesArea = styled.View`
  width: 100%;
  align-items: flex-start;
  background-color: ${theme.colors.secondary};
  padding: 17px;
  border-radius: 20px;
`;

export const HeaderCataloged = styled.View``;

export const CatalogedMoviesList = styled.FlatList`
  padding-bottom: 68px;
`;

export const LoadingArea = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const Loading = styled.ActivityIndicator``;

export const Refresh = styled.RefreshControl``;
