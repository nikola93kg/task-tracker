import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

function Header({ onAdd, showAdd }) {

    return (
        <header className='header'>
            <h1>Task tracker</h1>
            <Button
                color={`${showAdd ? '#4e7d96' : '#ff844b'}`}
                text={`${showAdd ? 'Close' : 'Add'}`}
                onClick={onAdd} />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header