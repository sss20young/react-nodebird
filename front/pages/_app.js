// _app.js를 부모컴포넌트로 사용하여 layout 공통부분을 사용함

import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    );
}

NodeBird.propTypes = {
    Component: PropTypes.elementType,
}

export default NodeBird;