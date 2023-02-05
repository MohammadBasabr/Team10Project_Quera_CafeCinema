import React from "react";
import { Link } from "react-router-dom";

interface FooterProps extends React.PropsWithChildren {}

const Footer: React.FunctionComponent<FooterProps> = (): JSX.Element => {
  return (
    <footer className="fixed bottom-0 z-40 flex h-12 w-full items-center justify-center bg-light-secondary p-5 text-sm text-light-content dark:bg-dark-secondary dark:text-dark-content">
      <div className="flex w-full justify-center md:justify-between">
        <div className="uppercase">
          designed with{" "}
          <span className="text-light-hover dark:text-dark-hover"> ❤ </span>
          by
          <span className="font-bold text-light-hover dark:text-dark-hover">
            <Link to="/about"> mad frogs</Link>
          </span>
        </div>
        <div className="hidden md:block">
          First Front-End Bootcamp at{" "}
          <a
            className="uppercase text-[#009cc6]"
            target="_blank"
            href="https://quera.org/"
          >
            quera
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
