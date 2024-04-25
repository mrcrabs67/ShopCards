import { md5 } from 'js-md5';
export const API_URL_LIST = 'https://api.valantis.store:40000/';

export const getPass = () => {
    let PASS = 'Valantis_';

    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    let dd: string = String(day),
        mm: string = String(month),
        yy: string = String(year);

    day < 10 ? (dd = '0' + dd) : dd;
    month < 10 ? (mm = '0' + mm) : mm;
    year < 10 ? (yy = '0' + yy) : yy;

    PASS = PASS + yy + mm + dd;
    return md5(PASS);
};
