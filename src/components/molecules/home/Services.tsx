import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FC } from "react";

const Services: FC<{ routerLocale: string | undefined }> = ({ routerLocale }) => {
  const { t } = useTranslation("home");

  const servicesList: any = t("pricing_section_our_services.services_list", {
    returnObjects: true,
  });

  return (
    <section id="services" className="pricing-section">
      <div className="container">
        <h3 className="section-title">{t("pricing_section_our_services.pricing_section_title")}</h3>
        <div className="section-title-underline"></div>
        <div className="pricing-grid">
          {servicesList?.map((service: any) => (
            <div className="pricing-plan">
              <h4 className="plan-title">{service.title}</h4>
              <p className="plan-description">{service.description}</p>
              <ul className="features-list">
                {service.items.map((item: any) => (
                  <li>
                    <i className="fas fa-check-circle"></i>
                    {item.name}
                  </li>
                ))}
              </ul>
              <Link locale={routerLocale} href={service.href} className="plan-button">
                {service.cta_button_text} <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
