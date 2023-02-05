import movies from "../../../movies";
import { BsCaretDown, BsCaretUp, BsX } from "react-icons/bs";
import {
  deleteFromCardHandler,
  removeFromCardHandler,
} from "../../../utils/shoppingCartFunctions";

interface ShoppingCardItemProps extends React.PropsWithChildren {
  id: number;
  count: any;
}

export const ShoppingCardItem: React.FunctionComponent<
  ShoppingCardItemProps
> = ({ id, count }): JSX.Element => {
  const movie = movies[id];

  return (
    <div className="flex h-24 w-full items-center justify-between rounded-md bg-light-secondary text-light-content dark:bg-dark-secondary dark:text-dark-content lg:w-[70%]">
      <img
        className="h-full rounded-l-md"
        src={movie.poster}
        alt={movie.title}
      />
      <div className="flex w-full items-center justify-between p-5">
        <div>
          <h2 className="font-bold uppercase text-light-heading dark:text-dark-heading">
            {movie.title}
          </h2>
          <p>Genre: {movie.genre}</p>
          <p>Director: {movie.director}</p>
        </div>
        <div className="flex h-full items-center justify-center gap-6">
          <div>{count}</div>
          <div>
            <BsCaretUp
              onClick={() => {
                removeFromCardHandler(id);
              }}
              className="cursor-pointer hover:text-light-hover dark:hover:text-dark-hover"
              size={20}
            />
            <BsCaretDown
              onClick={() => {
                removeFromCardHandler(id);
              }}
              className="cursor-pointer hover:text-light-hover dark:hover:text-dark-hover"
              size={20}
            />
          </div>
        </div>
        <div>
          <p>
            Price: <span>{movie.price}</span>{" "}
          </p>
          <p>
            Total price: <span>{movie.price * count}</span>{" "}
          </p>
        </div>
      </div>
      <div
        onClick={() => {
          deleteFromCardHandler(id);
        }}
        className="flex h-full cursor-pointer items-center justify-center p-5"
      >
        <BsX size={30} />
      </div>
    </div>
  );
};
function useEfect() {
  throw new Error("Function not implemented.");
}
