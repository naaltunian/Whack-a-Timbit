import React from 'react';
import hortonsLogo from './Assets/hortonsLogo.png';
import timbit from './Assets/timbit.png';

const center = {
    display: "flex",
    justifyContent: "center",
    flexDirection: 'column',
}

const text = {
    justifyContent: "center"
}

const Header = () => {
    return(
        <div style={center}>
            <img src={hortonsLogo} alt="Tim Hortons Logo" height="300px" width="400px" />
            <div style={text}>
                <h2>Proudly Presents</h2>
                <h3>Whack a...</h3>
            </div>
            <img src={timbit} height="300px" width="400px" alt="timbit" />
        </div>
    )
}

export default Header;