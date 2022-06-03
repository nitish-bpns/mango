import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import { XIcon } from '@heroicons/react/outline'
import * as AiIcons from 'react-icons/ai';
import styles from './../styles/addUser.module.css';
import Boolean from '../components/flag/Boolean';
import StringVariation from './flag/StringVariation';
import NumberFlag from '../components/flag/NumberFlag';
import JsonFlag from '../components/flag/JsonFlag';

function SlidePane() {

    const [open, setOpen] = useState(false)

    const [showhide, setShowhide] = useState('');

    const handleshowhide = (event) => {
        const getuser = event.target.value;
        setShowhide(getuser);
    }


    return (
        <div>

            <div className={styles.launchBtn} >
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >

                    Create flag
                </button>
            </div>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => {
                    setOpen(false)
                    setShowhide("")
                }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-3xl">
                                        <div className="bg-neutral-100 flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-xl font-medium text-gray-900"><b> Create a feature flag </b><br />
                                                        <div className="text-sm font-medium text-gray" >
                                                            <div style={{ color: 'grey', fontSize: '17px' }} >A feature flag lets you control who can see a particular feature in your app.</div></div>
                                                    </Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">


                                                        <button
                                                            type="button"
                                                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                            onClick={() => {
                                                                setOpen(false)
                                                                setShowhide("")
                                                            }}
                                                        >
                                                            <span className="sr-only">Close panel</span>
                                                            {/* <XIcon className="h-6 w-6" aria-hidden="true" />
                                                             */}
                                                            <AiIcons.AiOutlineClose className="h-6 w-6" aria-hidden="true" />
                                                        </button>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                {/* Replace with your content */}

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
                                                    <br />
                                                    {/* <div className={styles.formDiv}>
                                                        <label className={styles.modLabel}>Tags:</label>
                                                        <div className={styles.modInput}>
                                                            <input

                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                                                type='text'
                                                                placeholder='Add tags'
                                                            />
                                                        </div>
                                                    </div> 
                                                    
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
                                                    </div> */}
                                                    <h2 className="text-xl leading-7 font-medium text-gray-900 mt-4">Flag variations</h2>
                                                    <div>

                                                        <select
                                                            id="country"
                                                            name="country"
                                                            autoComplete="country-name"
                                                            onChange={(e) => (handleshowhide(e))}
                                                            className="mt-2 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey p-2 px-2"
                                                        >
                                                            <option>Selelct</option>
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
                                                                <Boolean />
                                                            </div>
                                                        )
                                                    }
                                                    {
                                                        showhide === 'bb' && (
                                                            <div>
                                                                <StringVariation />
                                                            </div>
                                                        )
                                                    }
                                                    {
                                                        showhide === 'cc' && (
                                                            <div>
                                                                <NumberFlag />
                                                            </div>
                                                        )
                                                    }
                                                    {
                                                        showhide === 'dd' && (
                                                            <div>
                                                                <JsonFlag />
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


                                                    {/* <div className={styles.happen} >
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
                                                    </div> */}



                                                    <br />
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center px-8 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    >
                                                        Save Flag
                                                    </button>
                                                    {/* <button className={styles.saveBtn} >Save segment</button> */}
                                                </form>
                                                {/* /End replace */}
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default SlidePane