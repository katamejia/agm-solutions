import { Fragment, FC, ReactNode } from "react";
import Logo from "../atoms/menu/Logo";
import Menu from "../atoms/menu/Menu";
import FooterLegalSecurity from "../atoms/menu/FooterLegalSecurity";
import Language from "../atoms/menu/language";

const AppLayout: FC<{ children: ReactNode; isMainMenu?: boolean }> = ({ children, isMainMenu }) => {
  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <Logo />
          <Menu isMainMenu={isMainMenu} />
          <Language />
        </div>
      </header>

      <main>{children}</main>

      <FooterLegalSecurity />
    </Fragment>
  );
};

export default AppLayout;
