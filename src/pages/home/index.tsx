import { Slider } from "../../components/hero";

interface HomePageProps extends React.PropsWithChildren {}

export const Home: React.FunctionComponent<HomePageProps> = (): JSX.Element => {
  return <Slider />;
};
