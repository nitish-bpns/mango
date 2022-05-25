import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import styles from './../styles/addUser.module.css';
import BooleanExp from '../components/flag/BooleanExp';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        overflowY: 'scroll',
        maxHeight: '85%',
    },
};

function AddNewUser() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    const [showhide, setShowhide] = useState('');

    const handleshowhide = (event) => {
        const getuser = event.target.value;
        setShowhide(getuser);
    }

    return (
        <div className='add-user'>


            <div className={styles.launchBtn} >
                <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >

                    Create flag
                </button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                <button className={styles.mClose} onClick={closeModal}>X</button>
                <h2 className="text-xl leading-7 font-medium text-gray-900"><b>Create a feature flag</b></h2>

                <div className={styles.mHead} >A feature flag lets you control who can see a particular feature in your app.</div>



                <br />
                <br />
                <form>
                    <div className={styles.formDiv}>
                        <label className={styles.modLabel}>Name:</label>
                        <div className={styles.modInput}>
                            <input

                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                type='text'
                                placeholder='eg. Beta Users'
                            />
                        </div>
                    </div>

                    <div className={styles.formDiv}>
                        <label className={styles.modLabel}>Key:</label>
                        <div className={styles.modInput}>
                            <input

                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                type='text'
                            // placeholder='eg. Beta Users'
                            />
                        </div>
                    </div>

                    <div className={styles.formDiv}>
                        <label className={styles.modLabel}>Description:</label>
                        <div className={styles.modInput}>
                            <input

                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                type='text'
                                placeholder='Describe what this feature flag controls'
                            />
                        </div>
                    </div>
                    <div className={styles.formDiv}>
                        <label className={styles.modLabel}>Tags:</label>
                        <div className={styles.modInput}>
                            <input

                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                type='text'
                                placeholder='Add tags'
                            />
                        </div>
                    </div>
                    <br />
                    <h2 className="text-xl leading-7 font-medium text-gray-900">Client-side SDK availability</h2>
                    <div className={styles.cBox1}>
                        <fieldset className="space-y-5">
                            <legend className="sr-only">Notifications</legend>
                            <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="comments"
                                        aria-describedby="comments-description"
                                        name="comments"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="comments" className="font-medium text-gray-700">
                                        SDKs using Mobile key
                                    </label>

                                    <p id="comments-description" className="text-gray-500">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 
                                            m-0.5"
                                        >
                                            Android
                                        </button>

                                        <button
                                            type="button"
                                            className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 m-0.5"
                                        >
                                            Flutter
                                        </button>

                                        <button
                                            type="button"
                                            className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 m-0.5"
                                        >
                                            Roku
                                        </button>

                                        <button
                                            type="button"
                                            className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 m-0.5"
                                        >
                                            React Native
                                        </button>

                                        <button
                                            type="button"
                                            className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 m-0.5"
                                        >
                                            C/C++ (client)
                                        </button>

                                        <button
                                            type="button"
                                            className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 m-0.5"
                                        >

                                            iOS
                                        </button>

                                        <button
                                            type="button"
                                            className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 m-0.5"
                                        >

                                            Xamarin
                                        </button>

                                    </p>
                                </div>
                            </div>

                            <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="candidates"
                                        aria-describedby="candidates-description"
                                        name="candidates"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="candidates" className="font-medium text-gray-700">

                                        SDKs using Client-side ID
                                    </label>
                                    <p id="candidates-description" className="text-gray-500">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Electron
                                        </button>
                                        &nbsp;&nbsp;
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            JavaScript
                                        </button>
                                        &nbsp;&nbsp;
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            React
                                        </button>
                                        &nbsp;&nbsp;
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Node.js (client)
                                        </button>
                                    </p>
                                </div>
                            </div>

                        </fieldset>
                    </div>
                    <h2 className="text-xl leading-7 font-medium text-gray-900 mt-4">Flag variations</h2>
                    <div>

                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            onChange={(e) => (handleshowhide(e))}
                            className="mt-2 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey p-2 px-2"
                        >
                            <option value="aa" >Boolean</option>
                            <option value='bb' >String</option>
                            <option value='cc' >Number</option>
                            <option value='dd' >JSON</option>
                        </select>
                        <div className={styles.mHead2} >This controls the evaluation return type of your flag in your code.
                        </div>
                        <br />
                        <br />
                    </div>


                    {
                        showhide === 'aa' && (
                            <div>
                                <BooleanExp />
                            </div>
                        )
                    }
                    {
                        showhide === 'bb' && (
                            <div>

                            </div>
                        )
                    }
                    {
                        showhide === 'cc' && (
                            <div>
                                testing3
                            </div>
                        )
                    }
                    {
                        showhide === 'dd' && (
                            <div>
                                testing4
                            </div>
                        )
                    }
                    {/* 
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
                                <option>Variation 1</option>
                                <option>Variation2</option>
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
                                <option>Variation 1</option>
                                <option>Variation2</option>
                            </select>
                        </div>

                    </div> */}


                    <div className={styles.happen} >
                        <div className="relative flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="comments"
                                    aria-describedby="comments-description"
                                    name="comments"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="comments" className="font-medium text-gray-700">
                                    This is a permanent flag.
                                </label>

                            </div>
                        </div>
                    </div>



                    <br />
                    <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-gray hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Save segment
                    </button>
                    {/* <button className={styles.saveBtn} >Save segment</button> */}
                </form>
            </Modal>





        </div>
    );
}

export default AddNewUser;