import React from 'react';
import './../styles/reports.css'
import RuleNewAdd from '../components/RuleNewAdd';
import IncludedUsers from '../components/TargetUsers/IncludedUsers';


function Reports() {

    return (
        <div className='reports'>
            <div className='segment-header' >
                <h1>Mango Users</h1>
            </div>
            <hr /><br />
            <div>
                <h2>Target users</h2>
                <br />
                <h4>Included users</h4>
                <IncludedUsers />
            </div>
            <div>

                <br />
                <h4>Excluded users</h4>
                <IncludedUsers />
            </div>
            <br /><br />
            <div className='seg-data' >
                {/* <SegmentData /> */}
                <br />
                <h2>Include users who match these rules</h2>
                <br />
                <RuleNewAdd />

            </div>

            <br />

        </div>
    );
}

export default Reports;
