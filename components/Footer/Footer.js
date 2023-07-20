import "./Footer.css";

const template = () => {
  return `
  <p>Data provided by <em>Tomorrow.io</em> - Fundación Once - <em>McWolvie</em> - 2023
  </p>
  `;
};

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
};

export default Footer;