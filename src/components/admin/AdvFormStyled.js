import styled from 'styled-components';

export const AdvFormStyled = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;

.AdvFormWrap {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.AdvFormLabel:not(:first-child) {
  margin-top: 10px;
}

.AdvFormTextarea {
  width: 90%; /* Ширина поля в процентах */
  height: 150px; /* Высота поля в пикселах */
  resize: none; /* Запрещаем изменять размер */
}
`