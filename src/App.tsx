import { ChangeEvent, useState } from "react";
import { Drawer } from "../lib";
import "./App.css";

function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [position, setPosition] = useState<"left" | "right">("left");
  const handlePositionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPosition(e.target.value as "left" | "right");
  };

  return (
    <>
      <Drawer
        show={showDrawer}
        position={position}
        hide={() => setShowDrawer(false)}
      >
        <p className="drawer-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          veritatis est ipsam omnis eligendi commodi veniam! Nesciunt cupiditate
          et qui perspiciatis distinctio eum aut aliquid saepe minus? Sed,
          repellendus consectetur.
        </p>
        <button onClick={() => setShowDrawer(false)}>&#x1F5D9;</button>
      </Drawer>
      <div>
        <h3>Click button to show drawer</h3>
        <button onClick={() => setShowDrawer(true)}>Show</button>
        <h3>Position</h3>
        <div>
          <input
            onChange={handlePositionChange}
            type="radio"
            id="left"
            value="left"
            name="position"
          />{" "}
          <label htmlFor="left">Left</label>
        </div>
        <div>
          <input
            onChange={handlePositionChange}
            type="radio"
            id="right"
            value="right"
            name="position"
          />{" "}
          <label htmlFor="right">Right</label>
        </div>
      </div>
    </>
  );
}

export default App;
