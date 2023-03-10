interface HeaderProps extends React.PropsWithChildren {}
const Header: React.FunctionComponent<HeaderProps> = (): JSX.Element => {
  return (
    <header className="hidden h-20 w-full select-none items-center justify-center gap-2 bg-light-primary text-4xl font-bold uppercase text-light-heading dark:bg-dark-primary dark:text-dark-heading md:flex">
      <h1>Cinema Cafe</h1>
    </header>
  );
};

export default Header;
