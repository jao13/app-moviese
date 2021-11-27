import React, { useMemo, useState } from 'react';
import { StyleSheet, Keyboard } from 'react-native';
import axios from 'axios';

import GLOBAL from '../../global/Globals';

import { theme } from '../../global/theme';
import {
  Container,
  Header,
  Title,
  SearchArea,
  SearchInput,
  SearchButton,
  ListCards,
  ListCardsArea,
  Area,
  Loading,
} from './styles';

import CardMovie from '../../components/CardMovie';
import Modal from '../../components/Modal';

import SearchIcon from '../../assets/searchIcon.svg';

export default function Search() {
  const [visible, setVisible] = useState(false);
  const [numCols, setNumCols] = useState(2);
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState({
    i: {
      imageUrl: null,
    },
  });
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const options = {
    method: 'GET',
    url: GLOBAL.IMDB_URL,
    params: { q: query },
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': GLOBAL.KEY,
    },
  };

  const handleSearch = async () => {
    setMovies([]);
    setLoading(true);

    if (!query) {
      alert('Digite algo para buscar!');
      setLoading(false);
    } else {
      Keyboard.dismiss();
      await axios
        .request(options)
        .then((response) => {
          setMovies(response.data);
          setLoading(false);
        })
        .catch((error) => {
          alert('Erro: ', error);
        });
    }
  };

  const renderItem = ({ item }) => (
    <CardMovie
      data={item}
      openModal={async () => {
        setMovie(item);
        setVisible(true);
      }}
    />
  );

  const render = useMemo(() => renderItem, [movies]);

  return (
    <Container>
      <Header>
        <Title>Encontre qualquer{`\n`}filme que você deseja</Title>
      </Header>
      <SearchArea style={styles.box}>
        <SearchInput
          placeholderTextColor={theme.colors.text1}
          placeholder="Nome do filme"
          value={query}
          onChangeText={(t) => setQuery(t)}
          onSubmitEditing={() => handleSearch()}
        />
        <SearchButton onPress={() => handleSearch()} activeOpacity={0.7}>
          <SearchIcon />
        </SearchButton>
      </SearchArea>
      <ListCardsArea>
        {loading && (
          <Area>
            <Loading size="large" color={theme.colors.primary} />
          </Area>
        )}
        <ListCards
          data={movies.d}
          numColumns={numCols}
          renderItem={render}
          showsVerticalScrollIndicator={false}
        />
      </ListCardsArea>
      <Modal
        data={movie}
        onClose={() => {
          setVisible(false);
        }}
        visible={visible}
      />
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
