import { RootState, StoreDispatch, StoreGetState } from '../configureStore';
import {
    DEFAULT_ITEMS_PER_PAGE,
    setErrorCode,
    setMaxPageNumber,
    setProducts,
    setProductsIds,
    setLoading,
} from './reducer';
import { API_URL_LIST, getPass } from '../../config';

// Good resource about what "thunks" are, and why they're used for writing Redux logic: https://redux.js.org/usage/writing-logic-thunks
export const fetchProductsIds =
    () => async (dispatch: StoreDispatch, getState: StoreGetState) => {
        try {
            const optionsIds: any = {
                method: 'POST',
                // referrerPolicy: 'unsafe_url',
                // mode: "cors",
                headers: {
                    'X-Auth': getPass(),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'get_ids',
                }),
            };

            console.log(getPass());
            fetch(API_URL_LIST, optionsIds)
                .then((response) => response.json())
                .then((result: { result: string[] }) => {
                    const maxPageCount: number = Math.ceil(
                        (result?.result?.length ?? 0) / DEFAULT_ITEMS_PER_PAGE
                    ); // округлить до целочисленного в большую сторону

                    dispatch(setProductsIds(result.result));
                    dispatch(setMaxPageNumber(maxPageCount));
                    dispatch(setErrorCode(null));
                })
                .catch((e) => {
                    // обработка ошибки, если надо
                    dispatch(setErrorCode(e.message));
                    dispatch(fetchProductsIds());
                });
        } catch (err) {
            console.error(err);
        }
    };

export const fetchProductsByIds =
    (productsIds: string[]) =>
    async (dispatch: StoreDispatch, getState: StoreGetState) => {
        try {
            const optionsItems: any = {
                method: 'POST',
                // referrerPolicy: 'unsafe_url',
                // mode: "cors",
                headers: {
                    'X-Auth': getPass(),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'get_items',
                    params: {
                        ids: productsIds,
                    },
                }),
            };

            fetch(API_URL_LIST, optionsItems)
                .then((response) => response.json())
                .then((result: { result: object[] }) => {
                    const resultItems = result?.result?.map((item: any) => ({
                        id: item.id,
                        name: item.product,
                        price: item.price,
                        brand: item.brand,
                    }));
                    dispatch(setProducts(resultItems));
                    dispatch(setErrorCode(null));
                    dispatch(setLoading(true));
                })
                .catch((e) => {
                    // обработка ошибки, если надо
                    dispatch(setErrorCode(e.message));
                    dispatch(fetchProductsByIds(optionsItems));
                });
        } catch (err) {
            console.error(err);
        }
    };
