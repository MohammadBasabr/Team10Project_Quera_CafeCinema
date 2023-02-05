import movies from "../../../movies";
import { addToCardHandler } from "../../../utils/shoppingCartFunctions";
import { Button } from "../../base/button";

interface MovieCartProps extends React.PropsWithChildren {
  id: number;
}

export const HeroMovieCart: React.FunctionComponent<MovieCartProps> = ({
  id,
}): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-5 rounded-xl bg-light-primary p-6 text-light-content dark:bg-dark-primary dark:text-dark-content md:flex-row md:items-stretch">
      <div>
        <h2 className="text-center text-lg font-bold uppercase text-light-heading dark:text-dark-heading md:hidden">
          {movies[id].title}
        </h2>
        <img
          className="w-52 rounded-md"
          src={movies[id].poster}
          alt={movies[id].title}
        />
        <div className="mt-1 hidden w-full flex-col gap-1 md:flex">
          <Button
            title="add to cart"
            onClick={() => {
              addToCardHandler(id);
            }}
          />
          <Button title="read more" to={`/movie/${id}`} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between md:w-96">
        <div className="flex w-full flex-col items-center gap-5">
          <h2 className="hidden text-center text-lg font-bold uppercase text-light-heading dark:text-dark-heading md:block">
            {movies[id].title}
          </h2>
          <div className="flex w-full justify-between">
            <h3 className="text-xl">{movies[id].year}</h3>
            <p>
              <span className="text-xl">{movies[id].rate}</span>
              /10
              <span className="ml-1 font-bold text-light-hover dark:text-dark-hover">
                IMDB
              </span>
            </p>
          </div>
          <p className="hidden text-justify md:block">{movies[id].summary}</p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className=" w-full text-left">
            <span className="mr-2 font-bold capitalize text-light-hover dark:text-dark-hover">
              director:
            </span>
            {movies[id].director}
          </div>
          <div className="hidden w-full  text-left md:block">
            <span className="mr-2 font-bold capitalize text-light-hover dark:text-dark-hover">
              stars:
            </span>
            {movies[id].stars.join(", ")}
          </div>
          <div className=" w-full text-left">
            <span className="mr-2 font-bold capitalize text-light-hover dark:text-dark-hover">
              genre:
            </span>
            {movies[id].genre.join(", ")}
          </div>
          <div className="mt-1 flex  w-full flex-col gap-1 md:hidden">
            <Button title="add to cart" />
            <Button title="read more" to={`/movie/${id}`} />
          </div>
        </div>
      </div>
    </div>
  );
};
