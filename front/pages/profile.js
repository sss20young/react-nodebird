import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Profile = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.9.2/antd.min.css"></link>
            </Head>
            <AppLayout>
                <div>Profile</div>
            </AppLayout>
        </>
    );
};

export default Profile;