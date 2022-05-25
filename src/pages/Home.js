import React from 'react';
import AddNewUser from './AddUser';


function Home() {
    return (
        <div className='home'>
            <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                    <div className="ml-4 mt-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Feature flags
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Use this page to see all feature flags in this project. Select a flag to manage the environment-specific targeting and rollout rules.
                        </p>
                    </div>
                    <div className="ml-4 mt-4 flex-shrink-0">
                        <AddNewUser />
                    </div>
                </div>
            </div>
            <div><br />

            </div>



        </div>
    );
}

export default Home;
