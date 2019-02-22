import React from 'react';
import bitBox from './Assets/bitBox.png';
import timbits from './Assets/timbits.png';

// const Box = (props) => {
//     return(
//         <div>
//             {props.isShowing ? <img onClick={props.scoreUpdate} src={timbits} alt="timbit" /> : <img src={bitBox} alt="box" />}
//         </div>
//     )
// }

class Box extends React.Component {

    state = {
        isShowing: false
    }

    render() {
        return(
            <div>
            {this.state.isShowing ? <img onClick={this.props.scoreUpdate} src={timbits} alt="timbit" /> : <img src={bitBox} alt="box" />}
            </div>
        )
    }
}

export default Box;