import React from 'react';
import ShopCard from './ShopCard';
import { useSelector } from 'react-redux';
import { productsSelector } from '../store/products/selectors';

export default function TableComp() {
    const products = useSelector(productsSelector);

    return (
        <table>
            <thead>
                <tr>
                    <th className="text-center">Номер</th>
                    <th className="text-center">Название</th>
                    <th className="text-center">Цена</th>
                    <th className="text-center">Бренд</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product: any) => (
                    <ShopCard key={product.id} {...product} />
                ))}
            </tbody>
        </table>
    );
}
