import React from 'react';
import IncludedUsers from '../components/TargetUsers/IncludedUsers';
import RuleNewAdd from '../components/RuleNewAdd';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FlagList from '../components/FlagList';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import RuleNew from '../components/RuleNew';
import Targeting from './users/Targeting';
import Variation from './users/Variation';

function UserDetail(props) {

    // const { index, itemName } = useParams()
    const location = useLocation()
    const { itemName } = location.state

    const tabs = [
        { name: 'Targeting', href: '/userDetail/{index}/targeting', current: true },
        { name: 'Variation', href: '/userDetail/{index}/variation', current: false },

    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <div className='userDetail'>

            <div className='segment-header' >

                <h1>
                    <Link to='/home' >
                        <u>Feature flags</u>
                    </Link>
                    <span style={{ color: 'grey', marginLeft: '0px' }}> / {itemName}</span>
                </h1>
                <h2 className="mt-5 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{itemName}</h2>
            </div>
            <div>
                {/* <div className="sm:hidden">

                    <select
                        id="tabs"
                        name="tabs"
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                        defaultValue={tabs.find((tab) => tab.current).name}
                    >
                        {tabs.map((tab) => (
                            <option key={tab.name}>{tab.name}</option>
                        ))}
                    </select>
                </div> */}
                <div className="hidden sm:block">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            {tabs.map((tab) => (
                                <Link
                                    key={tab.name}
                                    to={tab.href}
                                    className={classNames(
                                        tab.current
                                            ? 'border-indigo-500 text-indigo-600'
                                            : 'border-transparent text-black-500 hover:text-gray-700 hover:border-gray-300',
                                        'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg'
                                    )}
                                    aria-current={tab.current ? 'page' : undefined}
                                >
                                    {tab.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>









            <br />
            {/* 
            <Link to='/userDetail/{index}/targeting'>
                click for flaglist
            </Link>
            <br />
            <Link to='/userDetail/{index}/variation'>
                click for ruleNew
            </Link>

            <Routes>
                <Route path='/targeting' element={<Targeting />} />
                <Route path='/variation' element={<Variation />} />
            </Routes> */}
        </div >

    )
}

export default UserDetail;