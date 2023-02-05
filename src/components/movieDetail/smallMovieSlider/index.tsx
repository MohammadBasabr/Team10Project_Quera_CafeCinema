import { useEffect, useState } from "react";
import movies from "../../../movies";
import { FaCartArrowDown } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Tooltip } from "../tooltip";
import ImageComponent from "../imageTemplate";

import { Link } from "react-router-dom";
import { addToCardHandler } from "../../../utils/shoppingCartFunctions";

export interface SmallMovieSliderProps {}

const SmallMovieSlider: React.FunctionComponent<SmallMovieSliderProps> = () => {
  const allmovies = movies;
  let arayIdRandom: Array<String> = [];
  do {
    let randNum = Math.floor(Math.random() * allmovies.length + 1) + "";
    if (
      arayIdRandom.length === 0 ||
      !arayIdRandom.find((element) => element === randNum)
    ) {
      arayIdRandom.push(randNum);
    }
  } while (arayIdRandom.length < 3);

  return (
    <>
      <div className="flex flex-row items-center justify-around gap-2">
        {arayIdRandom.map((item, index) => {
          const current = allmovies.filter((movie) => movie.id === item)[0];

          return (
            <div
              key={index}
              className="group h-32 [perspective:1000px] lg:items-center lg:justify-center xl:w-[16rem]"
            >
              <div className="h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <ImageComponent
                    variant="smallSlider"
                    srcImage={current.slider}
                    altImage={current.title}
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-dark-primary/80 px-4 py-2 text-center text-dark-heading [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex w-full flex-col items-center justify-start gap-3">
                    <div>
                      <div>
                        <h1>{current.title}</h1>{" "}
                      </div>
                      <div className="text-dark-content">
                        {current.director}
                      </div>
                      <div className="flex flex-shrink flex-row items-center justify-center">
                        <div>
                          <span>{current.genre.join(", ")}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <Tooltip message={"Add to Cart!"}>
                        <FaCartArrowDown
                          onClick={() => {
                            addToCardHandler(+item - 1);
                          }}
                          size={20}
                          className="cursor-pointer text-dark-hover"
                        />
                      </Tooltip>
                      <Tooltip message={"Details!"}>
                        <Link to={`/movie/${+current.id - 1}`} key={current.id}>
                          <BiMessageSquareDetail
                            size={20}
                            className="cursor-pointer text-dark-hover"
                            id={current.id}
                          />
                        </Link>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SmallMovieSlider;
