import Image from "../images/random.png";

const App = () => {
  return (
    <>
      <h1>
        Env: - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={Image} alt="test" />
      <h1>React test s</h1>
    </>
  );
};

export default App;
