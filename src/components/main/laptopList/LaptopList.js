import React from 'react'
import data from '../../../data';
import Section from '../../section/Section';
import LaptopListItem from './laptopListItem/laptopListItem';

const LaptopList = () => {
    return (
        <Section title='laptops'>
        <ul className='LaptopList'>
            {data.laptops.map((laptopItem)=><LaptopListItem laptopItem={laptopItem} key={laptopItem.id}/>)}
        </ul>
        </Section>
    );
}

export default LaptopList;