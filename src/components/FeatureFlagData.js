import React from 'react';

export const FeatureFlagData = [
    {
        name: 'Mango Users',
        tag: 'mango-users',
        date: '12-12-2022',
        requests: 'No recent requests',
        variation: 'false- off variation',
        status: 'ON',
        act1: 'archieve',
        act2: 'overview',
        address: '/userDetail',
    },
    {
        name: 'Lichi Users',
        tag: 'lichi-users',
        date: '11-11-2022',
        requests: 'Not recent requests',
        variation: 'true- off variation',
        status: 'OFF',
        act1: 'archieve2',
        act2: 'overview2',
        address: '/userDetail',
    },
    {
        name: 'Gun Users',
        tag: 'gun-users',
        date: '10-10-2022',
        requests: 'No no recent requests',
        variation: 'on variation',
        status: 'ON',
        act1: 'archieve3',
        act2: 'overview3',
        address: '/userDetail',
    },
];