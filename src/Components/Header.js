import React from 'react';
import hortonsLogo from './Assets/hortonsLogo.png';
import timbit from './Assets/timbit.png';

const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'column'
}

const text = {
    justifyContent: "center"
}

const Header = () => {
    return(
        <div style={center}>
            <img src={hortonsLogo} alt="Tim Hortons Logo" height="300px" width="400px" />
                <h2>Presents</h2>
                <h3>Whack a...</h3>
            <img src={timbit} height="300px" width="400px" alt="timbit" />
        </div>
    )
}

export default Header;