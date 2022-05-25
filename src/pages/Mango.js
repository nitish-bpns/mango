import React, { useState } from 'react'
import BooleanExp from '../components/flag/BooleanExp';
// import StringVariation from '../components/string/StringVariation';
// import BooleanExp from '../components/flag/BooleanExp';
// import NumberFlag from '../components/flag/NumberFlag';
// import JsonFlag from '../components/flag/JsonFlag';
import FlagList from '../components/FlagList';
import styles from './../styles/home.module.css';
// import List from '../components/List';


function Mango() {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };


    return (
        <div className='mango' >
            <h3>
                Mango</h3>
            {/* <input style={{ backgroundColor: 'grey' }}
                type='text'
                rows={1}
                onChange={inputHandler}
            ></input> */}
            {/* <StringVariation /> */}
            {/* <BooleanExp /> */}
            {/* <NumberFlag /> */}
            {/* <JsonFlag /> */}
            {/* <FlagList /> */}
            {/* <List input={inputText} /> */}
        </div>
    )
}

export default Mango