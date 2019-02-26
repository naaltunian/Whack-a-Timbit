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
        random: null,
        popUps: 0
    }

    randomTimbit = (i) => {     
        let game = setInterval(() => {
            let newRand =  Math.floor(Math.random() * 6);
            this.setState({ random: newRand, popUps: this.state.popUps + 1 });
            console.log(this.state.popUps);
        }, 800);
        if(this.state.popUps === 10) {
            clearInterval(game);
            this.setState({random: null});
        }
    }

    scoreUpdate = () => {
        this.setState({score: this.state.score + 1});
    }

    reset = () => {
        this.setState({ score: 0 });
    }
    render() {
        const { isShowing } = this.state;
        return(
            <div>
                <button style={{margin: "50px 50%"}} onClick={this.randomTimbit}>Start</button>
                <Score score={this.state.score} />
                <button style={{margin: "0 50%"}} onClick={this.reset}>Reset</button>
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