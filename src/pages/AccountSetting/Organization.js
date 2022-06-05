import React from 'react'
import styles from './../../styles/account.module.css';

function Organization() {
    return (
        <div className='Organization' >

            <div className={styles.org1} >
                <h3 className="pt-0 pb-5 text-xl leading-6 font-medium text-black-900">Target Individual Targeting</h3>

                <div className='-mb-4'>
                    <b> Name of Organization</b>
                </div>
                <br />
                <input
                    type="text"
                    name='someValue'
                    placeholder='Mango'
                    className='w-1/4 py-0.5 mr-2 rounded border-solid border-2 border-gray-600'
                />
                <button
                    type="button"
                    value="Update"
                    className="bg-blue-600 inline-flex items-center px-2.5 color-white py-1 border border-gray-300 shadow-sm text-md font-medium rounded text-white hover:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >Update
                </button>
                <br />
            </div>

            <div className={styles.org2} >
                <h3 className="pt-0 pb-5 text-xl leading-6 font-medium text-black-900">Change Owner</h3>

                <div className='-mb-4'>
                    <b> Owner</b>
                </div>
                <br />
                <input
                    type="text"
                    name='someValue'
                    placeholder='Mango'
                    className='w-1/4 mr-2 py-0.5 rounded border-solid border-2 border-gray-600'
                />
                <button
                    type="button"
                    value="Update"
                    className="bg-blue-600 inline-flex items-center px-2.5 color-white py-1 border border-gray-300 shadow-sm text-md font-medium rounded text-white hover:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >Update Owner
                </button>
                <br />
            </div>


            <div className={styles.org3} >
                <h3 className="pt-0 -pb-2 text-xl leading-6 font-medium text-black-900">Delete Account</h3>
                <br />
                <p>
                    This will permanently delete this LaunchDarkly account, including all of its users.
                </p>
                <button
                    type="button"
                    value="Update"
                    className="bg-blue-600 mt-4 inline-flex items-center px-2.5 color-white py-1 border border-gray-300 shadow-sm text-md font-medium rounded text-white hover:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >Delete Account
                </button>
            </div>
            <br />
            <br />
            <br />
            <br />








        </div>
    )
}

export default Organization