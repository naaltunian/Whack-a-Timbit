import React from 'react';
import bitBox from './Assets/bitBox.png';
import timbits from './Assets/timbits.png';
import Score from './Score';
// import Timbit from './Timbit';
// import Box from './Box';

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
        gridHeight: 3,
        gridWidth: 3
    }

    randomTimbit = () => {
        let score = 0;
        // while(counter < 10) {
        //     let random = Math.floor(Math.random() * 6);
        //     this.show();
        // }
        for(let i = 0; i < 10; i++) {
            this.show();
            console.log(i);
        }
    }

    scoreUpdate = () => {
        this.setState({score: this.state.score + 1})
    }

    show = () => {
        this.setState({isShowing: true});
        setInterval(() => this.setState({isShowing: false}), 1000);
    }

    render() {
        return(
            <div>
                <button style={{margin: "50px 50%"}} onClick={this.randomTimbit}>Start</button> 
                <Score score={this.state.score} />
                <div style={centered}>
                    <div style={grid}>
                        {this.state.isShowing ? <img onClick={this.scoreUpdate} src={timbits} alt="timbit" /> : <img src={bitBox} alt="box" />}
                        {this.state.isShowing ? <img onClick={this.scoreUpdate} src={timbits} alt="timbit" /> : <img src={bitBox} alt="box" />}
                        {this.state.isShowing ? <img onClick={this.scoreUpdate} src={timbits} alt="timbit" /> : <img src={bitBox} alt="box" />}
                        {this.state.isShowing ? <img onClick={this.scoreUpdate} src={timbits} alt="timbit" /> : <img src={bitBox} alt="box" />}
                        {this.state.isShowing ? <img onClick={this.scoreUpdate} src={timbits} alt="timbit" /> : <img src={bitBox} alt="box" />}
                        {this.state.isShowing ? <img onClick={this.scoreUpdate} src={timbits} alt="timbit" /> : <img src={bitBox} alt="box" />}
                    </div>
                </div>
            </div>
        )
    }
}

export default DonutGrid;