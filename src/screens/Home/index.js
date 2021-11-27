import React, { useContext, useEffect, useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { UserContext } from '../../contexts/UserContext';
import api from '../../services/api';

import { theme } from '../../global/theme';
import { Container, LoadingArea, Loading, ListCards } from './styles';

import Header from '../../components/Header';
import CardHome from '../../components/CardHome';
import Modal from '../../components/Modal';

export default function Home() {
  const { state: user } = useContext(UserContext);

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [numCols, setNumCols] = useState(2);

  const getMovies = async () => {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };

    const res = await api.get('movies', config).then().catch();

    setMovies(res.data.reverse());
    setLoading(false);
  };

  const renderItem = ({ item }) => (
    <CardHome
      data={item}
      openModal={() => {
        setMovie(item);
        setVisible(true);
      }}
    />
  );

  const render = useMemo(() => renderItem, [movies]);

  useEffect(() => {
    getMovies();
  }, [movies]);

  return (
    <Container>
      <StatusBar backgroundColor={theme.colors.secondary} style="dark" />
      <Header />
      {loading && (
        <LoadingArea>
          <Loading size="large" color={theme.colors.primary} />
        </LoadingArea>
      )}
      <ListCards
        data={movies}
        numColumns={numCols}
        renderItem={render}
        showsVerticalScrollIndicator={false}
      />
      <Modal
        dataHome={movie}
        onClose={() => {
          setVisible(false);
        }}
        visible={visible}
        button
      />
    </Container>
  );
}
