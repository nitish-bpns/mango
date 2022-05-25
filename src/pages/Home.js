import React from 'react';
import AddNewUser from './AddUser';


function Home() {
    return (
        <div className='home'>
            <h1 className='head' >Home</h1>
            <div><br />
                <AddNewUser />
            </div>

        </div>
    );
}

export default Home;
