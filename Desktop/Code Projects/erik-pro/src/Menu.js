import { Link } from "react-router-dom";
import MenuHeader from "./Menu-Header"

function Menu() {
    return (
        <div className="menu-body-div" >
            <MenuHeader />
            <div className="menu-span" >
            <p className="about-text" >About</p>

            <a className="menu-links" target="_blank" rel="noreferrer" href="mailto:erikrussells@gmail.com?subject=Hello!"><p className="about-text" >Email</p></a>

            <p className="about-text" >Resumé</p>

            <a className="menu-links" target="_blank" rel="noreferrer" href="https://medium.com/@erikrussells"><p className="about-text" >Blog</p></a>

            <a className="menu-links" target="_blank" rel="noreferrer" href="https://github.com/Kaltrunner"><p className="about-text" >Github</p></a>

            <a className="menu-links" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/erik-russell-software-engineer/"><p className="about-text" >Linkedin</p></a>

            <Link className="menu-links" target="_blank" rel="noreferrer" to="/samples" ><p className="about-text" >Projects</p></Link>

            <a className="menu-links" target="_blank" rel="noreferrer" href="https://www.instagram.com/russellerik/?hl=en" ><p className="about-text" >Instagram</p></a>

            <a className="menu-links" target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/55PSX5vztaOftFhmVG3Q2D" ><p className="about-text" >Music</p></a>

            {/* <a className="menu-links-hidden" target="_blank" rel="noreferrer" href="" ><p className="about-text-hidden" >Hidden</p></a> */}
            </div>
        </div>
    )
}

export default Menu