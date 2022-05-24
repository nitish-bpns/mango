import React from 'react';
import SegmentData from './SegmentData';
import './../styles/reports.css'

function Reports() {
    return (
        <div className='reports'>
            <div className='segment-header' >
                <h1>Mango Users</h1>
            </div>
            <hr /><br />
            <div className='seg-data' >
                <SegmentData />
            </div>
        </div>
    );
}

export default Reports;
