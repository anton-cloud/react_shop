import React from 'react';
import data from '../../data';
import LaptopList from './laptopList/LaptopList';
import PhoneList from './phoneList/PhoneList';

const Main = () => {
    return (
        <>
        <PhoneList phones={data.phones}/>
        <LaptopList laptop={data.laptops}/>
        </>
    );
}

export default Main;