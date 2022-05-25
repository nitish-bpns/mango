import React, { useState } from 'react';
import './../styles/ruleNew.css';
import RuleNew from './RuleNew';

function RuleNewAdd() {

    const [inputList, setInputList] = useState([
        {
            ruleBox: < RuleNew />
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
        <div>

            {inputList.map((item, i) => {

                return (
                    <div key={i} className='boxg-rule' >
                        <br />
                        <h3>Rule: {i + 1}</h3>
                        <RuleNew
                            name="ruleBox"
                            onChange={e => handleChange(e, i)}
                            value={item.ruleBox}
                        />



                        {
                            // inputList.length !== 1 &&
                            inputList.length - 1 === i &&
                            <input
                                type="button"
                                value="Remove Rule"
                                className='rem-rule'
                                onClick={() => handleRemoveInput(i)}
                            />}

                        {inputList.length - 1 === i && <input
                            type="button"
                            value="Add New Rule"
                            className='add-rule'
                            onClick={handleAddInput}
                        />}
                    </div>
                )
            }
            )}
        </div>
    )
}

export default RuleNewAdd