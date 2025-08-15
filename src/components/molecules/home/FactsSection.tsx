import { useEffect } from "react";
import { useTranslation } from "next-i18next";


const FactsSection = () => {
    const { t } = useTranslation("home");
    
    const factsList: any = t("facts_section.facts_list", {
        returnObjects: true,
      });
      
  // Animate numbers on scroll (intersection observer)
  useEffect(() => {
    const factNumbers = document.querySelectorAll(".fact-number");

    function animateFactNumbers() {
      factNumbers.forEach((number) => number.classList.remove("animate"));
      factNumbers.forEach((number, index) => {
        setTimeout(() => {
          number.classList.add("animate");
        }, index * 500);
      });
    }

    const factsSection = document.querySelector(".facts-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateFactNumbers();
          }
        });
      },
      { threshold: 0.5 },
    );

    if (factsSection) observer.observe(factsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="facts-section">
      <div className="container">
        <h3 className="section-title">{t("facts_section.facts_section_title")}</h3>
        <div className="facts-underline"></div>
        <div className="facts-grid">
          {factsList?.map((fact: any) => (
            <div className="fact-item">
              <span className="fact-number">{fact.fact_number}</span>
              <p className="fact-description">{fact.fact_description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
