import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import * as AiIcons from 'react-icons/ai';
import styles from './../styles/addUser.module.css';
import './../styles/ruleNew.css';


function SlidePane() {

    const [open, setOpen] = useState(false)

    const [showhide, setShowhide] = useState('');

    const handleshowhide = (event) => {
        const getuser = event.target.value;
        setShowhide(getuser);
    }


    // for number flag

    const [numberList, setnumberList] = useState([
        {
            variationNumOne: "",
            variationNumTwo: "",
            descriptionNum: "",
        },
        {
            variationNumOne: "",
            variationNumTwo: "",
            descriptionNum: "",
        },
    ]);

    const [optionNumList, setoptionNumList] = useState([
        {
            optionNum: "",
        }
    ]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;

        const list = [...numberList];
        list[index][name] = value;
        setnumberList(list);

        const optionNum = [...optionNumList];
        optionNum[index][name] = value;
        setoptionNumList(optionNum);
    }

    const handleAddnumber = () => {
        setnumberList([...numberList, { variationNumOne: "", variationNumTwo: "", descriptionNum: "" }]);
        setoptionNumList([...optionNumList, { optionNum: "", }])
    }

    const handleRemovenumber = index => {
        const list = [...numberList];
        list.splice(index, 1);
        setnumberList(list);

        const optionNum = [...optionNumList];
        list.optionNum(index, 1);
        setoptionNumList(optionNum)
    }


    // for string flag

    const [stringList, setstringList] = useState([
        {
            variationStrOne: "",
            variationStrTwo: "",
            descriptionStr: "",
        },
        {
            variationStrOne: "",
            variationStrTwo: "",
            descriptionStr: "",
        },
    ]);

    const [optionStrList, setoptionStrList] = useState([
        {
            optionStr: "",
        }
    ]);

    const handleChangeStr = (e, index) => {
        const { name, value } = e.target;

        const list = [...stringList];
        list[index][name] = value;
        setstringList(list);

        const optionStr = [...optionStrList];
        optionStr[index][name] = value;
        setoptionStrList(optionStr);
    }

    const handleAddstring = () => {
        setstringList([...stringList, { variationStrOne: "", variationStrTwo: "", descriptionStr: "" }]);
        setoptionStrList([...optionStrList, { optionStr: "", }])
    }

    const handleremovestring = index => {
        const list = [...stringList];
        list.splice(index, 1);
        setstringList(list);

        const optionStr = [...optionStrList];
        list.optionStr(index, 1);
        setoptionStrList(optionStr)
    }


    // for JSON flag

    const [jsonList, setjsonList] = useState([
        {
            variationJsOne: "",
            variationJsTwo: "",
            descriptionJs: "",
        },
        {
            variationJsOne: "",
            variationJsTwo: "",
            descriptionJs: "",
        },
    ]);

    const [optionJsList, setoptionJsList] = useState([
        {
            optionJs: "",
        }
    ]);



    const handleChangeJs = (e, index) => {
        const { name, value } = e.target;

        const list = [...jsonList];
        list[index][name] = value;
        setjsonList(list);

        const optionJs = [...optionJsList];
        optionJs[index][name] = value;
        setoptionJsList(optionJs);
    }

    const handleAddjson = () => {
        setjsonList([...jsonList, { variationJsOne: "", variationJsTwo: "", descriptionJs: "" }]);
        setoptionJsList([...optionJsList, { optionJs: "", }])
    }

    const handleRemovejson = index => {
        const list = [...jsonList];
        list.splice(index, 1);
        setjsonList(list);

        const optionJs = [...optionJsList];
        list.optionJs(index, 1);
        setoptionJsList(optionJs)
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
                                                    {
                                                        showhide === 'bb' && (
                                                            <div>
                                                                <div>
                                                                    {stringList.map((item, i) => {

                                                                        return (
                                                                            <div key={i}  >
                                                                                <div className='rule-box-sti'>
                                                                                    <div className='rule-fld1'>
                                                                                        <label>Variation {i + 1}</label>
                                                                                        <input
                                                                                            type="number"
                                                                                            name='variationStrOne'
                                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1.5"
                                                                                            value={item.variationStrOne}
                                                                                            onChange={e => handleChangeStr(e, i)}
                                                                                        >
                                                                                        </input>
                                                                                    </div>

                                                                                    <div className='rule-fld1'>
                                                                                        <label>Name</label>
                                                                                        <input
                                                                                            type="text"
                                                                                            name='variationStrTwo'
                                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                                                                            value={item.variationStrTwo}
                                                                                            onChange={e => handleChangeStr(e, i)}
                                                                                        />


                                                                                    </div>

                                                                                    <div className='rule-fld3'>
                                                                                        <label>Description (optional)</label>
                                                                                        <input
                                                                                            type="text"
                                                                                            name='descriptionStr'
                                                                                            placeholder='Enter some value'
                                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                                                                            value={item.descriptionStr}
                                                                                            onChange={e => handleChangeStr(e, i)}
                                                                                        />
                                                                                    </div>

                                                                                    <div className='rem-rule-btn-sti'>
                                                                                        {
                                                                                            // stringList.length - 1 === i &&
                                                                                            // stringList.length !== 1 &&
                                                                                            stringList.length !== 2 &&
                                                                                            <input
                                                                                                type="button"
                                                                                                value="-"
                                                                                                className='add-rule-btn'
                                                                                                onClick={() => handleremovestring(i)}
                                                                                            />}
                                                                                    </div>


                                                                                </div>


                                                                                <div className='add-rule-btn-sti'>
                                                                                    {stringList.length - 1 === i &&
                                                                                        <button
                                                                                            type="button"
                                                                                            className="bg-indigo-200 inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                                        >
                                                                                            <input
                                                                                                type="button"
                                                                                                value="Add more variation"
                                                                                                className='rem-rule-btn'
                                                                                                onClick={handleAddstring}
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
                                                                                className="bg-green-400 inline-flex items-center px-2 py-2.5 -mt-1 -ml-2
                          border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                                                                            >
                                                                                ON
                                                                            </button>
                                                                        </div>
                                                                        <div className={styles.varOne}>

                                                                            <select
                                                                                type='option'
                                                                                autoComplete="country-name"
                                                                                className="mt-3 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey p-2 px-2" >

                                                                                {stringList.map((item, i) => {
                                                                                    return (
                                                                                        <option>Variation {i + 1}</option>

                                                                                    )
                                                                                })}
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
                                                                                type='option'
                                                                                className="mt-3 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey p-2 px-2"
                                                                            >

                                                                                {stringList.map((item, i) => {
                                                                                    return (
                                                                                        <option>Variation {i + 1}</option>

                                                                                    )
                                                                                })}
                                                                            </select>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                    {
                                                        showhide === 'cc' && (
                                                            <div>
                                                                <div>


                                                                    {numberList.map((item, i) => {

                                                                        return (
                                                                            <div key={i}  >
                                                                                <div className='rule-box-sti'>
                                                                                    <div className='rule-fld1'>
                                                                                        <label>Variation {i + 1}</label>
                                                                                        <input
                                                                                            type="number"
                                                                                            name='variationNumOne'
                                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1.5"
                                                                                            value={item.variationNumOne}
                                                                                            onChange={e => handleChange(e, i)}
                                                                                        >

                                                                                        </input>
                                                                                    </div>

                                                                                    <div className='rule-fld1'>
                                                                                        <label>Name</label>
                                                                                        <input
                                                                                            type="text"
                                                                                            name='variationNumTwo'
                                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                                                                            value={item.variationNumTwo}
                                                                                            onChange={e => handleChange(e, i)}
                                                                                        />


                                                                                    </div>

                                                                                    <div className='rule-fld3'>
                                                                                        <label>Description (optional)</label>
                                                                                        <input
                                                                                            type="text"
                                                                                            name='descriptionNum'
                                                                                            placeholder='Enter some value'
                                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                                                                            value={item.descriptionNum}
                                                                                            onChange={e => handleChange(e, i)}
                                                                                        />
                                                                                    </div>

                                                                                    <div className='rem-rule-btn-sti'>
                                                                                        {
                                                                                            // numberList.length - 1 === i &&
                                                                                            // numberList.length !== 1 &&
                                                                                            numberList.length !== 2 &&
                                                                                            <input
                                                                                                type="button"
                                                                                                value="-"
                                                                                                className='add-rule-btn'
                                                                                                onClick={() => handleRemovenumber(i)}
                                                                                            />}
                                                                                    </div>


                                                                                </div>


                                                                                <div className='add-rule-btn-sti'>
                                                                                    {numberList.length - 1 === i &&
                                                                                        <button
                                                                                            type="button"
                                                                                            className="bg-indigo-200 inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                                        >
                                                                                            <input
                                                                                                type="button"
                                                                                                value="Add more variation"
                                                                                                className='rem-rule-btn'
                                                                                                onClick={handleAddnumber}
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
                                                                                className="bg-green-400 inline-flex items-center px-2 py-2.5 -mt-1 -ml-2
              border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                                                                            >
                                                                                ON
                                                                            </button>
                                                                        </div>
                                                                        <div className={styles.varOne}>

                                                                            <select
                                                                                type='option'
                                                                                autoComplete="country-name"
                                                                                className="mt-3 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey p-2 px-2" >

                                                                                {numberList.map((item, i) => {
                                                                                    return (
                                                                                        <option>Variation {i + 1}</option>

                                                                                    )
                                                                                })}
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
                                                                                type='option'
                                                                                className="mt-3 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey p-2 px-2"
                                                                            >

                                                                                {numberList.map((item, i) => {
                                                                                    return (
                                                                                        <option>Variation {i + 1}</option>

                                                                                    )
                                                                                })}
                                                                            </select>
                                                                        </div>


                                                                    </div>






                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                    {
                                                        showhide === 'dd' && (
                                                            <div>
                                                                <div>

                                                                    {jsonList.map((item, i) => {

                                                                        return (
                                                                            <div key={i}  >
                                                                                <div className='rule-box-js'>
                                                                                    <div className='rule-js1'>
                                                                                        <label>Variation {i + 1}</label>
                                                                                        <textarea
                                                                                            type="text"
                                                                                            rows="8"
                                                                                            name='variationJsOne'
                                                                                            className="leading-5 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1.5"
                                                                                            value={item.variationJsOne}
                                                                                            onChange={e => handleChangeJs(e, i)}
                                                                                        >

                                                                                        </textarea>
                                                                                    </div>

                                                                                    <div className='rule-js2'>
                                                                                        <label>Name</label>
                                                                                        <input
                                                                                            type="text"
                                                                                            name='variationJsTwo'
                                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                                                                            value={item.variationJsTwo}
                                                                                            onChange={e => handleChangeJs(e, i)}
                                                                                        />


                                                                                    </div>

                                                                                    <div className='rule-js3'>
                                                                                        <label>Description (optional)</label>
                                                                                        <input
                                                                                            type="text"
                                                                                            name='descriptionJs'
                                                                                            placeholder='Enter some value'
                                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                                                                            value={item.descriptionJs}
                                                                                            onChange={e => handleChangeJs(e, i)}
                                                                                        />
                                                                                    </div>

                                                                                    <div className='rem-rule-btn-sti'>
                                                                                        {
                                                                                            // jsonList.length - 1 === i &&
                                                                                            // jsonList.length !== 1 &&
                                                                                            jsonList.length !== 2 &&
                                                                                            <input
                                                                                                type="button"
                                                                                                value="-"
                                                                                                className='add-rule-btn'
                                                                                                onClick={() => handleRemovejson(i)}
                                                                                            />}
                                                                                    </div>


                                                                                </div>


                                                                                <div className='add-rule-btn-sti'>
                                                                                    {jsonList.length - 1 === i &&
                                                                                        <button
                                                                                            type="button"
                                                                                            className="bg-indigo-200 inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                                        >
                                                                                            <input
                                                                                                type="button"
                                                                                                value="Add more variation"
                                                                                                className='rem-rule-btn'
                                                                                                onClick={handleAddjson}
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
                                                                                className="bg-green-400 inline-flex items-center px-2 py-2.5 -mt-1 -ml-2
              border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                                                                            >
                                                                                ON
                                                                            </button>
                                                                        </div>
                                                                        <div className={styles.varOne}>

                                                                            <select
                                                                                type='option'
                                                                                autoComplete="country-name"
                                                                                className="mt-3 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey p-2 px-2" >

                                                                                {jsonList.map((item, i) => {
                                                                                    return (
                                                                                        <option>Variation {i + 1}</option>

                                                                                    )
                                                                                })}
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
                                                                                type='option'
                                                                                className="mt-3 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey p-2 px-2"
                                                                            >

                                                                                {jsonList.map((item, i) => {
                                                                                    return (
                                                                                        <option>Variation {i + 1}</option>

                                                                                    )
                                                                                })}
                                                                            </select>
                                                                        </div>


                                                                    </div>






                                                                </div>
                                                            </div>
                                                        )
                                                    }

                                                    <br />
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center px-8 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    >
                                                        Save Flag
                                                    </button>
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
    )
}

export default SlidePane