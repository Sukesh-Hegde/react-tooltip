import Tooltip from './Tooltip';


function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Tooltip text="Thanks for hovering! I'm a tooltip">
        <p
          style={{ textDecoration: "underline", textDecorationStyle: "dotted" }}
        >
          Hover over me!
        </p>
      </Tooltip>
    </div>
  );
}

export default App;
