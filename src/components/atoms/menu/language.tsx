import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const Language = () => {
  const { locale: routerLocale, locales, pathname, push } = useRouter();

  const [selectedLanguage, setSelectedLanguage] = useState(routerLocale);

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
  );
};

export default Language;
