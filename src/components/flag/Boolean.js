import React, { useState } from 'react';
import './../../styles/ruleNew.css';
import styles from './../../styles/addUser.module.css';

function Boolean() {

    return (
        <div>
            <div className='rule-box-boo' >
                <div className='rule-fld1'>
                    <label>Variation 1</label>
                    <select
                        type="option"
                        name='variationOne'
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1.5">

                        <option value="att1">True</option>
                    </select>
                </div>

                <div className='rule-fld1'>
                    <label>Name</label>
                    <input
                        type="text"
                        name='operator'
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                    />
                </div>

                <div className='rule-fld3'>
                    <label>Description (optional)</label>
                    <input
                        type="text"
                        name='someValue'
                        placeholder='Enter some value'
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"></input>
                </div>


                <br />
            </div>

            <div className='rule-box-boo' >
                <div className='rule-fld1'>
                    <label>Variation 2</label>
                    <select
                        type="option"
                        name='variationOne'
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1.5">

                        <option value="att1">False</option>
                    </select>
                </div>

                <div className='rule-fld1'>
                    <label>Name</label>
                    <input
                        type="text"
                        name='operator'
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                    />
                </div>

                <div className='rule-fld3'>
                    <label>Description (optional)</label>
                    <input
                        type="text"
                        name='someValue'
                        placeholder='Enter some value'
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"></input>
                </div>



            </div>


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
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-3 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey p-2 px-2"
                    >
                        <option>True</option>
                        <option>False</option>
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
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-3 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey p-2 px-2"
                    >
                        <option>False</option>
                        <option>True</option>
                    </select>
                </div>

            </div>






        </div>
    )
}

export default Boolean