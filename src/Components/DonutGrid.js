import React from 'react';
import Score from './Score';
import Box from './Box';

const grid = {
    display: 'grid',
    gridTemplateColumns: "1fr 1fr 1fr",
    columnGap: '100px',
    rowGap: '10rem'
}

const centered = {
    display: 'flex',
    justifyContent: 'center'
}

class DonutGrid extends React.Component {

    state = {
        score: 0,
        highScore: 0,
        random: null,
        popUps: 0
    }

    randomTimbit = (i) => {     
         let game = setInterval(() => {
            let newRand =  Math.floor(Math.random() * 6);
            this.setState({ random: newRand, popUps: this.state.popUps + 1 });
            console.log(this.state.popUps);
            if(this.state.popUps === 11) {
                clearInterval(game);
                if(this.state.score > this.state.highScore) {
                    this.setState({ highScore: this.state.score })
                }
                this.setState({random: null, score: 0, popUps: 0});
            }
        }, 800);
    }

    scoreUpdate = () => {
        this.setState({score: this.state.score + 1});
    }

    reset = () => {
        this.setState({ score: 0, highScore: 0 });
    }

    render() {
        const { score, highScore } = this.state;
        return(
            <div>
                <span style={centered} className="game-btns">
                    <button onClick={this.randomTimbit}>Start</button>
                    <button onClick={this.reset}>Reset</button>
                </span>
                <span style={centered}>
                    <Score score={score} highScore={highScore} />
                </span>
                <div style={centered}>
                    <div style={grid}>
                        <Box random={this.state.random} scoreUpdate={this.scoreUpdate} value={0} />
                        <Box random={this.state.random} scoreUpdate={this.scoreUpdate} value={1} />
                        <Box random={this.state.random} scoreUpdate={this.scoreUpdate} value={2} />
                        <Box random={this.state.random} scoreUpdate={this.scoreUpdate} value={3} />
                        <Box random={this.state.random} scoreUpdate={this.scoreUpdate} value={4} />
                        <Box random={this.state.random} scoreUpdate={this.scoreUpdate} value={5} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DonutGrid;

// {this.state.gridSize.map((image, i) => {
//     return <Box key={i} isShowing={this.state.isShowing} scoreUpdate={this.scoreUpdate} />
// })}