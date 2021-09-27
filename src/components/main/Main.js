import React from 'react';
import data from '../../data';
import LaptopList from './laptopList/LaptopList';
import { MainContainer } from './MainStyled';
import PhoneList from './phoneList/PhoneList';

const Main = () => {
    return (
      <MainContainer>
        <PhoneList phones={data.phones}/>
        <LaptopList laptop={data.laptops}/>
      </MainContainer>
    );
}

export default Main;