import React from 'react';
import bitBox from './Assets/bitBox.png';
import timbits from './Assets/timbits.png';

const Box = (props) => {
    return(
        <div>
        {props.random === props.value ? <img onClick={props.scoreUpdate} src={timbits} alt="timbit" /> : <img src={bitBox} alt="box" />}
        </div>
    )
}

export default Box;