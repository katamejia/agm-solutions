import { FC, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const MainBanner: FC<{ routerLocale: string | undefined }> = ({ routerLocale }) => {
  const { t } = useTranslation("home");

  //title animation
  useEffect(() => {
    const title: any = document.querySelector(".title");
    if (!title) return;

    let lastScrollTop = 0;
    let isAnimating = false;

    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (isAnimating || Math.abs(scrollTop - lastScrollTop) <= 50) return;

      isAnimating = true;
      title.classList.add("fade-out");
      title.classList.remove("fade-in");

      setTimeout(() => {
        title.classList.remove("fade-out");
        title.classList.add("fade-in");
        setTimeout(() => {
          isAnimating = false;
        }, 1000);
      }, 1000);

      lastScrollTop = scrollTop;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main-content">
      <div className="container">
        <h2 className="title">
          {t("main.main_title")}
          <br />
          {t("main.main_subtitle")}
        </h2>
        <Link locale={routerLocale} href="#contact-us" className="contact-button">
          {t("main.button_text")}
        </Link>
      </div>
    </div>
  );
};

export default MainBanner;
