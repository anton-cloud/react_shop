import styled from 'styled-components';

export const PhoneListStyled = styled.ul `
  display: flex;
  flex-wrap: wrap;
  
  .PhoneListItem {
    padding: 10px;
    width: 300px;
  }
  
  .PhoneImgWrap {
    display: flex;
    justify-content: center;
  }

  .PhoneImg {
    height: 300px;
  }
`