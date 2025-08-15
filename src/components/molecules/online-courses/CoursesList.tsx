import { useTranslation } from "next-i18next";

const CoursesList = () => {
  const { t } = useTranslation("online-courses");
  const courses: any = t("courses", {
    returnObjects: true,
  });

  return (
    <div className="courses-list">
      {courses.map((course, index) => (
        <div className="courses-list-details" key={index}>
          <h2>{course.title}</h2>
          <ul>
            <li>
              <i className="fas fa-check-circle"></i> (Code: {course.code})
            </li>
            <li>
              <i className="fas fa-check-circle"></i> {course.price}
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Access to an online teacher {course.teacher}
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Level: {course.level}
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Geographic scope: {course.geo}
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Hours: {course.hours}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;
