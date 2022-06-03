import React, { useState } from 'react';
import './../../styles/ruleNew.css';
import styles from './../../styles/addUser.module.css';


function NumberFlag() {

    const [stringList, setstringList] = useState([
        {
            variationStrOne: "",
            variationStrTwo: "",
            descriptionNum: "",
        },
        {
            variationStrOne: "",
            variationStrTwo: "",
            descriptionNum: "",
        },
    ]);

    const [optionStrList, setoptionStrList] = useState([
        {
            optionStr: "",
        }
    ]);

    const handleChangeStr = (e, index) => {
        const { name, value } = e.target;

        const list = [...stringList];
        list[index][name] = value;
        setstringList(list);

        const optionStr = [...optionStrList];
        optionStr[index][name] = value;
        setoptionStrList(optionStr);
    }

    const handleAddstring = () => {
        setstringList([...stringList, { variationStrOne: "", variationStrTwo: "", descriptionNum: "" }]);
        setoptionStrList([...optionStrList, { optionStr: "", }])
    }

    const handleremovestring = index => {
        const list = [...stringList];
        list.splice(index, 1);
        setstringList(list);

        const optionStr = [...optionStrList];
        list.optionStr(index, 1);
        setoptionStrList(optionStr)
    }

    return (
        <div>
            {stringList.map((item, i) => {

                return (
                    <div key={i}  >
                        <div className='rule-box-sti'>
                            <div className='rule-fld1'>
                                <label>Variation {i + 1}</label>
                                <input
                                    type="number"
                                    name='variationStrOne'
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1.5"
                                    value={item.variationStrOne}
                                    onChange={e => handleChangeStr(e, i)}
                                >
                                </input>
                            </div>

                            <div className='rule-fld1'>
                                <label>Name</label>
                                <input
                                    type="text"
                                    name='variationStrTwo'
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                    value={item.variationStrTwo}
                                    onChange={e => handleChangeStr(e, i)}
                                />


                            </div>

                            <div className='rule-fld3'>
                                <label>Description (optional)</label>
                                <input
                                    type="text"
                                    name='descriptionNum'
                                    placeholder='Enter some value'
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                    value={item.descriptionNum}
                                    onChange={e => handleChangeStr(e, i)}
                                />
                            </div>

                            <div className='rem-rule-btn-sti'>
                                {
                                    // stringList.length - 1 === i &&
                                    // stringList.length !== 1 &&
                                    stringList.length !== 2 &&
                                    <input
                                        type="button"
                                        value="-"
                                        className='add-rule-btn'
                                        onClick={() => handleremovestring(i)}
                                    />}
                            </div>


                        </div>


                        <div className='add-rule-btn-sti'>
                            {stringList.length - 1 === i &&
                                <button
                                    type="button"
                                    className="bg-indigo-200 inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <input
                                        type="button"
                                        value="Add more variation"
                                        className='rem-rule-btn'
                                        onClick={handleAddstring}
                                    />
                                </button>}
                        </div>



                    </div>

                )
            }
            )}
            <br />
            <h2 className="text-xl leading-7 font-medium text-gray-900 mt-4">Default variations</h2>

            <div className={styles.defVar}>
                <div className={styles.onBtn}>
                    <button
                        type="button"
                        className="bg-green-400 inline-flex items-center px-2 py-2.5 -mt-1 -ml-2
                          border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                    >
                        ON
                    </button>
                </div>
                <div className={styles.varOne}>

                    <select
                        type='option'
                        autoComplete="country-name"
                        className="mt-3 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey p-2 px-2" >

                        {stringList.map((item, i) => {
                            return (
                                <option>Variation {i + 1}</option>

                            )
                        })}
                    </select>

                </div>

                <div className={styles.offBtn}>
                    <button
                        type="button"
                        className="bg-red-500 inline-flex items-center px-1.5 py-2.5 -ml-1  border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                    >
                        OFF
                    </button>
                </div>
                <div className={styles.varTwo}>

                    <select
                        type='option'
                        className="mt-3 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey p-2 px-2"
                    >

                        {stringList.map((item, i) => {
                            return (
                                <option>Variation {i + 1}</option>

                            )
                        })}
                    </select>
                </div>
            </div>

        </div>
    )
}

export default NumberFlag