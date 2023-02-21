import {Routes, Route} from "react-router-dom";
import "./index.css";
import Heading from "./Heading";
import Menu from "./Menu";
import Landing from "./Landing";
import MenuHeader from "./Menu-Header";
import WorkBody from "./WorkBody";
import Samples from "./Samples";
import Extra from "./Extra";
import Footer from "./Footer";
import Random from "./Random";
// import Clock from "./Clock";

import ScrollButton from './ScrollButton';
// import { Button } from '.Styles';

function App() {
  return (
  
    <Routes>
      
      <Route path="/" element={<Landing />} />
      <Route path="/Heading" element={<Heading />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/MenuHeader" element={<MenuHeader />} />
      <Route path="/WorkBody" element={<WorkBody />} />
      <Route path="/Samples" element={<Samples />} />
      <Route path="/Extra" element={<Extra />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Random" element={<Random />} />
      <Route path="/ScrollButton" element={<ScrollButton />} />

      {/* <Route path="/Clock" element={<Clock />} /> */}

      
      
    </Routes>
  );
}

export default App;
