// import { Link } from "react-router-dom";

function Samples() {
    return (
        <div className="samples-body-div" >
            <div className="samples-text">
                <p className="sample-p" >other work</p>
                <h1 className="sample-h1" >See other websites<br/>by Erik Russell.</h1>
            </div>

            <div className="sample-work-div" >

            <a target="_blank" href="https://kaltrunner.github.io/agreensquare.github.io/" > <div className="sample-work-example" >
                <img className="project-1" src="Screenshot 2023-02-21 at 11.13.26 AM.png" alt="green square project website"/>
                </div></a>
                

                <div className="sample-work-example" >
                    <img className="project-1" src="Screenshot 2023-02-21 at 11.54.40 AM.png" alt="" />
                </div>

                <div className="sample-work-example" >
                    <img className="project-1" src="Screenshot 2023-02-21 at 12.14.33 PM.png" alt=""/>
                </div>

                <div className="sample-work-example" >
                    <img className="project-1" src="Screenshot 2023-02-21 at 12.11.01 PM.png" alt=""/>
                </div>

                {/* <div className="sample-work-example" ></div>

                <div className="sample-work-example" ></div> */}
            </div>

        </div>
    )
}

export default Samples