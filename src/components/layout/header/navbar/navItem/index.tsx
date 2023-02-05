import React, { MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps extends React.PropsWithChildren {
  title: string;
  url?: string;
  onClick?: MouseEventHandler;
}

export const NavItems: React.FunctionComponent<NavItemProps> = ({
  title,
  url,
  onClick,
}): JSX.Element => {
  return (
    <li
      onClick={onClick}
      className="cursor-pointer select-none font-bold uppercase transition-all duration-300 hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover"
    >
      <NavLink
        to={`${url}`}
        className={({ isActive }) =>
          isActive
            ? "text-light-hover dark:text-dark-hover"
            : "text-light-content dark:text-dark-content"
        }
      >
        {title}
      </NavLink>
    </li>
  );
};
