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

    // show = () => {
    //     console.log("Show got called from Box");
    //     if(this.props.value === this.props.randomTime) {
    //         this.setState({isShowing: true});
    //         // setInterval(() => this.setState({isShowing: false}), 1000);
    //     }
    // }

    componentDidUpdate(prevProps) {
        if(prevProps === this.props.randomTime) {
            this.setState({isShowing: true});
            // setInterval(() => this.setState({isShowing: false}), 1000);
        }
    }

    // componentWillReceiveProps(prevProps, prevState) {
    //     console.log('new props')
    //     if(prevProps !== this.props.randomTime) {
    //         this.setState({isShowing: true})
    //     }
    // }

    render() {
        console.log(this.props.value)
        return(
            <div>
                {this.props.random === this.props.value ? <img onClick={this.props.scoreUpdate} src={timbits} alt="timbit" /> : <img src={bitBox} alt="box" />}
            </div>
        )
    }
}

export default Box;