import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";

const Menu = ({ isMainMenu }: any) => {
  const { t } = useTranslation(isMainMenu ? "home" : "common");

  const menuOptions:any = t("header", {
    returnObjects: true,
  });

  const { locale: routerLocale } = useRouter();

  //mobile menu
  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    const toggleNav = () => nav?.classList.toggle("active");
    const closeNav = (event: any) => {
      if (!nav?.contains(event.target) && !menuToggle?.contains(event.target)) {
        nav?.classList.remove("active");
      }
    };

    menuToggle?.addEventListener("click", toggleNav);
    document.addEventListener("click", closeNav);

    return () => {
      menuToggle?.removeEventListener("click", toggleNav);
      document.removeEventListener("click", closeNav);
    };
  }, []);

  //Click animation on the menu
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e:any) => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        document.querySelector(".nav")?.classList.remove("active");
      }
    };

    anchors.forEach((a) => a.addEventListener("click", handleClick));
    return () => anchors.forEach((a) => a.removeEventListener("click", handleClick));
  }, []);

  return (
    <Fragment>
      <div className="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className="nav">
        <ul>
          {menuOptions.map((option: any) => (
            <li>
              <Link locale={routerLocale} href={option.href}>
                {option.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Menu;
