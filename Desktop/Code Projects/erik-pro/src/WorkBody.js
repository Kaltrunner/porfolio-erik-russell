// import { Mailto } from "react-mailto";

function WorkBody() {
  return (
    <div className="workbody-body-div">
      <p className="link">
        Reach out
        <br />
        <a className="tag" href="mailto:erikrussells@gmail.com?subject=Hello!">
          erikrussells@gmail.com
        </a>
      </p>
        <h1 className="bio-name" >Erik Russell</h1>
      <div className="bio-div">
        <div className="shape" >
            <p id="binary">01000001 00100000 01101100 01101111 01101110 01100111 00100000 01110100 01101001 01101101 01100101 00100000 01100001 01100111 01101111 00100000 01101001 01101110 00100000 01100001 00100000 01100111 01100001 01101100 01100001 01111000 01111001 00100000 01100110 01100001 01110010 00101100 00100000 01100110 01100001 01110010 00100000 01100001 01110111 01100001 01111001</p>
            <p id="binary" >||||||||  |||| ||| |||| | | ||| | | | </p>
            <p id="lines" >| ||| | | | ||| | | | |</p>
        </div>
        <p className="bio-div-text" >
          Hello! I am a graduate of FlatIron School, and have knowledge in full stack
          programming,<br/> although I focus on front end development.
          <br /> I have a reliable and consistent work ethic with experience in
          high volume and fast paced production.
          <br />I am currently expanding my knowledge of frontend software
          languages<br/> and building a body of work to express my skill set, styles,
          and compassion for engineering.
        </p>
      </div>
    </div>
  );
}

export default WorkBody;
