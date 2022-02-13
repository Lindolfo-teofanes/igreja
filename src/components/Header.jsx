import { MdSensors } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/header.css";
import LogoB from "../images/logo_black.jpg";
const Header = () => {
    return (
        <>
            <div className="Container">
                <div className="Container-1">
                    <img className="Logo-Header" src={LogoB} alt="Igreja Batista Aliança" />
                    <nav className="navMenu">
                        <a className="Text-Nav" href="/">Início</a>
                        <Link className="Text-Nav" to="/sobre">Sobre</Link>                        
                        <a className="Text-Nav" href="/seja-membro">Seja Membro</a>
                        <a className="Text-Nav" href="/programacao">Programação</a>
                        <a className="Text-Nav" href="/">Célula</a>
                        <a className="Text-Nav" href="contato">Contato</a>
                        <div class="dot"></div>
                    </nav>
                    <div className="Live-nav">
                        
                        <a className="Live" href="/"><MdSensors className="icon" /></a>
                    </div>

                </div>
            </div>

        </>
    );
};


export default Header;