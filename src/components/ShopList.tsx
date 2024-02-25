import React, { useState, useEffect } from 'react';
import { PASS, API_URL_LIST } from '../config';
import Preloader from './Preloader';
import ShopCard from './ShopCard';
import Table from './Table';
import { md5 } from 'js-md5';

export default function ShopList() {
    const [items, setItems] = useState<any[]>([]);
    const [elementsId, setElementsId] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const elements = [];

    const pages = [1, 2, 3, 4, 5];
    const currentPage = 3;

    useEffect(() => {
        const optionsids: any = {
            method: 'POST',
            // mode: "cors",
            headers: {
                'X-Auth': md5(PASS + '_20240225'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'get_ids',
            }),
        };

        fetch(API_URL_LIST, optionsids)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                // result.result.map((res) =>
                //     setItems([
                //         ...items,
                //         {
                //             id: res,
                //             name: res,
                //             price: res,
                //             brand: res,
                //         },
                //     ])
                // );
                // const length: number = result.result.length;

                // result.result.forEach((res) => {
                //     // debugger;
                //     // console.log(elementsId);
                //     setElementsId((elementsId) => [...elementsId, res]);
                // });
                // console.log('elements = ', elementsId);

                if (result.result.length > 0) {
                    for (let i = 0; i < 50; i++) {
                        elements.push(result.result[i]);
                    }
                }
                // console.log('elements = ', elements);

                // elements.length > 0
                //     ? elements.forEach((el) => {
                //           setItems((items) => [...items, {}]);
                //       })
                //     : (elements.length = 0);

                // console.log('length = ', length);
                // console.log(items);
                setLoading(false);

                //Запрашиваем данные для 50 элементов
                const optionsitems: any = {
                    method: 'POST',
                    // mode: "cors",
                    headers: {
                        'X-Auth': md5(PASS + '_20240225'),
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        action: 'get_items',
                        params: {
                            ids: elements,
                        },
                    }),
                };

                fetch(API_URL_LIST, optionsitems)
                    .then((response) => response.json())
                    .then((result) => {
                        console.log('Данные = ', result);
                        //
                        result.result.forEach((res) => {
                            // console.log(res);
                            setItems((items) => [
                                ...items,
                                {
                                    id: res.id,
                                    name: res.product,
                                    price: res.price,
                                    brand: res.brand,
                                },
                            ]);
                            // console.log(items);
                        });
                        //
                    })
                    .catch((error) => {
                        console.log('error', error);
                    });
            })
            .catch((error) => {
                console.log('error', error);
            });

        console.log(md5(PASS + '_20240225'));
    }, []);

    return (
        <div className="box_tbl_list">
            <div className="items">
                <Table />
                {loading ? (
                    <Preloader />
                ) : items.length ? (
                    items.map((item) => <ShopCard key={item.id} {...item} />)
                ) : (
                    <p>Не удалось загрузить список</p>
                )}
                <div className="pages"></div>

                {pages.map((page, index) => (
                    <span
                        key={index}
                        className={currentPage == page ? 'curent-page' : 'page'}
                    >
                        {page}
                    </span>
                ))}
            </div>
        </div>
    );
}
