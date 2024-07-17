import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="Footerprops">
      <ul>
        <li className="footerInfo">
          <a href="#" target="_blank">
            Algemene voorwaarden
          </a>
        </li>
        <li className="footerInfo">
          <a href="#" target="_blank">
            Cookie policy
          </a>
        </li>
        <li className="footerInfo">
          <a href="mailto:hello@esmeezootjes.nl">Get in touch</a>
        </li>
        <li className="footerInfo">
          <a href="https://nl.linkedin.com/in/esmeezootjes" target="_blank">
            Esmée Zootjes
          </a>
        </li>
      </ul>
    </div>
  );
}
