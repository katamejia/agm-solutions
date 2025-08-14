import React from "react";
 


const plans = [
  {
    name: "BASIC",
    price: "$299 USD / mes",
    features: [
      "Q&A",
      "Appointment booking",
      "SMS - Call summary / app date",
      "Web reports",
    ],
  },
  {
    name: "PROFESSIONAL",
    price: "$499 USD / mes",
    features: [
      "All Basic",
      "CRM Integration",
      "Personal Assistant",
      "Appointment booking",
    ],
  },
  {
    name: "ENTERPRISE",
    price: "$1000 USD / mes",
    features: [
      "All Professional",
      "Authentication",
      "Custom flows",
      "API Access",
    ],
  },
];

const ReceptionistAI = () => {
  return (
    <div lang="en">
      {/* ---------- Header ---------- */}
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

      {/* ---------- Planes de IA ---------- */}
      <section className="IA">
        <div>
          <h1>AI-Powered Receptionist Assistant</h1>
          <div className="title-underline"></div>
        </div>

        <div className="IA-plan">
          {plans.map((plan, idx) => (
            <div className="IA-plan-details" key={idx}>
              <h2>{plan.name}</h2>
              <p>{plan.price}</p>
              <ul>
                {plan.features.map((feat, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i> {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Formulario de contacto + Redes ---------- */}
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
                  <label className="form-name">Message</label>
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
                  <img src="img/iconos/whatsapp.png" alt="Whatsapp AGM" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61577210383492" target="_blank" rel="noreferrer">
                  <img src="img/iconos/facebook.png" alt="Facebook AGM" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <img src="img/iconos/linkedin.png" alt="LinkedIn AGM" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/agm_business_solution/" target="_blank" rel="noreferrer">
                  <img src="img/iconos/instagram.png" alt="Instagram AGM" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default ReceptionistAI;
