import React, { useState } from 'react';
import styles from './../../styles/targetUsers.module.css'


function IncludedUsers() {

    const [inputList, setInputList] = useState([
        {
            user: "",
        },

    ]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;

        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    const handleAddInput = () => {
        setInputList([...inputList, { user: "" }]);
    }

    const handleRemoveInput = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    return (
        <div className={styles.tarBox}>

            {inputList.map((item, i) => {

                return (
                    <div key={i} className={styles.userRow} >

                        <input
                            type="text"
                            name='user'
                            placeholder='Enter'
                            className={styles.tarUsers}
                            value={item.user}
                            onChange={e => handleChange(e, i)}
                        />

                        {inputList.length !== 1 && <input
                            type="button"
                            value="-"
                            className={styles.remBtn}
                            onClick={() => handleRemoveInput(i)}
                        />}

                        {inputList.length - 1 === i && <input
                            type="button"
                            value="+"
                            className={styles.addBtn}
                            onClick={handleAddInput}
                        />}

                    </div>
                )
            }
            )}



        </div>
    )
}

export default IncludedUsers