import React, { useState } from 'react'
import styles from './../../styles/addUser.module.css';
import * as AiIcons from 'react-icons/ai';
import './../../styles/ruleNew.css';

function Variation() {

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


            <h2 className="text-xl leading-7 font-medium text-gray-900 mt-4"><span className="text-2xl leading-6 font-medium text-black-900"><b>Variation</b></span></h2>
            <div>
                <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    onChange={(e) => (handleshowhide(e))}
                    className="mt-4 bg-blue-600 inline-flex items-center px-2.5 color-white py-1.5 border border-gray-300 shadow-sm text-md font-medium rounded text-white hover:bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <option>Selelct</option>
                    <option value="aa" >Boolean</option>
                    <option value='bb' >String</option>
                    <option value='cc' >Number</option>
                    <option value='dd' >JSON</option>
                </select>
                <div className={styles.mHead2} >This controls the evaluation return type of your feature in your code.
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


                        <div style={{ display: "flex", margin: '2% 4% 0 0%' }}>
                            <button
                                type="button"
                                className="bg-green-400 inline-flex items-center px-2 py-2.5
                          border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                            >
                                ON
                            </button>
                            <span>
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="rounded border-solid w-80 border-2 border-black relative block rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey px-2 py-2 "
                                >
                                    <option>True</option>
                                    <option>False</option>
                                </select>
                            </span>
                            <span style={{ display: "flex" }}>
                                <button
                                    type="button"
                                    className="ml-60 bg-red-500 inline-flex items-center px-1.5 py-2.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                                >
                                    OFF
                                </button>
                                <span>
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="rounded border-solid border-2 w-80 border-black relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey px-2 py-2 "
                                    >
                                        <option>False</option>
                                        <option>True</option>
                                    </select>
                                </span>

                            </span>


                        </div>



                        <br /><br />
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
                                                    className="ml-3 mt-3 bg-blue-600 inline-flex items-center px-1 color-white py-1 border border-gray-300 shadow-sm text-sm font-medium rounded text-white hover:bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    <input
                                                        type="button"
                                                        value="Add more variation"
                                                        className='rem-rule-btn '
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

                            <div style={{ display: "flex", margin: '2% 4% 0 0%' }}>
                                <button
                                    type="button"
                                    className="bg-green-400 inline-flex items-center px-2 py-2.5
                          border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                                >
                                    ON
                                </button>
                                <span>
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="rounded border-solid w-80 border-2 border-black relative block rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey px-2 py-2 "
                                    >
                                        {stringList.map((item, i) => {
                                            return (
                                                <option>Variation {i + 1}</option>

                                            )
                                        })}
                                    </select>
                                </span>
                                <span style={{ display: "flex" }}>
                                    <button
                                        type="button"
                                        className="ml-60 bg-red-500 inline-flex items-center px-1.5 py-2.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                                    >
                                        OFF
                                    </button>
                                    <span>
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="rounded border-solid border-2 w-80 border-black relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey px-2 py-2 "
                                        >
                                            {stringList.map((item, i) => {
                                                return (
                                                    <option>Variation {i + 1}</option>

                                                )
                                            })}
                                        </select>
                                    </span>

                                </span>


                            </div>

                            <br /><br />

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
                                                    className="ml-3 mt-3 bg-blue-600 inline-flex items-center px-1 color-white py-1 border border-gray-300 shadow-sm text-sm font-medium rounded text-white hover:bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                                <div className={styles.varOneT}>

                                    <select
                                        type='option'
                                        autoComplete="country-name"
                                        className="rounded border-solid border-2 border-black mt-4 -ml-3 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey px-2 py-2 " >

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
                                <div className={styles.varTwoT}>

                                    <select
                                        type='option'
                                        className="rounded border-solid border-2 border-black mt-4 -ml-3 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey px-2 py-2 "
                                    >

                                        {numberList.map((item, i) => {
                                            return (
                                                <option>Variation {i + 1}</option>

                                            )
                                        })}
                                    </select>
                                </div>


                            </div>
                            <br /><br />





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
                                                    className="ml-3 mt-3 bg-blue-600 inline-flex items-center px-1 color-white py-1 border border-gray-300 shadow-sm text-sm font-medium rounded text-white hover:bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    <input
                                                        type="button"
                                                        value="Add more variation"
                                                        className='rem-rule-btn '
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
                                <div className={styles.varOneT}>

                                    <select
                                        type='option'
                                        autoComplete="country-name"
                                        className="rounded border-solid border-2 border-black mt-4 -ml-3 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey px-2 py-2 " >

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
                                <div className={styles.varTwoT}>

                                    <select
                                        type='option'
                                        className="rounded border-solid border-2 border-black mt-4 -ml-3 relative block w-full rounded-none bg-transparent sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-grey px-2 py-2 "
                                    >

                                        {jsonList.map((item, i) => {
                                            return (
                                                <option>Variation {i + 1}</option>

                                            )
                                        })}
                                    </select>
                                </div>

                                <br /><br />
                            </div>






                        </div>
                    </div>
                )
            }














        </div>
    )
}

export default Variation