import React from "react";

type Props = {
    id: string;
    name: string;
    price: string;
    brand: string;
};
export default function ShopCard({ id, name, price, brand }: Props) {
    return (
        <div id={'product-' + id} className="card">
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {name}
                </span>
                <p>Цена: {price} руб.</p>
            </div>
            {/*<div className="card-action">*/}
            {/*    <button className="btn-small">Купить</button>*/}
            {/*    <button className="btn-small right">Больше</button>*/}
            {/*</div>*/}
        </div>
    );
}
