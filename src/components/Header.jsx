import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext)

    const handleClick = () => {
        setDarkMode(!darkMode);
    }
    return (
        <header>
            <h1> Rick and Morty</h1>
            <button className='header--btn' type='button' onClick={handleClick}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </header>
    );
}
export default Header;