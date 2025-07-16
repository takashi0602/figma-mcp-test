import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {/* Figmaから生成されたButtonコンポーネント */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "20px",
          alignItems: "center",
          maxWidth: "200px",
          margin: "0 auto",
        }}
      >
        <h2>🤖 Figmaから生成されたボタン</h2>
        <div style={{ width: "80px", height: "40px" }}>
          <Button color="blue">ボタン</Button>
        </div>
        <div style={{ width: "80px", height: "40px" }}>
          <Button color="red">ボタン</Button>
        </div>
        <div style={{ width: "80px", height: "40px" }}>
          <Button color="green">ボタン</Button>
        </div>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
