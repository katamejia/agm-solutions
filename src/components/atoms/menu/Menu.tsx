import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

const Menu = () => {
  const { t } = useTranslation("home");
  const { locale: routerLocale, locales, pathname, push } = useRouter();
  const menuOptions = t("header", {
    returnObjects: true,
  });

  const [selectedLanguage, setSelectedLanguage] = useState("");

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
    const handleClick = (e) => {
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

  const onChangeLanguage = (selectedLanguage: string) => {
    setSelectedLanguage(selectedLanguage);
    const newUrl = {
      pathname: pathname,
    };
    push(newUrl, undefined, {
      locale: selectedLanguage,
    });
  };

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
      <div className="language-button">
        {locales?.map((language: string) => (
          <button
            className={`language-button-selection ${selectedLanguage === language ? "active-language" : ""}`}
            onClick={() => onChangeLanguage(language)}
            type="button"
          >
            {selectedLanguage === language && (
              <Image src="/img/iconos/language.gif" alt="language" width={20} height={20} />
            )}

            {language}
          </button>
        ))}
      </div>
    </Fragment>
  );
};

export default Menu;
