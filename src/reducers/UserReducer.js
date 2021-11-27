export const initialState = {
  token: '',
  name: '',
  avatar: '',
  numMovies: '',
  movies: [],
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'setToken':
      return { ...state, token: action.payload.token };
    case 'setName':
      return { ...state, name: action.payload.name };
    case 'setAvatar':
      return { ...state, avatar: action.payload.avatar };
    case 'setNumMovies':
      return { ...state, numMovies: action.payload.numMovies };
    case 'setMovies':
      return { ...state, movies: action.payload.movies };
    default:
      return state;
  }
};
