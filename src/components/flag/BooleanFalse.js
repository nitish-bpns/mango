import React, { useState } from 'react';
import './../../styles/ruleNew.css';

function BooleanFalse() {

    const [booleanList, setbooleanList] = useState([
        {
            variationOne: "",
            variationTwo: "",
            description: "",
        },
    ]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;

        const list = [...booleanList];
        list[index][name] = value;
        setbooleanList(list);
    }


    return (
        <div>

            {booleanList.map((item, i) => {

                return (
                    <div key={i} className='rule-box-boo' >
                        <div className='rule-fld1'>
                            <label>Variation 1</label>
                            <select
                                type="option"
                                name='variationOne'
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1.5"
                                value={item.firstName}
                                onChange={e => handleChange(e, i)}
                            >
                                <option value="att1">False</option>
                            </select>
                        </div>

                        <div className='rule-fld1'>
                            <label>Name</label>
                            <input
                                type="text"
                                name='operator'
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                value={item.operator}
                                onChange={e => handleChange(e, i)}
                            />


                        </div>

                        <div className='rule-fld3'>
                            <label>Description (optional)</label>
                            <input
                                type="text"
                                name='someValue'
                                placeholder='Enter some value'
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm border-solid border-2 border-black p-1"
                                value={item.someValue}
                                onChange={e => handleChange(e, i)}
                            />
                        </div>
                        <br />
                    </div>

                )
            }
            )}





        </div>
    )
}

export default BooleanFalse