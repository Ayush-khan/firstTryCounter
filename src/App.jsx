// import CounterApp from "../src/components/CounterApp.jsx";
import ChartsStudent from "./ChartsStudent.jsx";
// main app component here Now seteded is the main app is the counter aap final
function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          border: "4px solid green",
          width: "66%",
        }}
      >
        <ChartsStudent />
      </div>

      {/* <CounterApp /> */}
    </>
  );
}

export default App;
