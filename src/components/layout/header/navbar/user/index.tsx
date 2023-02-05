import { AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";

interface UserProps extends React.PropsWithChildren {
  url: string;
}

export const User: React.FunctionComponent<UserProps> = ({
  url,
}): JSX.Element => {
  return (
    <div className="relative p-1">
      <NavLink
        to={`${url}`}
        className={({ isActive }) =>
          isActive
            ? "text-light-hover dark:text-dark-hover"
            : "text-light-heading dark:text-dark-heading"
        }
      >
        <AiOutlineUser className="h-full" size={25} />
      </NavLink>
    </div>
  );
};
