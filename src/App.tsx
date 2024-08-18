import { useState } from "react";
import { Drawer } from "../lib";
import "./App.css";

function App() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <Drawer show={showDrawer} hide={() => setShowDrawer(false)}>
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
      </div>
    </>
  );
}

export default App;
