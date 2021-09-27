import React from 'react';
import data from '../../../data';
import { HeaderListStyled } from './HeaderListStyled';


const HeaderList = () => {
    return (
        <HeaderListStyled>
        <ul className='HeaderList'>
           {data.header.map((headerItem)=><li className='HeaderListItem' key={headerItem}>
           {headerItem}
           </li>)} 
        </ul>
        </HeaderListStyled>
    );
}

export default HeaderList;