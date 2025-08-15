import { useTranslation } from "next-i18next";

const MainTitle = () => {
  const { t } = useTranslation("online-courses");

  return (
    <div className="main-title">
      <h1>{t("main_title")}</h1>
      <div className="title-underline"></div>
    </div>
  );
};

export default MainTitle;
