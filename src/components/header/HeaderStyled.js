import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .headerLogo {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }

  .headerLogoIcon {
    width: 40px;
    fill: ${({ theme }) => theme.colors.text};

    &:hover {
      fill: ${({ theme }) => theme.colors.active};
    }
  }
`;
