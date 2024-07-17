import "../styles/Header.css";

function Header() {
  return (
    <div className="Headerprops">
      <p className="pick-up-line">Esmée Zootjes</p>
      <p className="intro">
        {" "}
        Based in Berlin <br />
        Germany
      </p>
      <p className="intro">
        Currently working at
        <br />{" "}
        <a href="https://centraalbeheer.nl/zakelijk" target="_blank">
          Centraal Beheer - Achmea
        </a>
      </p>
      <p className="intro">
        Available from <u>01.06.23</u>
        <br />
        <a href="mailto:hello@esmeezootjes.nl">Get in touch</a>
      </p>
    </div>
  );
}

export default Header;
