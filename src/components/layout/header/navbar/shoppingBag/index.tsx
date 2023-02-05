import { AiOutlineShopping } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Badge } from "../badge";

interface ShoppingBagProps extends React.PropsWithChildren {
  url?: string;
}

export const ShoppingBag: React.FunctionComponent<ShoppingBagProps> = ({
  url,
}): JSX.Element => {
  return (
    <div className="relative cursor-pointer p-1">
      <NavLink
        to={`${url}`}
        className={({ isActive }) =>
          isActive
            ? "text-light-hover dark:text-dark-hover"
            : "text-light-heading dark:text-dark-heading"
        }
      >
        <AiOutlineShopping className="h-full" size={25} />
      </NavLink>
      <Badge value="2" />
    </div>
  );
};
