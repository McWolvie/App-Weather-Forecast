import "./Forecast.css";

const template = () => {
  return `
  <h2>Forecast</h2>
  <p>App Weather Forecast makes your life easier, knowing local weather changes at any time, so that your life is prepared.</p>
  `;
};

const Forecast = () => {
  document.querySelector("main").innerHTML = template();
};

export default Forecast;