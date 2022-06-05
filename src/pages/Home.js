import React, { useState } from 'react';
import SlidePane from '../components/SlidePane';
import styles from './../styles/home.module.css';
import FlagList from '../components/FlagList';

function Home() {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };


    return (
        <div className='home'>
            <div className='bg-home'>

                <div className={styles.homeTop}>
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="mt-9 text-3xl font-semibold text-gray-900"> Experiments</h1>
                                <p className="mt-2 text-md text-gray-700">
                                    Use this page to see all feature flags in this project. Select a flag to manage the environment-specific targeting and rollout rules.
                                </p>

                            </div>
                            <div className="mt-1">
                                <input

                                    className="mt-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1 rounded"
                                    type='text'
                                    placeholder='Search here'
                                    onChange={inputHandler}
                                />
                            </div>
                            <div className="ml-4 mt-4 flex-shrink-0">
                                <SlidePane />
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ color: 'white' }} />
                <FlagList input={inputText} />

                <br />



            </div>

        </div >
    );
}

export default Home;
