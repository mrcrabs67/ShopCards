import React from 'react';

type Props = {
    id: string;
    name: string;
    price: string;
    brand: string;
};
export default function ShopCard({ id, name, price, brand }: Props) {
    return (
            <tr>
                <td>id</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{brand}</td>
            </tr>

    );
}
