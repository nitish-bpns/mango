import React from 'react'
import MemberTable from './MemberTable';
import styles from './../../styles/account.module.css';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import * as AiIcons from 'react-icons/ai';


function Members() {


    const [open, setOpen] = useState(false)

    const [showhide, setShowhide] = useState('');

    const handleshowhide = (event) => {
        const getuser = event.target.value;
        setShowhide(getuser);
    }


    return (
        <div className='accMembers' >

            <div className={styles.mem1} >


                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h3 className="-mt-6 text-2xl font-semibold text-gray-900"> Members</h3>
                    </div>


                    <button
                        type="button"
                        value="Update"
                        className=" bg-blue-600 inline-flex items-center mr-3 px-1.5 color-white py-1 border border-gray-300 shadow-sm text-md font-medium rounded text-white hover:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >Export CSV
                    </button>
                    <span className={styles.launchInv} >
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className=" bg-blue-600 inline-flex items-center mr-3 px-1.5 color-white py-1 border border-gray-300 shadow-sm text-md font-medium rounded text-white hover:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >

                            Invite Members
                        </button>
                    </span>

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
                                            <Dialog.Panel className="pointer-events-auto w-screen max-w-lg">
                                                <div className="bg-neutral-100 flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">

                                                    <div className="px-4 sm:px-6">
                                                        <div className="flex items-start justify-between">
                                                            <Dialog.Title className="text-xl font-medium text-gray-900"><b> Invite Members </b><br />

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
                                                        <br />
                                                        <form>
                                                            <div>
                                                                <label className={styles.modLabel}>Email Addresses:</label>
                                                                <textarea
                                                                    type="email"
                                                                    rows="4"
                                                                    placeholder='Seperate Email by comma or new line'
                                                                    name='variationJsOne'
                                                                    className="mb-12 leading-5 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1.5"
                                                                >

                                                                </textarea>
                                                            </div>




                                                            <label className={styles.modLabel}>Initial Role</label>
                                                            <select
                                                                id="country"
                                                                name="country"
                                                                autoComplete="country-name"
                                                                className="mt-2 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey p-2 px-2"
                                                            >
                                                                <option value="reader" >Reader</option>
                                                                <option value='writer' >Writer</option>
                                                                <option value='admin' >Admin</option>
                                                            </select>




                                                            <br />
                                                            <div className={styles.invBtn}>
                                                                <button
                                                                    type="button"
                                                                    className="bg-blue-600 inline-flex items-center mr-3 px-3.5 color-white py-1 border border-gray-300 shadow-sm text-md font-medium rounded text-white hover:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    Invite members
                                                                </button>
                                                            </div>
                                                        </form>
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

                <input
                    type="text"
                    name='someValue'
                    placeholder='Find a Member'
                    className='w-1/4 mr-2 rounded border-solid border-2 border-gray-600'
                />

            </div>

            <MemberTable />
            <br /><br /><br />
            <br /><br /><br />
        </div>
    )
}

export default Members;