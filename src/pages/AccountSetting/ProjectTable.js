import React, { useState } from 'react';
import styles from './../../styles/home.module.css';
import { Link } from 'react-router-dom';
import { ProjectData } from './ProjectData';


function ProjectTable(props) {

    const filteredProjectData = ProjectData.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })



    return (
        <div>
            <div className={styles.homeTop}>

                <div className="px-4 sm:px-6 lg:px-8">

                    <div className="mt-8 flex flex-col">
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="py-3.5 pl-5 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                    Name<br />
                                                    <div className={styles.tblHead}> Tag</div>
                                                </th>
                                                <th scope="col" className="px-8 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Update
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Status
                                                </th>

                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-black-500">
                                                    Environment
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {ProjectData.map((item, index) => {

                                                return (

                                                    <tr key={index}>
                                                        <td className="pt-4 whitespace-nowrap py-1 pl-4 pr-3 text-lg font-medium text-blue-900 sm:pl-6">
                                                            <b>{item.name}</b>

                                                            <br />
                                                            <div className={styles.tblHead}>
                                                                {item.tag}
                                                            </div>
                                                        </td>

                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            {item.update}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            {item.status}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            {item.environment}
                                                        </td>


                                                        {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                                Edit<span className="sr-only">, {person.name}</span>
                                                            </a>
                                                        </td> */}
                                                    </tr>

                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>
                        <br />

                    </div>

                </div>


            </div>

        </div >
    )
}

export default ProjectTable;