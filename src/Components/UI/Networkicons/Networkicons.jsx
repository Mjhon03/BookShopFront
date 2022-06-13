import './Networkicons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faLinkedin, faInstagram, faGithub,} from '@fortawesome/free-brands-svg-icons';

export const Networkicons = () => {
    return(
        <>
            <div className="allicons">
                <div className="icons">
                    <div className="iconback"></div>
                    <a className="btnIcons" href="#!" role="button" data-mdb-ripple-color="dark"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a className="btnIcons" href="#!" role="button" data-mdb-ripple-color="dark"><FontAwesomeIcon icon={faTwitter}/></a>
                    <a className="btnIcons" href="#!" role="button" data-mdb-ripple-color="dark"><FontAwesomeIcon icon={faGoogle}/></a>
                    <a className="btnIcons" href="#!" role="button" data-mdb-ripple-color="dark" ><FontAwesomeIcon icon={faInstagram}/></a>
                    <a className="btnIcons" href="#!" role="button" data-mdb-ripple-color="dark" ><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a className="btnIcons" href="#!" role="button" data-mdb-ripple-color="dark" ><FontAwesomeIcon icon={faGithub}/></a>
                </div>
            </div>
        </>
    )
} 