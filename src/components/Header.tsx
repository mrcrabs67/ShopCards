import React from 'react';
import { useDispatch } from 'react-redux';
import { setProductsIds } from '@store/products/reducer';

// несколько семантических header
export default function Header() {
    const dispatch = useDispatch();
    return (
        <header className="header">
            <a href="#" className="brand-logo">
                React Shop
            </a>
            <button
                onClick={() =>
                    dispatch(
                        setProductsIds([
                            '18e4e3bd-5e60-4348-8c92-4f61c676be1f',
                            'afdc8247-0331-4f28-b3f3-80779abb6242',
                            'cff4deef-30f5-4216-bfe3-50a61e4ab6bc',
                            'fe04135e-2d15-4343-acf4-9fcf29469ff7',
                            '8e9dfa55-e370-4469-9663-250ff3a647ac',
                            '1465f4e6-8b92-4678-9348-7d6db92bd6c9',
                        ])
                    )
                }
            >
                filterdispatch
            </button>
        </header>
    );
}
