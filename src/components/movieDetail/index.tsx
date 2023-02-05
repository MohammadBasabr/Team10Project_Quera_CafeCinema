import movies from "../../movies";
import { addToCardHandler } from "../../utils/shoppingCartFunctions";
import { Button } from "../base/button";
import ImageComponent from "./imageTemplate";
import SmallMovieSlider from "./smallMovieSlider";

interface MovieDetailsProps {
  movieId: number;
}
const MovieDetails: React.FunctionComponent<MovieDetailsProps> = ({
  movieId,
}: MovieDetailsProps) => {
  const currentMovie = movies[movieId];

  return (
    <section className="relative flex w-full select-none flex-col items-center justify-center bg-dark-secondary md:h-[calc(100vh-176px)] md:flex-row">
      <div className="absolute h-full w-full opacity-40">
        <ImageComponent
          variant="slider"
          srcImage={currentMovie.slider}
          altImage={currentMovie.title}
        />
      </div>

      <div className="flex w-full md:h-full md:w-1/3">
        <div className="z-10 flex h-full w-full flex-col justify-between bg-light-primary dark:bg-dark-primary">
          <div className="relative flex h-[calc(100vh-45px)] w-full flex-col justify-center md:h-full">
            <img
              src={movies[movieId].poster}
              alt={movies[movieId].title}
              className="absolute top-0 left-0 h-full w-full object-contain object-top"
            />
            <div className="absolute left-0 flex h-full w-full flex-col-reverse items-center text-light-content dark:text-dark-content">
              <div className="flex w-full flex-col items-center justify-between bg-light-primary p-4 dark:bg-dark-primary">
                <div className="w-[80%] md:w-full">
                  <div>
                    <span className="text-light-hover">year: </span>
                    {currentMovie.year}
                  </div>
                  <div className="flex gap-2">
                    <span className="text-light-hover">gener: </span>
                    <div>
                      <span>{currentMovie.genre.join(", ")}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-light-hover">stars: </span>
                    <div>
                      <span>{currentMovie.stars.join(", ")}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-light-hover">director: </span>
                    {currentMovie.director}
                  </div>
                </div>
                <div className="w-[80%] md:w-full">
                  <Button
                    title="Add to Cart"
                    onClick={() => {
                      addToCardHandler(movieId);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[calc(100vh-45px)] w-full flex-col items-center justify-between gap-5 border-light-primary py-10 dark:border-dark-primary md:h-full md:w-2/3">
        <div className="flex h-full w-[90%] flex-col items-center justify-center gap-6 p-10 text-dark-heading">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="flex w-full items-center justify-between border-b-2 border-b-dark-hover text-xl uppercase ">
              {currentMovie.title}
              <div className="">
                <span>{currentMovie.rate}/10</span>{" "}
                <span className="text-light-hover">IMDB</span>
              </div>
            </div>
          </div>
          <div className="w-full text-center text-2xl text-light-hover">
            "
            <span className="text-light-secondary">{currentMovie.summary}</span>
            "
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <SmallMovieSlider />
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
