import "./Home.css";

const template = () => {
  return `
  <h2>App weather forecast, your personal weather assistant</h2>
  <p>With App Weather Forecast, you can travel with confidence. It provides weather info and weather data browsing, accurate weather forecast...</p>
  `;
};

const Home = () => {
  document.querySelector("main").innerHTML = template();
};

export default Home;
