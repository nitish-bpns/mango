import React, { useState } from 'react';
import './../../styles/ruleNew.css';
import styles from './../../styles/addUser.module.css';

function JsonFlag() {

    const [jasonList, setjasonList] = useState([
        {
            variationOne: "",
            variationTwo: "",
            description: "",
        },
        {
            variationOne: "",
            variationTwo: "",
            description: "",
        },
    ]);

    const [optionList, setoptionList] = useState([
        {
            optionOne: "",
        }
    ]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;

        const list = [...jasonList];
        list[index][name] = value;
        setjasonList(list);

        const option = [...optionList];
        option[index][name] = value;
        setoptionList(option);
    }

    const handleAddjason = () => {
        setjasonList([...jasonList, { attribute: "", operator: "", someValue: "" }]);
        setoptionList([...optionList, { optionOne: "", }])
    }

    const handleRemovejason = index => {
        const list = [...jasonList];
        list.splice(index, 1);
        setjasonList(list);

        const option = [...optionList];
        setoptionList(option)
    }



    return (
        <div>

            {jasonList.map((item, i) => {

                return (
                    <div key={i}  >
                        <div className='rule-box-js'>
                            <div className='rule-js1'>
                                <label>Variation {i + 1}</label>
                                <textarea
                                    type="textarea"
                                    rows="8"
                                    name='variationOne'
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1.5"
                                    value={item.firstName}
                                    onChange={e => handleChange(e, i)}
                                >

                                </textarea>
                            </div>

                            <div className='rule-js2'>
                                <label>Name</label>
                                <input
                                    type="text"
                                    name='operator'
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                    value={item.operator}
                                    onChange={e => handleChange(e, i)}
                                />


                            </div>

                            <div className='rule-js3'>
                                <label>Description (optional)</label>
                                <input
                                    type="text"
                                    name='someValue'
                                    placeholder='Enter some value'
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                    value={item.someValue}
                                    onChange={e => handleChange(e, i)}
                                />
                            </div>

                            <div className='rem-rule-btn-sti'>
                                {jasonList.length - 1 === i && jasonList.length !== 1 && jasonList.length !== 2 && <input
                                    type="button"
                                    value="-"
                                    className='add-rule-btn'
                                    onClick={() => handleRemovejason(i)}
                                />}
                            </div>


                        </div>


                        <div className='add-rule-btn-sti'>
                            {jasonList.length - 1 === i &&
                                <button
                                    type="button"
                                    className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <input
                                        type="button"
                                        value="Add more variation"
                                        className='rem-rule-btn'
                                        onClick={handleAddjason}
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
                        className="inline-flex items-center px-1 py-2  border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                    >
                        ON
                    </button>
                </div>
                <div className={styles.varOne}>

                    <select
                        type='option'
                        autoComplete="country-name"
                        className="mt-3 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey p-2 px-2" >

                        {jasonList.map((item, i) => {
                            return (
                                <option>Variation {i + 1}</option>

                            )
                        })}
                    </select>

                </div>





                <div className={styles.offBtn}>
                    <button
                        type="button"
                        className="inline-flex items-center px-1 py-2  border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                    >
                        OFF
                    </button>
                </div>
                <div className={styles.varTwo}>

                    <select
                        type='option'
                        className="mt-3 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey p-2 px-2"
                    >

                        {jasonList.map((item, i) => {
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

export default JsonFlag