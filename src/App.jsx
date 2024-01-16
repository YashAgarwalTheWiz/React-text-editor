import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [htmlcode, sethtmlcode] = useState("");
  const [csscode, setcsscode] = useState("");
  const [jscode, setjscode] = useState("");
  console.log(htmlcode);
  console.log(csscode);
  console.log(jscode);

  const handleoutput = (e) => {
    const iframe = document.getElementById("output");
    iframe.contentDocument.body.innerHTML =
      htmlcode + "<style>" + csscode + "</style>";
    iframe.contentWindow.eval(jscode);
  };
  return (
    <div className="playground">
      <div className="left">
        <label>HTML</label>
        <textarea
          name="html"
          onChange={(e) => sethtmlcode(e.target.value)}
        ></textarea>
        <label>CSS</label>
        <textarea
          name="css"
          onChange={(e) => setcsscode(e.target.value)}
        ></textarea>
        <label>javascript</label>
        <textarea
          name="javascript"
          onChange={(e) => setjscode(e.target.value)}
        ></textarea>
      </div>
      <div className="right">
        <button onClick={handleoutput}>Run</button>
        <iframe id="output"></iframe>
      </div>
    </div>
  );
};

export default App;
