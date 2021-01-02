import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react';
import useCharacters from '../hooks/useCharacters';
import Search from './Search';

const initialState = {
  favorites: []
}

const API = 'https://rickandmortyapi.com/api/character'


const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
}

const Characters = () => {

  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const characters = useCharacters(API);

  const handleClick = (favorite) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value)
  // }
  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, [])

  // const filteredUsers = characters.filter(user => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // })

  const filteredUsers = useMemo(() =>
    characters.filter(user => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),
    [characters, search]
  )

  return (
    <section>
      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

      <div className='Favorites'>
        <h2>Tus personajes favoritos son:</h2>
        {favorites.favorites.map(favorite => (
          <li key={favorite.id}>
            {favorite.name}
          </li>
        ))}
      </div>

      <div className='Characters' >
        {filteredUsers.map(character => (
          <div className='Character-card' key={character.id}>
            <img className='Character-card--img' src={character.image} alt={character.name} />
            <h2 className='Character-card--title' >{character.name}</h2>
            <ul className='Character-card--list'>
              <li>Status: {character.status}</li>
              <li>Specie: {character.species + ' ' + character.type}</li>
              <li>Gender: {character.gender}</li>
            </ul>
            <button className='Characters-card--btn' type='button' onClick={() => handleClick(character)}>💚 Agregar a favoritos</button>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Characters;