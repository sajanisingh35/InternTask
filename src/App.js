import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [button, setButton] = useState([
    {
      className: "btn btn-danger",
      details: "default",
    },
    {
      className: "btn btn-success btn-sm",
      details: "Small",
    },
    {
      className: "btn btn-default",
      details: "Default",
    },
    {
      className: "border-dotted active",
      details: "Dashed",
    },

    {
      className: "shadow-box z-depth-",
      details: " BoxShadow",
    },
    {
      className: "btn btn-link",
      details: "Button",
    },
    {
      className: "btn btn-primary-outline",
      details: "Transparent Button",
    },
    {
      className: "btn btn-danger    btn-rounded",
      details: "Rounded Button",
    },
  ]);

  return (
    <>
      {button.map((val) => (
        <Button data={val} />
      ))}
    </>
  );
}

export default App;
