import styled from 'styled-components';

export const HeaderListStyled=styled.ul`

.HeaderList{
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({theme})=> theme.colors.text};
  text-transform: uppercase;

}
  
  @media (min-width: 768px) {
    display: flex;
    text-decoration: none;

  .HeaderList {
    display: flex;
    align-items: center;
    flex-direction: row;
    list-style: none;
    
  }

  .HeaderListLink{
    color: #fff;
    text-decoration: none;
  }

  .activeHeaderListLink{
    color: ${({theme})=>theme.colors.active};
  }


  .HeaderListItem {

    &:not(:last-child) {
      margin-right: 20px; 
    }
    &:hover {
      color: ${({theme})=> theme.colors.active};
    }
  }
}

`