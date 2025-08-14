import React from "react";


const courses = [
  {
    title: "Digital Transformation",
    code: "01B01C01",
    price: "$199 USD",
    teacher: "$399 USD",
    level: "Average",
    geo: "General",
    hours: "40",
  },
  {
    title: "Introduction to Digital Transformation",
    code: "01B01C02",
    price: "$99 USD",
    teacher: "$299 USD",
    level: "Average",
    geo: "General",
    hours: "10",
  },
  {
    title: "Customer Perspective in Digital Transformation",
    code: "01B01C04",
    price: "$99 USD",
    teacher: "$299 USD",
    level: "Average",
    geo: "General",
    hours: "20",
  },
  {
    title: "Internal Change in Digital Transformation",
    code: "01B01C05",
    price: "$149 USD",
    teacher: "$399 USD",
    level: "Average",
    geo: "General",
    hours: "30",
  },
  {
    title: "Agile Leadership in Digital Transformation",
    code: "01B01C06",
    price: "$99 USD",
    teacher: "$299 USD",
    level: "Average",
    geo: "General",
    hours: "15",
  },
  {
    title: "HR and Its Role in Digital Transformation",
    code: "01B01C07",
    price: "$99",
    teacher: "$299 USD",
    level: "Average",
    geo: "General",
    hours: "20",
  },
  {
    title: "Digital Transformation for SMEs",
    code: "01B03C01",
    price: "$399 USD",
    teacher: "$699 USD",
    level: "Average",
    geo: "General",
    hours: "115",
  },
  {
    title: "The Company in the Digital Economyl",
    code: "01B03C02",
    price: "$99 USD",
    teacher: "$299 USD",
    level: "Average",
    geo: "General",
    hours: "30",
  },
  {
    title: "Transforming the Customer Experience",
    code: "01B03C03",
    price: "$199 USD",
    teacher: "$399 USD",
    level: "Average",
    geo: "General",
    hours: "30",
  },
  {
    title: "Technologically Enabling the Transformation",
    code: "01B03C04",
    price: "$199 USD",
    teacher: "$399 USD",
    level: "Average",
    geo: "General",
    hours: "30",
  },
  {
    title: "Managing Change",
    code: "01B03C05",
    price: "$99 USD",
    teacher: "$299 USD",
    level: "Average",
    geo: "General",
    hours: "8",
  },
  {
    title: "Developing the Digital Transformation Plan",
    code: "01B03C06",
    price: "$99 USD",
    teacher: "$299 USD",
    level: "Average",
    geo: "General",
    hours: "25",
  },
];

const OnlineCourses = () => {
  return (
    <div lang="en">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="img/logo/logo.png" alt="Logo AGM" />
          </div>
          <div className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="#id_contactanos">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="courses">
        <div>
          <h1>Online Training Courses</h1>
          <div className="title-underline"></div>
        </div>
        <div className="courses-list">
          {courses.map((course, index) => (
            <div className="courses-list-details" key={index}>
              <h2>{course.title}</h2>
              <ul>
                <li><i className="fas fa-check-circle"></i> (Code: {course.code})</li>
                <li><i className="fas fa-check-circle"></i> {course.price}</li>
                <li><i className="fas fa-check-circle"></i> Access to an online teacher {course.teacher}</li>
                <li><i className="fas fa-check-circle"></i> Level: {course.level}</li>
                <li><i className="fas fa-check-circle"></i> Geographic scope: {course.geo}</li>
                <li><i className="fas fa-check-circle"></i> Hours: {course.hours}</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <section id="id_contactanos" className="form">
          <div>
            <h2>Contact Us</h2>
            <div className="form-underline"></div>
            <form className="form-form">
              <ul className="form-fields">
                <li>
                  <label className="form-name">Name</label>
                  <input type="text" placeholder="Nombre" />
                </li>
                <li>
                  <label className="form-name">Phone</label>
                  <input type="text" placeholder="+57 3154985621" />
                </li>
                <li>
                  <label className="form-name">Email</label>
                  <input type="email" placeholder="ejemplo@email.com" />
                </li>
                <li>
                  <label className="form-name">Mensaje</label>
                  <textarea placeholder="Déjanos un mensaje"></textarea>
                </li>
                <li>
                  <button type="submit" className="form-button">Send</button>
                </li>
              </ul>
            </form>
          </div>

          <div className="social">
            <p>Follow Us on Our Social Media</p>
            <ul className="social-networks">
              <li>
                <a href="https://wa.me/13364734969" target="_blank" rel="noreferrer">
                  <img src="img/iconos/whatsapp.png" alt="Logo whatsapp AGM" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61577210383492" target="_blank" rel="noreferrer">
                  <img src="img/iconos/facebook.png" alt="Logo Facebook AGM" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <img src="img/iconos/linkedin.png" alt="Logo Linkedin AGM" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/agm_business_solution/" target="_blank" rel="noreferrer">
                  <img src="img/iconos/instagram.png" alt="Logo Instagram AGM" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default OnlineCourses;
