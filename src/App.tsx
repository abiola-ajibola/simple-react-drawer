import { useState } from "react";
import { Drawer } from "../lib";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <Drawer show={showDrawer} hide={() => setShowDrawer(false)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        veritatis est ipsam omnis eligendi commodi veniam! Nesciunt cupiditate
        et qui perspiciatis distinctio eum aut aliquid saepe minus? Sed,
        repellendus consectetur.
      </Drawer>
      <div>
        <button onClick={() => setShowDrawer(true)}>Show</button>
        <a href="https://vitejs.dev" target="_blank">
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
