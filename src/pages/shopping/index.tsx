import { ShoppingCard } from "../../components/shoppingCard";

interface ShoppingPageProps extends React.PropsWithChildren {}

export const ShoppingPage: React.FunctionComponent<
  ShoppingPageProps
> = (): JSX.Element => {
  return (
    <div className="flex h-[calc(100vh-96px)] w-screen select-none flex-col items-center justify-center bg-light-primary p-5 text-light-content dark:bg-dark-primary dark:text-dark-content md:h-[calc(100vh-176px)]">
      <h1 className="animate-pulse text-2xl uppercase">coming soon</h1>
    </div>
  );
};
