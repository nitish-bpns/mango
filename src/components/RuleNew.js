import React, { useState } from 'react';
import './../styles/ruleNew.css';

function RuleNew() {

    const [inputList, setInputList] = useState([
        {
            attribute: "",
            operator: "",
            someValue: "",
        },

    ]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;

        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    const handleAddInput = () => {
        setInputList([...inputList, { attribute: "", operator: "", someValue: "" }]);
    }

    const handleRemoveInput = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    return (
        <div>

            {inputList.map((item, i) => {

                return (
                    <div key={i} className='rule-box' >
                        <select
                            type="option"
                            name='attribute'
                            className='rule-fld1'
                            value={item.firstName}
                            onChange={e => handleChange(e, i)}
                        >
                            <option value="select">Select Attribute</option>
                            <option value="att1">att1</option>
                            <option value="att2">att2</option>
                            <option value="att3">att3</option>
                            <option value="att4">att4</option>
                        </select>

                        <select
                            type="option"
                            name='operator'
                            className='rule-fld1'
                            value={item.operator}
                            onChange={e => handleChange(e, i)}
                        >
                            <option value="select">Select Operator</option>
                            <option value="opr1">opr1</option>
                            <option value="opr2">opr2</option>
                            <option value="opr3">opr3</option>
                            <option value="opr4">opr4</option>
                        </select>

                        <input
                            type="text"
                            name='someValue'
                            placeholder='Enter some value'
                            className='rule-fld3'
                            value={item.someValue}
                            onChange={e => handleChange(e, i)}
                        />

                        {inputList.length !== 1 && <input
                            type="button"
                            value="-"
                            className='add-rule-btn'
                            onClick={() => handleRemoveInput(i)}
                        />}

                        {inputList.length - 1 === i && <input
                            type="button"
                            value="+"
                            className='rem-rule-btn'
                            onClick={handleAddInput}
                        />}

                    </div>
                )
            }
            )}





        </div>
    )
}

export default RuleNew