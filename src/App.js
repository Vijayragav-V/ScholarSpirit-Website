import { ReactDOM } from "react-dom";
import { BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Impact from "./pages/About/Impact";
import OurTeam from "./pages/About/OurTeam";
import CarePackageProgram from "./pages/OurPrograms/CarePackageProgram";
import ScholarSpiritFund from "./pages/OurPrograms/ScholarSpiritFund";
import TutoringProgram from "./pages/OurPrograms/TutoringProgram";
import DonationDrives from "./pages/GetInvolved/DonationDrives";
import Volunteer from "./pages/GetInvolved/Volunteer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/care-package" element={<CarePackageProgram />} />
      <Route path="/scholarspirit-fund" element={<ScholarSpiritFund />} />
      <Route path="/tutoring-program" element={<TutoringProgram />} />
      <Route path="/donation-drives" element={<DonationDrives />} />
      <Route path="/volunteer" element={<Volunteer />} />
    </Routes> 
  )
}

export default App;
