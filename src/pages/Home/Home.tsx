import React, { useEffect } from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsIds } from '@store/products/thunks';
import { getPass } from '../../config';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductsIds()); // вызов один раз
        console.log('pass = ', getPass());
        return () => {
            // код при размонтировании компонента
        };
    }, [dispatch]);

    return (
        <ErrorBoundary>
            <div className="App">
                <Header />
                <Content />
                <Footer />
            </div>
        </ErrorBoundary>
    );
};

export default Home;
