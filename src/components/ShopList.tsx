import React, { useState, useEffect } from 'react';
import { PASS, API_URL_LIST } from '../config';
import Preloader from './Preloader';
import ShopCard from './ShopCard';
import { md5 } from 'js-md5';

export default function ShopList() {
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const options: any = {
            method: 'POST',
            // mode: "cors",
            headers: {
                'X-Auth': md5(PASS + '_20240223'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'get_ids',
            }),
        };

        fetch(API_URL_LIST, options)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                // setItems([
                //     ...items,
                //     {
                //         id: '2',
                //         name: 8004,
                //         price: '666',
                //         img: '',
                //     },
                // ]);
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
                result.result.forEach((res) => {
                    // console.log(res);
                    setItems((items) => [
                        ...items,
                        {
                            id: res,
                            name: res,
                            price: res,
                            brand: res,
                        },
                    ]);
                    // console.log(items);
                });
                console.log(items);
                setLoading(false);
            })
            .catch((error) => {
                console.log('error', error);
            });

        console.log(md5(PASS + '_20240223'));
    }, []);

    return (
        <div className="items">
            {loading ? (
                <Preloader />
            ) : items.length ? (
                items.map((item) => <ShopCard key={item.id} {...item} />)
            ) : (
                <p>Не удалось загрузить список</p>
            )}
        </div>
    );
}
