# Simple React Drawer

# Introduction

A simple UI drawer for React apps.

_**Note: The Drawer conponent needs to have a parent element whose CSS position attribute is set to relative. The Drawer will be positioned relative to this parent element. Else it will be positioned relative to the entire viewport**_

# Installation

    npm install simple-react-drawer

# Usage

    import { Drawer } from "simple-react-drawer"


    function App() {
      const [showDrawer, setShowDrawer] = useState(false);

      return (
        <div>
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
        </div>
      );
    }

# Props

| Props    | Description                                                                                  |
| -------- | -------------------------------------------------------------------------------------------- |
| show     | Display or hide drawer. `boolean: required`                                                  |
| hide     | A function which hides the drawer by setting the value of show to false. `function:required` |
| position | The positon of the drawer on the screen. `string:"left"\|"right"` `default:"left"`           |

# Styling

To style the drawer, you can use the following classNames.

| className    | Component   |
| ------------ | ----------- |
| .rsd-drawer  | Drawer body |
| .rsd-overlay | Overlay     |
