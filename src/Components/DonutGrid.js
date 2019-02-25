import React from 'react';
import bitBox from './Assets/bitBox.png';
import timbits from './Assets/timbits.png';
import Score from './Score';
// import Timbit from './Timbit';
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
        isShowing: false,
        score: 0,
        random: null,
        gridSize: 6,
        start: false,
    }

    randomTimbit = (i) => {     
        let newRand =  Math.floor(Math.random() * 6);
        this.setState({random: newRand})
    }

    scoreUpdate = () => {
        this.setState({score: this.state.score + 1})
    }

    // show = (random) => {
    //     console.log(this.props.value)
    //     if(this.props.value === random) {
    //         this.setState({isShowing: true});
    //         setInterval(() => this.setState({isShowing: false}), 1000);
    //     }
    // }
    // <Image key={...} isShowing={ index === showThisIndex ? true : false }
    render() {
        const { isShowing } = this.state;
        const { scoreUpdate } = this.scoreUpdate;
        return(
            <div>
                <button style={{margin: "50px 50%"}} onClick={this.randomTimbit}>Start</button>
                <Score score={this.state.score} />
                <div style={centered}>
                    <div style={grid}>
                        <Box randomTime={this.state.random} isShowing={isShowing} scoreUpdate={scoreUpdate} value={0} ref="box" show={this.show}/>
                        <Box randomTime={this.state.random} isShowing={isShowing} scoreUpdate={scoreUpdate} value={1} ref="box" show={this.show}/>
                        <Box randomTime={this.state.random} isShowing={isShowing} scoreUpdate={scoreUpdate} value={2} ref="box" show={this.show}/>
                        <Box randomTime={this.state.random} isShowing={isShowing} scoreUpdate={scoreUpdate} value={3} ref="box" show={this.show}/>
                        <Box randomTime={this.state.random} isShowing={isShowing} scoreUpdate={scoreUpdate} value={4} ref="box" show={this.show}/>
                        <Box randomTime={this.state.random} isShowing={isShowing} scoreUpdate={scoreUpdate} value={5} ref="box" show={this.show}/>
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