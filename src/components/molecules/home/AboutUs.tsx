import { useTranslation } from "next-i18next";
import { useEffect } from "react";

const AboutUs = () => {
  const { t } = useTranslation("home");

  (useEffect(() => {
    const images = document.querySelectorAll(".image-slideshow img");
    let currentIndex = 0;

    function showNextImage() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
    }

    const interval = images.length > 0 ? setInterval(showNextImage, 3000) : null;

    return () => {
      if (interval) clearInterval(interval);
    };
  }),
    []);

  return (
    <section id="about-us" className="about-section">
      <div className="container">
        <h3 className="section-title">{t("about_us_section.about_us_title")}</h3>
        <div className="title-underline"></div>
        <p className="about-text">
          {t("about_us_section.about_us_text")}
          <br />
          {t("about_us_section.about_us_two_text")}
        </p>
      </div>
      <div className="image-slideshow">
        <img src="img/img1.jpg" alt="About Us" className="active" />
        <img src="img/img2.jpg" alt="About Us" />
        <img src="img/img3.jpg" alt="About Us" />
      </div>
    </section>
  );
};

export default AboutUs;
