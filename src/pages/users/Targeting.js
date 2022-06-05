import React, { useState } from 'react';
import './../../styles/addUser.module.css';
import './../../styles/ruleNew.css';
import TargetRule from './TargetRule';
import ReactChipInput from "react-chip-input";
import './userstyles.css';
import IndiTarget from './IndiTarget';

function Targeting() {

    const state = {
        chips: []
    };

    const addChip = value => {
        const chips = this.state.chips.slice();
        chips.push(value);
        this.setState({ chips });
    };
    const removeChip = index => {
        const chips = this.state.chips.slice();
        chips.splice(index, 1);
        this.setState({ chips });
    };

    const [isOn, setIsOn] = React.useState(
        { c: true }
    );


    const handleInputC = (inputLabel) => {
        setIsOn({ ...isOn, c: !isOn.c });
    }

    const [inputList, setInputList] = useState([
        {
            ruleBox: < TargetRule />
        }
    ]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;

        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    const handleAddInput = () => {
        setInputList([...inputList, { ruleBox: "" }]);
        // const list = [...inputList];
        // list.push({ firstName: "", lastName: "" });
        // setInputList(list);
    }

    const handleRemoveInput = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    return (
        <div className='targeting'>


            <div className="pb-5 border-b border-gray-200">
                <span className="text-2xl leading-6 font-medium text-black-900"><b>Targeting</b></span>
                <input
                    type="checkbox"
                    className='scale-y-150 scale-x-150 mt-6 ml-8 mr-3'
                    checked={isOn.c}
                    onClick={handleInputC}
                />

                {isOn.c &&
                    <span>ON</span>
                }
            </div>



            <div  >
                <div>
                    <h3 className="pt-5 text-xl leading-6 font-medium text-black-900">Target Individual Targeting</h3>
                </div>
                {/* <ReactChipInput
                    classes="class1 class2"
                    chips={state.chips}
                    onSubmit={value => this.addChip(value)}
                    onRemove={index => this.removeChip(index)}
                /> */}
                <br />
                <div className='indit' >
                    <IndiTarget />
                </div>

                <br />
                <div>
                    <h3 className="pt-5 text-xl leading-6 font-medium text-black-900 ">Target users who match these rules</h3>
                </div>

                <div>

                    {inputList.map((item, i) => {

                        return (
                            <div key={i} className='boxg-rule' >
                                <br />
                                <div className='bg-gray-200 p-1 px-1 border-gray-300 border-2 rounded'>

                                    <h3>  Rule: {i + 1}</h3>
                                    <TargetRule
                                        name="ruleBox"
                                        onChange={e => handleChange(e, i)}
                                        value={item.ruleBox}
                                    />

                                    <input
                                        type="text"
                                        name='someValue'
                                        placeholder='Enter Variation'
                                        className='rule-fld3-t rounded border-solid border-2 border-gray-300'


                                    />
                                </div>


                                {
                                    inputList.length !== 1 &&
                                    inputList.length - 1 === i &&
                                    <button
                                        type="button"
                                        value="Remove Rule"
                                        onClick={() => handleRemoveInput(i)}
                                        className="mt-4 bg-blue-600 inline-flex items-center px-2.5 color-white py-1.5 border border-gray-300 shadow-sm text-md font-medium rounded text-white hover:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >Remove Rule

                                    </button>
                                }

                                {inputList.length - 1 === i &&
                                    <button
                                        type="button"
                                        value="Add New Rule"
                                        onClick={handleAddInput}
                                        className="ml-4 mt-4 bg-blue-600 inline-flex items-center px-2.5 color-white py-1.5 border border-gray-300 shadow-sm text-md font-medium rounded text-white hover:bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >Add Rule

                                    </button>

                                }
                            </div>
                        )
                    }
                    )}
                </div>
                <br /><br />
            </div>
        </div>
    )
}

export default Targeting