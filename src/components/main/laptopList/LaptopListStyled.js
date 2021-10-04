import styled from 'styled-components';

export const LaptopListStyled = styled.ul `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;;
  
  .LaptopListItem {
    padding: 10px;
    width: 400px;
  }
  
  .LaptopImgWrap {
    display: flex;
    justify-content: center;
  }

  .LaptopImg {
    height: 200px;
  }
`