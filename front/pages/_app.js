// _app.js를 부모컴포넌트로 사용하여 layout 공통부분을 사용함

import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import withRedux from 'next-redux-wrapper';
import { compose, createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';

const NodeBird = ({ Component }) => {
    return (
        // <Provider store={store}> 생략
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
};

NodeBird.propTypes = {
    Component: PropTypes.elementType,
};


// withRedux는 NodeBird의 prpos로 store를 넣어주는 역할을 함
export default withRedux((initialState, options) => {
    const middlewares = [];
    // const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
    const enhancer = compose(applyMiddleware(...middlewares), 
        typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,);
    const store = createStore(reducer, initialState, enhancer);
    return store;
})(NodeBird);