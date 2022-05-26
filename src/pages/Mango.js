import React, { Component, useState } from 'react'
// import BooleanExp from '../components/flag/BooleanExp';
// import StringVariation from '../components/string/StringVariation';
// import BooleanExp from '../components/flag/BooleanExp';
// import NumberFlag from '../components/flag/NumberFlag';
// import JsonFlag from '../components/flag/JsonFlag';
import FlagList from '../components/FlagList';
import styles from './../styles/home.module.css';
// import List from '../components/List';
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
// import { XIcon } from '@heroicons/react/outline'
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";


function Mango() {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const [open, setOpen] = useState(false)

    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });

    return (
        <div className='mango' >
            <h3>
                Mango</h3>
            {/* <input style={{ backgroundColor: 'grey' }}
                type='text'
                rows={1}
                onChange={inputHandler}
            ></input> */}
            {/* <StringVariation /> */}
            {/* <BooleanExp /> */}
            {/* <NumberFlag /> */}
            {/* <JsonFlag /> */}
            {/* <FlagList /> */}
            {/* <List input={inputText} /> */}


            <div>







                <button onClick={() => setState({ isPaneOpen: true })}>
                    Click me to open right pane!
                </button>
                <div style={{ marginTop: "32px" }}>
                    <button onClick={() => setState({ isPaneOpenLeft: true })}>
                        Click me to open left pane with 20% width!
                    </button>
                </div>
                <div className='popup'>
                    <SlidingPane
                        className="some-custom-class"
                        overlayClassName="some-custom-overlay-class"
                        isOpen={state.isPaneOpen}
                        title="Hey, it is optional pane title.  I can be React component too."
                        subtitle="Optional subtitle."
                        onRequestClose={() => {
                            // triggered on "<" on left top click or on outside click
                            setState({ isPaneOpen: false });
                        }}
                    >
                        <div>And I am pane content. BTW, what rocks?</div>
                        <br />
                        <img src="img.png" />
                    </SlidingPane>
                </div>
                <div className='popup'>
                    <SlidingPane
                        closeIcon={<div>Some div containing custom close icon.</div>}
                        isOpen={state.isPaneOpenLeft}
                        title="Hey, it is optional pane title.  I can be React component too."
                        from="left"
                        width="200px"
                        onRequestClose={() => setState({ isPaneOpenLeft: false })}
                    >

                        <div>And I am pane content on left.</div>
                    </SlidingPane>
                </div>
            </div>


            <button onClick={() => setOpen(true)}>click here</button>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                                <button
                                                    type="button"
                                                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
                                                </button>
                                            </div>
                                        </Transition.Child>
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <Dialog.Title className="text-lg font-medium text-gray-900"> Panel title </Dialog.Title>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                {/* Replace with your content */}
                                                <div className="absolute inset-0 px-4 sm:px-6">
                                                    <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true" />
                                                </div>
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

export default Mango