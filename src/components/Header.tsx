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
        <a href="https://www.klarso.com/" target="_blank">
          Klarso GmbH
        </a>
      </p>
      <p className="intro"> 
        Available for smaller Projects 
        <br />
        <a href="mailto:hello@esmeezootjes.nl">Get in touch</a>
      </p>
    </div>
  );
}

export default Header;
