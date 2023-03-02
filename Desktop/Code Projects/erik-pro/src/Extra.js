import Clock from "./Clock";

function Extra() {
    return (
        <div className="extra-body-div" >
            <div className="txt-div" >
                <Clock />
            </div>

            <div className="extra-stuff-div" >
            <p className="palette-text" >color palette / </p><br/>
                
                <div className="outer">
                    <div className="inner"></div>
                </div>
                <div className="outer">
                    <div className="inner" id="pink" ></div>
                </div>
                <div className="outer">
                    <div className="inner" id="yellow" ></div>
                </div>
                <div className="outer">
                    <div className="inner" id="grey" ></div>
                </div>
                <div className="outer" id="outer-white" >
                    <div className="inner" id="white" ></div>
                </div>
            </div>

        </div>
    )
}

export default Extra