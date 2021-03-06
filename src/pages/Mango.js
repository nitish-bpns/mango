import React, { Component, useState } from 'react'
// import BooleanExp from '../components/flag/BooleanExp';
// import StringVariation from '../components/string/StringVariation';
// import BooleanExp from '../components/flag/BooleanExp';
// import NumberFlag from '../components/flag/NumberFlag';
// import JsonFlag from '../components/flag/JsonFlag';
import FlagList from '../components/FlagList';
import styles from './../styles/home.module.css';
// import List from '../components/List';
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
// import { XIcon } from '@heroicons/react/outline'
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RuleNew from '../components/RuleNew';
import RuleNewAdd from '../components/RuleNewAdd';
import Targeting from './users/Targeting';
import Variation from './users/Variation';
import MemberTable from './AccountSetting/MemberTable';
// import InvitePane from './AccountSetting/InvitePane';


function Mango() {

    // const [inputText, setInputText] = useState("");
    // let inputHandler = (e) => {
    //     //convert input text to lower case
    //     var lowerCase = e.target.value.toLowerCase();
    //     setInputText(lowerCase);
    // };

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    // const [open, setOpen] = useState(false)

    // const [state, setState] = useState({
    //     isPaneOpen: false,
    //     isPaneOpenLeft: false,
    // });

    return (
        <div className='mango' >
            For experiment purpose currently
            <div className='bg-blue-100 px-5'>



                {/* <Link to='/mango/flagList'>
                click for flaglist
            </Link>
            <br />
            <Link to='/mango/ruleNew'>
                click for ruleNew
            </Link> */}

                <div className="mt-1">
                    <input

                        className="mt-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1 rounded"
                        type='text'
                        placeholder='Search here'
                        onChange={inputHandler}
                    />
                </div>
                < br />
                <MemberTable />
                {/* <Targeting />

                <Variation />


                <Routes>
                    <Route path='/flagList' element={<FlagList />} />
                    <Route path='/ruleNew' element={<RuleNew />} />
                </Routes> */}

            </div >
        </div >
    )
}

export default Mango