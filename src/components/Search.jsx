import React from 'react';

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className='Search'>
      <span className="iconify" data-inline="false" data-icon="bx:bx-search-alt" style={{ fontSize: '40px', color: '#61b15a' }}></span>
      <input type='text' value={search} ref={searchInput} onChange={handleSearch} placeholder='Busca tu personaje...' />
    </div>
  );
}
export default Search;