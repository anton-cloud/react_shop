import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000b2;
  z-index: 1200;
  overflow: auto;

  .Modal {
    position: relative;
    background-color: #3d3d3d;
    border-radius: 14px;
    overflow: hidden;
  }

  .modalIcon {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .modalBtn {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    fill: #504f4f;
  }
  .modalBtn:hover {
    fill: #819ff5;
  }
`;

