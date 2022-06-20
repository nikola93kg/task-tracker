import React from 'react';

const Alert = ({ msg, type }) => {
    return (
        <div className={`notification ${type}`}>
            <button className='delete'></button>
            {msg}
        </div>
    );
}

export default Alert;
