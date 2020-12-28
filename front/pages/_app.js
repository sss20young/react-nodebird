// _app.js를 부모컴포넌트로 사용하여 layout 공통부분을 사용함

import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withReduxSaga from 'next-redux-saga';

import AppLayout from '../components/AppLayout';
import wrapper from '../store/configureStore';

const NodeBird = ({ Component, pageProps }) => {
    return (
        // <Provider store={store}> 생략
        <> 
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css" />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};

NodeBird.getInitialProps = async (context) => { // context는 next가 넘겨준 것
    const { ctx, Component } = context;
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
}

// withRedux는 NodeBird의 prpos로 store를 넣어주는 역할을 함
export default wrapper.withRedux(withReduxSaga(NodeBird));