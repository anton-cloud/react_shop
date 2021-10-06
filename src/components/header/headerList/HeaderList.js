import React from "react";
import { mainRoutes } from "../../../routes/mainRoutes";
import { HeaderListStyled } from "./HeaderListStyled";
import { NavLink } from "react-router-dom";

const HeaderList = () => {
  return (
    <HeaderListStyled>
      <ul className="HeaderList">
        {mainRoutes.map((headerItem) => (
          <li className="HeaderListItem" key={headerItem.path}>
            <NavLink
              exact={headerItem.exact}
              to={headerItem.path}
              className="HeaderListLink"
              activeClassName="activeHeaderListLink"
            >
              {headerItem.name}{" "}
            </NavLink>
          </li>
        ))}
      </ul>
    </HeaderListStyled>
  );
};

export default HeaderList;
