import React, { useEffect } from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import { useSelector, useDispatch } from 'react-redux'
import {fetchProductsIds} from "@store/products/thunks";

// семантика нарушена, в хэдере контент и футер
const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductsIds()); // вызов один раз
        return () => {
            // код при размонтировании компонента
        }
    }, [dispatch]);

    return (
        <ErrorBoundary>
            <div className="App">
                <header className="App-header">
                    <Header />
                    <Content />
                    <Footer />
                </header>
            </div>
        </ErrorBoundary>
    );
};

export default Home;
