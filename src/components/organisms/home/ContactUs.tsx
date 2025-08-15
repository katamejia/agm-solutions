import { useTranslation } from "next-i18next";
import { Fragment } from "react";
import Social from "../../atoms/menu/Social";

const ContactUs = () => {
  const { t } = useTranslation("common");

  const contactForm: any = t("contact_form.contact_form_items", {
    returnObjects: true,
  });
  return (
    <section id="contact-us" className="form">
      <div>
        <h2>{t("contact_form.contact_form_title")}</h2>
        <div className="form-underline"></div>
        <form className="form-form">
          <ul className="form-fields">
            <li>
              {contactForm.map((item: any) => (
                <Fragment key={item.label}>
                  <label className="form-name">{item.label}</label>
                  {(item.type === "email" || item.type === "text") && (
                    <input type={item.type} placeholder={item.placeholder} />
                  )}
                  {item.type === "textarea" && <textarea placeholder={item.placeholder} />}
                </Fragment>
              ))}
            </li>
            <li>
              <button type="submit" className="form-button">
                {t("contact_form.contact_form_button_text")}
              </button>
            </li>
          </ul>
        </form>
      </div>
      <Social />
    </section>
  );
};

export default ContactUs;
