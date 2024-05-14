import React, { useState, useLayoutEffect } from "react";
import Header from "./components/Header/header";
import "slider-color-picker";
import Banner from "./components/Banner/banner";
import "./index.css";

export default function App() {
  const ref = React.useRef();
  const [color, setColor] = useState("#000");

  const onColorChange = (event) => {
    setColor(event.target.value);
  };

  useLayoutEffect(() => {
    ref.current.addEventListener("change", onColorChange);
  }, [ref]);

  return (
    <>
    <Header color={color} />
    <slider-color-picker
      ref={ref}
      onChange={onColorChange}
    ></slider-color-picker>
    <Banner color={color}/>

    </>
  );
}
