import { useTranslation } from "next-i18next";

const FooterLegalSecurity = () => {
  const { t } = useTranslation("common");

  const footerSection: any = t("footer_section.footer_section_list", {
    returnObjects: true,
  });

  return (
    <footer className="footer-legal-security">
      <section>
        <h2>{t("footer_section.footer_section_title")}</h2>
      </section>
      <section className="footer-legal-security-content">
        {footerSection.map((list: any) => (
          <div className="footer-legal-security-content-item">
            <h3>{list.title}</h3>
            {list.items.map((item: any) => (
              <p>{item.name}</p>
            ))}
          </div>
        ))}
      </section>
    </footer>
  );
};

export default FooterLegalSecurity;
