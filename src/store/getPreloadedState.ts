import { PartialRootState } from './configureStore';

import { initialProductsState, ProductsState } from './products/reducer';

const getPreloadedProductsState = (): ProductsState => {
    return {
        ...initialProductsState,
    };
};

const getPreloadedState = (): PartialRootState => {
    return {
        products: getPreloadedProductsState(),
    };
};

export default getPreloadedState;
