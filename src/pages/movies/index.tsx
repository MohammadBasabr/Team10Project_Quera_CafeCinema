import Movies from "../../components/movies";

interface MoviesPageProps extends React.PropsWithChildren {}

export const MoviesPage: React.FunctionComponent<
  MoviesPageProps
> = (): JSX.Element => {
  return <Movies />;
};
