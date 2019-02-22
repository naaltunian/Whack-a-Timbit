import React from 'react';

const Score = (props) => {
    return(
        <div style={{margin: "0 50%"}}>
            <p>Score: {props.score}</p>
        </div>
    )
}

export default Score;