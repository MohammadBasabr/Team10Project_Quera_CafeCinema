import Contact from "../../components/contact";

interface ContactPageProps extends React.PropsWithChildren {}

export const ContactPage: React.FunctionComponent<
  ContactPageProps
> = (): JSX.Element => {
  return <Contact />;
};
