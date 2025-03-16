import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navigation">
        <ul className="navbar">
          <li>
            <a className="navbar-home" href="/" title="home" id="home-button">
              Esmée Zootjes
            </a>
          </li>
          <li>Based in Berlin - Germany</li>
          <li>
            Currently working on:
            <a href="https://www.klarso.com/" target="_blank">
            Klarso GmbH
            </a>
          </li>
          <li>
            Available for small projects
            <a href="mailto:hello@esmeezootjes.nl" title="getintouchbutton">
              get in touch
            </a>
          </li>
          <div className="navbar-links">
            <li>
              <a className="nav-link" href="/About" title="about">
                about
              </a>
            </li>
            <li className="navbar-links">
              <a className="nav-link" href="/Work" title="about">
                work
              </a>
            </li>
            <li className="navbar-links">
              <a
                className="nav-link"
                href="mailto:hello@esmeezootjes.nl"
                title="contactbutton"
              >
                contact
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
