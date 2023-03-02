import Heading from "./Heading";
import WorkBody from "./WorkBody";
import Samples from "./Samples";
import Extra from "./Extra";
import Footer from "./Footer";
import Random from "./Random";
import ScrollButton from './ScrollButton';


function Landing() {
  return (
    <div className="landing-div-body">
      <Heading />
      <div className="landing-text-div" id="under-line-div">
        <h1 className="title" id="under-line">
          EKRSL.Portfolio
        </h1>

        <div className="else-link" >
        <img className="bio-pic" src="image1.jpeg" alt=""></img>
          <p className="undertext">Software Engineer</p>
        </div>
      </div>
      <WorkBody />
      <Random />
      <Samples />
      <Extra />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default Landing;
