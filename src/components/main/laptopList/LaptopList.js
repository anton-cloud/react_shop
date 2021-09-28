import React from 'react'
import Section from '../../section/Section';
import LaptopListItem from './laptopListItem/laptopListItem';

const LaptopList = ({laptops, addToCart}) => {
    return (
        <ul className='LaptopList'>
            {laptops.map((laptopItem)=><LaptopListItem laptopItem={laptopItem} addToCart={addToCart} key={laptopItem.id}/>)}
        </ul>
    );
}

export default LaptopList;