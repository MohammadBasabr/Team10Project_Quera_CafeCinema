import { useEffect, useState } from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import movies from "../../movies";
import { HeroMovieCart } from "./slideCart";

interface SlideProps extends React.PropsWithChildren {}

export const Slider: React.FunctionComponent<SlideProps> = (): JSX.Element => {
  const [currnetSlide, setCurrentSlide] = useState(0);
  let sliderInterval: any;
  const autoPlay: boolean = true;
  const slideSpeed: number = 5000;

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    autoPlay && auto();
    return () => clearInterval(sliderInterval);
  }, [currnetSlide]);

  const slideHandler = () => {
    currnetSlide < movies.length - 1
      ? setCurrentSlide(currnetSlide + 1)
      : setCurrentSlide(0);
  };

  const setSlideHandler = (event: any) => {
    setCurrentSlide(event.target.id - 1);
  };

  const auto = () => {
    sliderInterval = setInterval(slideHandler, slideSpeed);
  };

  const nextHandler = () => {
    currnetSlide !== movies.length - 1
      ? setCurrentSlide(currnetSlide + 1)
      : setCurrentSlide(0);
  };

  const prevHandler = () => {
    currnetSlide !== 0
      ? setCurrentSlide(currnetSlide - 1)
      : setCurrentSlide(movies.length - 1);
  };

  return (
    <section className="relative h-[calc(100vh-96px)] w-full select-none bg-light-primary dark:bg-dark-primary md:h-[calc(100vh-176px)]">
      {movies.map((movie, index) => {
        return (
          <div
            key={index}
            className={`transition-opacity duration-1000 ${
              currnetSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              className="absolute top-0 left-0 h-full w-full object-cover object-center"
              src={movie.slider}
              alt={movie.title}
            />
            <div className="absolute bottom-5 left-0 hidden h-0.5 w-full backdrop-brightness-50 md:flex">
              <div
                className={`${
                  currnetSlide === index ? "w-0 animate-enlarge" : "w-full"
                }  h-full bg-light-hover `}
              ></div>
            </div>
          </div>
        );
      })}
      <div className="relative flex h-full w-full items-center justify-center md:justify-start">
        {movies.map((movie, index) => {
          return (
            <div
              key={index}
              className={`absolute ml-0 transition-all duration-300 md:ml-10 ${
                currnetSlide !== index
                  ? "-translate-x-full opacity-0"
                  : "translate-x-1 opacity-100"
              }`}
            >
              <HeroMovieCart id={currnetSlide} />
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-0 z-10 hidden h-5 w-full items-center justify-center gap-1 py-1 backdrop-brightness-50 md:flex">
        {movies.map((movie, index) => {
          return (
            <div
              onClick={setSlideHandler}
              key={movie.id}
              id={movie.id}
              className={`h-2 w-2 cursor-pointer rounded-sm ${
                currnetSlide !== index ? "bg-light-primary " : "bg-light-hover "
              }`}
            ></div>
          );
        })}
      </div>
      <div className="absolute top-1/2 z-20 flex w-full justify-between p-4 text-light-hover opacity-30 transition-all duration-500 hover:opacity-100 dark:text-dark-hover">
        <button
          className="cursor-pointer rounded-full bg-light-primary dark:bg-dark-primary"
          onClick={prevHandler}
        >
          <AiOutlineLeftCircle size={40} />
        </button>
        <button
          className="cursor-pointer items-center justify-center rounded-full bg-light-primary dark:bg-dark-primary"
          onClick={nextHandler}
        >
          <AiOutlineRightCircle size={40} />
        </button>
      </div>
    </section>
  );
};
