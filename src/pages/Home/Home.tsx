import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';

const Home = () => {
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
