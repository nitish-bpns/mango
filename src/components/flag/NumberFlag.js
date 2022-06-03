import React, { useState } from 'react';
import './../../styles/ruleNew.css';
import styles from './../../styles/addUser.module.css';


function NumberFlag() {

    const [numberList, setnumberList] = useState([
        {
            variationNumOne: "",
            variationNumTwo: "",
            descriptionNum: "",
        },
        {
            variationNumOne: "",
            variationNumTwo: "",
            descriptionNum: "",
        },
    ]);

    const [optionNumList, setoptionNumList] = useState([
        {
            optionNum: "",
        }
    ]);



    const handleChange = (e, index) => {
        const { name, value } = e.target;

        const list = [...numberList];
        list[index][name] = value;
        setnumberList(list);

        const optionNum = [...optionNumList];
        optionNum[index][name] = value;
        setoptionNumList(optionNum);
    }

    const handleAddnumber = () => {
        setnumberList([...numberList, { variationNumOne: "", variationNumTwo: "", descriptionNum: "" }]);
        setoptionNumList([...optionNumList, { optionNum: "", }])
    }

    const handleRemovenumber = index => {
        const list = [...numberList];
        list.splice(index, 1);
        setnumberList(list);

        const optionNum = [...optionNumList];
        list.optionNum(index, 1);
        setoptionNumList(optionNum)
    }




    return (
        <div>


            {numberList.map((item, i) => {

                return (
                    <div key={i}  >
                        <div className='rule-box-sti'>
                            <div className='rule-fld1'>
                                <label>Variation {i + 1}</label>
                                <input
                                    type="number"
                                    name='variationNumOne'
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1.5"
                                    value={item.variationNumOne}
                                    onChange={e => handleChange(e, i)}
                                >

                                </input>
                            </div>

                            <div className='rule-fld1'>
                                <label>Name</label>
                                <input
                                    type="text"
                                    name='variationNumTwo'
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                    value={item.variationNumTwo}
                                    onChange={e => handleChange(e, i)}
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
                                    onChange={e => handleChange(e, i)}
                                />
                            </div>

                            <div className='rem-rule-btn-sti'>
                                {
                                    // numberList.length - 1 === i &&
                                    // numberList.length !== 1 &&
                                    numberList.length !== 2 &&
                                    <input
                                        type="button"
                                        value="-"
                                        className='add-rule-btn'
                                        onClick={() => handleRemovenumber(i)}
                                    />}
                            </div>


                        </div>


                        <div className='add-rule-btn-sti'>
                            {numberList.length - 1 === i &&
                                <button
                                    type="button"
                                    className="bg-indigo-200 inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <input
                                        type="button"
                                        value="Add more variation"
                                        className='rem-rule-btn'
                                        onClick={handleAddnumber}
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

                        {numberList.map((item, i) => {
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

                        {numberList.map((item, i) => {
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