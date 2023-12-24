import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css"
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";


/*export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Impact" element={<Impact />} />
          <Route path="OurTeam" element={<OurTeam />} />
          <Route path="CarePackageProgram" element={<CarePackageProgram />} />
          <Route path="ScholarSpiritFund" element={<ScholarSpiritFund />} />
          <Route path="TutoringProgram" element={<TutoringProgram />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals*/

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)