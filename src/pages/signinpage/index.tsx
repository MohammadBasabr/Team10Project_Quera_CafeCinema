import SignIn from "../../components/signIn";

interface SignInPageProps extends React.PropsWithChildren {}

export const SignInPage: React.FunctionComponent<
  SignInPageProps
> = (): JSX.Element => {
  return <SignIn />;
};
