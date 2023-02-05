import { useEffect, useState } from "react";
import { BsFilm } from "react-icons/bs";
import {
  AiOutlineAppstoreAdd,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
interface SliderFactoryProps extends React.PropsWithChildren {
  fig: string;
  genre: string;
  items: {
    id: string;
    poster: any;
    slider: any;
    title: string;
    year: string;
    genre: string[];
    rate: string;
    director: string;
    stars: string[];
    summary: string;
  }[];
}

const SliderFactory: React.FunctionComponent<SliderFactoryProps> = ({
  items = [],
}: SliderFactoryProps): JSX.Element => {
  const [index, setIndex] = useState(0);
  const sliderTimer = 4000;
  let timer: any;
  const mod = (n = 1, m = 1) => {
    let result = n % m;
    return result >= 0 ? result : result + m;
  };

  useEffect(() => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      nextSlide();
    }, sliderTimer);
  }, [index]);

  const nextHandler = () => {
    nextSlide();
    timer && clearTimeout(timer);
  };

  const prevHandler = () => {
    prevSlide();
    console.log(index);
    timer && clearTimeout(timer);
  };

  const nextSlide = () => {
    setIndex((index + 1) % items.length);
  };

  const prevSlide = () => {
    setIndex(index == 0 ? 9 : index - 1);
  };
  return (
    <div className="relative">
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
      <div className="h-[calc(100vh-96px)] bg-light-primary dark:bg-dark-primary sm:block md:h-[calc(100vh-176px)]">
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative h-full w-full justify-end overflow-hidden">
            {items.map((item, i) => {
              const indexLeft = mod(index - 1, items.length);
              const indexRight = mod(index + 1, items.length);
              let className = "";
              let links = "";
              if (i === index) {
                className =
                  "card w-[350px] h-fit bg-light-secondary z-10 dark:bg-dark-secondary transition-all duration-1000 absolute inset-0 m-auto object-cover opacity-100 rounded-2xl flex flex-col justify-center items-stretch p-4 scale-[0.6] xl:scale-90 card--active";
                links =
                  "opacity-1 flex flex-col gap-2 pt-3 justify-center items-center h-fit transition-all duration-1000";
              } else if (i === indexRight) {
                className =
                  "card w-[350px] h-fit bg-light-secondary dark:bg-dark-secondary transition-all duration-1000 absolute inset-0 m-auto object-cover opacity-30 rounded-2xl flex flex-col justify-center items-stretch p-4 translate-x-[125%] xl:scale-[0.6] card--right";
                links =
                  "opacity-0 flex flex-col gap-2 pt-3 justify-center items-center transition-all duration-1000";
              } else if (i === indexLeft) {
                className =
                  "card w-[350px] h-fit bg-light-secondary dark:bg-dark-secondary transition-all duration-1000 absolute inset-0 m-auto object-cover opacity-30 rounded-2xl flex flex-col justify-center items-stretch p-4 translate-x-[-125%] xl:scale-[0.6] card--left";
                links =
                  "opacity-0 flex flex-col gap-2 pt-3 justify-center items-center transition-all duration-1000";
              } else {
                className =
                  "card w-[350px] h-fit bg-light-secondary dark:bg-dark-secondary transition-all duration-1000 absolute inset-0 m-auto object-cover opacity-0 rounded-2xl flex flex-col justify-center items-stretch p-4";
                links =
                  "opacity-0 flex flex-col gap-2 pt-3 justify-center items-center transition-all duration-1000";
              }

              return (
                <div key={item.id} className={className}>
                  <img src={item.poster} alt="pics" className="rounded-xl" />
                  <div className={links}>
                    <h3 className="text-lg text-light-content dark:text-dark-content">
                      {item.title}
                    </h3>
                    <div className="flex w-full cursor-pointer justify-between gap-4">
                      <Link to={`/movie/${index}`}>
                        <div className="rounded-full bg-light-primary p-4 text-light-heading transition-all duration-300 hover:text-light-hover dark:bg-dark-primary dark:text-dark-heading hover:dark:text-dark-hover">
                          {<BsFilm size={25} />}
                        </div>
                      </Link>
                      <div className="rounded-full bg-light-primary p-4 text-light-heading transition-all duration-300 hover:text-light-hover dark:bg-dark-primary dark:text-dark-heading dark:hover:text-dark-hover">
                        <AiOutlineAppstoreAdd size={25} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute bottom-0 flex w-full items-center justify-center gap-2 p-3">
            {items.map((_, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setIndex(i);
                    clearTimeout(timer);
                  }}
                  className={`${
                    index === i
                      ? "bg-light-hover dark:bg-dark-hover"
                      : "bg-light-content dark:bg-dark-content"
                  } h-2 w-2 cursor-pointer rounded-sm`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderFactory;
