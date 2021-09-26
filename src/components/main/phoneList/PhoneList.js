import React from 'react'
import Section from '../../section/Section';
import PhoneListItem from './phoneListItem.js/PhoneListItem';


const PhoneList = ({phones}) => {
    return (
        <Section title='Phones'>
        <ul className='PhoneList'>
            {phones.map((phoneItem)=><PhoneListItem phoneItem={phoneItem} key={phoneItem.id}/>)}
        </ul>
        </Section>
    );
}

export default PhoneList;