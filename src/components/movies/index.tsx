import movies from "../../movies";
import SliderFactory from "./sliderFactory";

const Album = (): JSX.Element => {
  return (
    <section className="h-full select-none bg-light-primary dark:bg-dark-primary">
      <SliderFactory fig="0" genre="" items={movies} />
    </section>
  );
};
//
export default Album;
