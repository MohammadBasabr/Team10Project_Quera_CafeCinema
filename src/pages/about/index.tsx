import { About } from "../../components/about";

interface AboutPageProps extends React.PropsWithChildren {}

export const AboutPage: React.FunctionComponent<
  AboutPageProps
> = (): JSX.Element => {
  return <About />;
};
