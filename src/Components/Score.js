import React from 'react';

const style = {
    margin: "0 50vw"
}

const Score = (props) => {
    return(
        <div>
            <p>High Score: {props.highScore}</p>
            <p>Score: {props.score}</p>
        </div>
    )
}

export default Score;