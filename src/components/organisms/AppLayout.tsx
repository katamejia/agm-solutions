import { Fragment, FC, ReactNode } from "react";
import Logo from "../atoms/menu/Logo";
import Menu from "../atoms/menu/Menu";
import FooterLegalSecurity from "../atoms/menu/FooterLegalSecurity";

const AppLayout : FC<{children: ReactNode}>= ({children}) => {
  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <Logo />
          <Menu />
        </div>
      </header>

      <main>
        {children}
      </main>

      <FooterLegalSecurity />
    </Fragment>
  );
};

export default AppLayout;
