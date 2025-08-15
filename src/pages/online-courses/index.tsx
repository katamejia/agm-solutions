import React from "react";
import AppLayout from "@/src/components/organisms/AppLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ContactUs from "@/src/components/organisms/home/ContactUs";
import MainTitle from "@/src/components/atoms/online-courses/MainTitle";
import CoursesList from "@/src/components/molecules/online-courses/CoursesList";

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["online-courses", "common"])),
    },
  };
}

const OnlineCourses = () => {
  return (
    <AppLayout>
      <section className="courses">
        <MainTitle />
        <CoursesList />
      </section>
      <ContactUs />
    </AppLayout>
  );
};

export default OnlineCourses;
