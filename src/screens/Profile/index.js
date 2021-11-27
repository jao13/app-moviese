import React, { useState, useContext, useEffect, useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { UserContext } from '../../contexts/UserContext';
import api from '../../services/api';

import { theme } from '../../global/theme';
import {
  Container,
  Content,
  AvatarArea,
  Avatar,
  Area,
  Text,
  TextArea,
  CatalogedMoviesArea,
  HeaderCataloged,
  CatalogedMoviesList,
  LoadingArea,
  Loading,
} from './styles';

import Header from '../../components/Header';
import CardMovie from '../../components/CardMovie';
import Modal from '../../components/Modal';

export default function Profile() {
  const { dispatch: userDispatch, state: user } = useContext(UserContext);

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const getCatalogedMovies = async () => {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };

    const res = await api.get('user/movies', config);

    if (res.data) {
      setMovies(res.data.reverse());
      const numCatalogedMovies = res.data.length;

      userDispatch({
        type: 'setNumMovies',
        payload: {
          numMovies: numCatalogedMovies,
        },
      });
    }
  };

  const renderItem = ({ item }) => (
    <CardMovie
      dataProf={item}
      openModal={() => {
        setVisible(true);
        setMovie(item);
      }}
    />
  );

  const render = useMemo(() => renderItem, [movies]);

  useEffect(() => {
    setMovies([]);
    movies ? setLoading(false) : setLoading(true);
    getCatalogedMovies();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <AvatarArea style={styles.box}>
          <Avatar
            source={{
              uri:
                (user && user.avatar) ||
                'https://res.cloudinary.com/dceutjord/image/upload/v1632783473/default_uummgx.png',
            }}
          />
        </AvatarArea>
        <Area style={styles.box}>
          <Text>Nome: </Text>
          <TextArea>{user.name}</TextArea>
        </Area>
        <Area style={styles.box}>
          <Text>Filmes catalogados: </Text>
          <TextArea>{user.numMovies}</TextArea>
        </Area>
        <CatalogedMoviesArea style={styles.box}>
          <HeaderCataloged>
            <Text>Seus filmes catalogados: </Text>
          </HeaderCataloged>
          {loading && (
            <LoadingArea>
              <Loading size="large" color={theme.colors.primary} />
            </LoadingArea>
          )}
          <CatalogedMoviesList
            data={movies}
            horizontal
            renderItem={render}
            showsHorizontalScrollIndicator={false}
          />
        </CatalogedMoviesArea>
      </Content>
      <Modal
        dataHome={movie}
        button
        onClose={() => setVisible(false)}
        visible={visible}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  box: {
    shadowColor: 'rgba(146, 146, 146, 0.7)',
    shadowOffset: {
      width: 50,
      height: 60,
    },
    shadowOpacity: 0.5,
    shadowRadius: 50,

    elevation: 5,
  },
});
