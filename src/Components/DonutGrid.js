import React from 'react';
import bitBox from './Assets/bitBox.png';
import timbits from './Assets/timbits.png';

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
        isShowing: false
    }

    randomTimbit = () => {
        let counter = 0;
        while(counter < 10) {
            let random = Math.floor(Math.random() * 6);
            this.show();
        }
    }

    show = () => {
        this.setState({isShowing: true});
        setInterval(() => this.setState({isShowing: false}), 1000);
    }

    render() {
        return(
            <div>
                <button style={{margin: '0 auto', marginBottom: "50px"}} onClick={this.show}>Start</button> 
                <div style={centered}>
                    <div style={grid}>
                        {this.state.isShowing ? <img src={timbits} alt="timbit" /> : <img src={bitBox} alt="box" />}
                        {this.state.isShowing ? <img src={timbits} alt="timbit" /> : <img src={bitBox} alt="box" />}
                        {this.state.isShowing ? <img src={timbits} alt="timbit" /> : <img src={bitBox} alt="box" />}
                        {this.state.isShowing ? <img src={timbits} alt="timbit" /> : <img src={bitBox} alt="box" />}
                        {this.state.isShowing ? <img src={timbits} alt="timbit" /> : <img src={bitBox} alt="box" />}
                        {this.state.isShowing ? <img src={timbits} alt="timbit" /> : <img src={bitBox} alt="box" />}
                    </div>
                </div>
            </div>
        )
    }
}

export default DonutGrid;