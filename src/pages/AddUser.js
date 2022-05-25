import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import styles from './../styles/addUser.module.css';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function AddNewUser() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='add-user'>


            <button className={styles.launchBtn} onClick={openModal}>Add new segment</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                <h3 className={styles.mHead} >Add new segment</h3>

                <button className={styles.mClose} onClick={closeModal}>X</button>
                <br />
                <br />
                <form>
                    <div className={styles.formDiv}>
                        <label className={styles.modLabel}>Name:</label>
                        <input
                            className={styles.modInput}
                            type='text'
                            placeholder='eg. Beta Users'
                        />
                    </div>

                    <div className={styles.formDiv}>
                        <label className={styles.modLabel}>Key:</label>
                        <input
                            className={styles.modInput}
                            type='text'
                            placeholder='eg. Beta Users'
                        />
                    </div>

                    <div className={styles.formDiv}>
                        <label className={styles.modLabel}>Description:</label>
                        <input
                            className={styles.modInput}
                            type='text'
                            placeholder='eg. Beta Users'
                        />
                    </div>
                    <div className={styles.formDiv}>
                        <label className={styles.modLabel}>Tags:</label>
                        <input
                            className={styles.modInput}
                            type='text'
                            placeholder='eg. Beta Users'
                        />
                    </div>
                    <br />
                    <button className={styles.saveBtn} >Save segment</button>
                </form>
            </Modal>





        </div>
    );
}

export default AddNewUser;