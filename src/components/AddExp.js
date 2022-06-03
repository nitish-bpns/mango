import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import styles from './../styles/addUser.module.css';
import * as AiIcons from 'react-icons/ai';


function AddExp() {

    const [open, setOpen] = useState(false)


    return (
        <div>


            <div className={styles.addmore} >
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >

                    Add more
                </button>
            </div>


            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative max-w-3xl bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform ">
                                    <div>
                                        <div className="px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-xl font-medium text-gray-900"><b> Create Experiment </b><br />
                                                    <div className="text-sm font-medium text-gray" >
                                                        <div style={{ color: 'grey', fontSize: '17px', marginTop: '0.6rem' }} >Experiment lets you control who can see a particular feature in your app.</div></div>
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">


                                                    <button
                                                        type="button"
                                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        onClick={() => {
                                                            setOpen(false)

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
                                        <div className="relative mt-3 flex-1 px-4 sm:px-6">
                                            {/* Replace with your content */}
                                            <br />

                                            <form>
                                                <div className={styles.expDiv}>
                                                    <label className={styles.modLabel}>Name:</label>
                                                    <div className={styles.modInput}>
                                                        <input

                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                                            type='text'
                                                            placeholder='eg. Beta Users'
                                                        />
                                                    </div>
                                                </div>

                                                <div className={styles.expDiv}>
                                                    <label className={styles.modLabel}>Key:</label>
                                                    <div className={styles.modInput}>
                                                        <input

                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                                            type='text'
                                                        // placeholder='eg. Beta Users'
                                                        />
                                                    </div>
                                                </div>

                                                <div className={styles.expDiv}>
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
                                                {/* <button
                                                    type="button"
                                                    className="inline-flex items-center px-8 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Save Flag
                                                </button> */}
                                            </form>
                                        </div>
                                    </div>
                                    <center>
                                        <div className="mt-5 sm:mt-6">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center w-xl rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                                onClick={() => setOpen(false)}
                                            >
                                                Save Experiment
                                            </button>
                                        </div>
                                    </center>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>







        </div >
    )
}

export default AddExp