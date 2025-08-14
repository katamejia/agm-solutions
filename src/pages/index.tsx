import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import AppLayout from "../components/organisms/AppLayout";
import MainBanner from "../components/molecules/home/MainBanner";
import AboutUs from "../components/molecules/home/AboutUs";
import Services from "../components/molecules/home/Services";
import FactsSection from "../components/molecules/home/FactsSection";
import ContactUs from "../components/organisms/home/ContactUs";
import Social from "../components/atoms/menu/Social";

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}

const LandingPage = ({ locale }: { locale: string }) => {
  const { locale: routerLocale } = useRouter();

  return (
    <AppLayout>
      <MainBanner routerLocale={routerLocale} />
      <AboutUs />
      <Services routerLocale={routerLocale} />
      <FactsSection />
      <section id="contact-us" className="form">
        <ContactUs />
        <Social />
      </section>
    </AppLayout>
  );
};
export default LandingPage;
