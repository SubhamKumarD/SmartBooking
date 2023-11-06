import Footer from "../footer/Footer"
import MailList from "../mailList/MailList"
import Navbar from "../navbar/Navbar"
import "./contact.css"
import srini from "./images/Srini.jpeg"
import rojalin from "./images/Rojalin.jpg"
import subham from "./images/subham.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faBriefcase ,faBuilding,faUser} from '@fortawesome/free-solid-svg-icons'


const Contact =()=>{

  
  
  
    
    return(
        <div>
            <Navbar/>
            
            
<hr/>
<div class="terms1">
<h1 class= "ls">Developers</h1>
    <table  cellpadding="80" >
      <tr>
     
        <td>
          <ul className="no-bullets">
             
             <img src={subham}  className="pl" />
             <li class="lb"><FontAwesomeIcon icon={faUser} className="color"/> Subham Kumar Dey</li>
             <li class="lb"><FontAwesomeIcon icon={faPhone} className="color"/> 8242248526</li>
             <li class="lb"><FontAwesomeIcon icon={faEnvelope} className="color"/> subhamkumardey@gmail.com</li>
             <li class="lb"> <FontAwesomeIcon icon={faBriefcase} className="color"/> Software Engineer</li>

             <li class="lb"><FontAwesomeIcon icon={faBuilding} className="color"/>  Works at Mediamint</li>
          </ul>
        </td>
        <td>
           <ul className="no-bullets">
          <img src={rojalin} className="pl"/>
            <li class="lb" ><FontAwesomeIcon icon={faUser} className="color"/> Rojalin Panda</li>
            <li class="lb"><FontAwesomeIcon icon={faPhone} className="color"/> 9861250895</li>
            <li class="lb"><FontAwesomeIcon icon={faEnvelope}className="color" /> rojalinpanda@gmail.com</li>
            <li class="lb"> <FontAwesomeIcon icon={faBriefcase} className="color"/>Software Engineer</li>

          <li class="lb"><FontAwesomeIcon icon={faBuilding} className="color"/> Works at Capgemini</li>

          </ul>
        </td>
        
        
        <td>
        <ul className="no-bullets">
          <img src={srini} className="pl"/>
            <li class="lb" ><FontAwesomeIcon icon={faUser} className="color"/> Srinibash Mohanty</li>
            <li class="lb"><FontAwesomeIcon icon={faPhone} className="color"/> 8112180800</li>
            <li class="lb"><FontAwesomeIcon icon={faEnvelope} className="color"/> srinibashmohanty2002@gmail.com</li>
            <li class="lb"> <FontAwesomeIcon icon={faBriefcase} className="color"/> Software Engineer</li>
            <li class="lb"><FontAwesomeIcon icon={faBuilding} className="color"/> Works at Hexaware</li>

          </ul>
        </td>
      </tr>
    </table>
        
        </div>
        <MailList/>
        <br />
        <br />

        <div className="ft">
            <Footer/>
            </div>
        </div>
    )
        
        
}


export default Contact