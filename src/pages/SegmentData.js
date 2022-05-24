import React, { useEffect, useState } from 'react'
import './../styles/segmentData.css'

function SegmentData() {



    const inputArr = [
        {
            type: "text",
            id: 1,
            value: ""
        }
    ];

    const [arr, setArr] = useState(inputArr);

    const [rule, setRule] = useState([]);


    const addInput = () => {
        setArr(s => {
            const lastId = s[s.length - 1].id;
            return [
                ...s,
                {
                    type: "option",
                    value: ""
                },
            ];
        });
    };

    const handleChange = e => {
        e.preventDefault();

        const index = e.target.id;
        setArr(s => {
            const newArr = s.slice();
            newArr[index].value = e.target.value;

            return newArr;
        });
    };



    function duplicate() {
        const fruit = [0];
        setRule()

        // const div = duplicate("div");
        // div.id = "duplicater";
        // div.appendChild(duplicate("duplicater"));
    };

    useEffect(() => {
        console.log('dfklhjdfh');
    }, rule)

    // var j = 0;
    // var original = document.getElementById('duplicater');
    // function duplicate() {
    //     var clone = original.cloneNode(true); // "deep" clone
    //     clone.id = "duplicater" + ++j;
    //     // or clone.id = ""; if the divs don't need an ID
    //     original.parentNode.appendChild(clone);
    // }


    return (


        < div className='segmentData' >
            <h2>Include users who match these rules</h2>
            <br></br>


            <div className='rule-box' >
                <h3>Rule 1</h3>
                <br />
                <div id="duplicater">
                    {arr.map((item, i) => {
                        return (
                            <>
                                {/* <select
                                    className='inp-fld-1'
                                    onChange={handleChange}
                                    value={item.value}
                                    id={i}
                                    type={item.type}
                                    size="40"
                                >
                                    <option value="v1">att1</option>
                                    <option value="v2">att2</option>
                                    <option value="v3">att3</option>
                                    <option value="v4">att4</option>
                                    <option value="v5">att5</option>

                                </select> */}

                                <select name="cars" className='inp-fld-1' >
                                    <option value="volvo">Select Attribute</option>
                                    <option value="volvo">att1</option>
                                    <option value="saab">att2</option>
                                    <option value="mercedes">att3</option>
                                    <option value="audi">att4</option>
                                </select>

                                <select name="cars" className='inp-fld-1' >
                                    <option value="volvo">Select Operator</option>
                                    <option value="volvo">opr1</option>
                                    <option value="saab">opr2</option>
                                    <option value="mercedes">opr3</option>
                                    <option value="audi">opr4</option>
                                </select>
                                <input
                                    className='inp-fld-3'
                                    onChange={handleChange}
                                    value={item.value2}
                                    id={i}
                                    type={item.type}
                                    size="40"
                                    placeholder='Enter some value'
                                />
                            </>
                        );
                    })}
                    <br />
                    <button className='add-rule-field-btn' onClick={addInput}>+</button>
                    <br />
                    <br />
                </div>
            </div>

            <br />
            <button className='add-rule-btn' id="button" onClick={duplicate} >Add more rules</button>

        </div >
    )
}

export default SegmentData