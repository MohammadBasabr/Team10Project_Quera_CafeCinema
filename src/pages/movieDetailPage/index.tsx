import { useParams } from "react-router-dom";
import MovieDetails from "../../components/movieDetail";

interface MovieDetailPageProps extends React.PropsWithChildren {}

export const MovieDetailPage: React.FunctionComponent<
  MovieDetailPageProps
> = (): JSX.Element => {
  const params = useParams();

  const id: number = params.id ? +params.id : 1;

  return <MovieDetails movieId={id} />;
};
