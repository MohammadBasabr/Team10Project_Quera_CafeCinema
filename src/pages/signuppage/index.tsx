import SignUp from "../../components/signUp";

interface SignUpPageProps extends React.PropsWithChildren {}

export const SignUpPage: React.FunctionComponent<
  SignUpPageProps
> = (): JSX.Element => {
  return <SignUp />;
};
