import React from "react";
import MainTitle from "@/src/components/atoms/receptionist-ai/MainTitle";
import AppLayout from "@/src/components/organisms/AppLayout";
import ContactUs from "@/src/components/organisms/home/ContactUs";
import PlansList from "@/src/components/molecules/receptionist-ai/PlansList";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "receptionist-ai"])),
    },
  };
}

const ReceptionistAI = () => {
  return (
    <AppLayout>
      <MainTitle />
      <PlansList />
      <ContactUs />
    </AppLayout>
  );
};

export default ReceptionistAI;
