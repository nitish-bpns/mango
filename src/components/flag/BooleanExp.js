import React from 'react';
import Boolean from './Boolean';
import BooleanFalse from './BooleanFalse';
import styles from './../../styles/addUser.module.css';


function BooleanExp() {
    return (
        <div>

            <Boolean />
            <BooleanFalse />

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
                        className="inline-flex items-center px-1 py-2  border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
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

export default BooleanExp;