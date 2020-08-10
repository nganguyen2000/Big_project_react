import React, {Component} from 'react';
import './footer.css';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { FaBuilding } from "react-icons/fa";
import { FaPhoneSquareAlt} from "react-icons/fa";
import { FaEnvelope} from "react-icons/fa";
class Footer extends Component{
    render(){
        return(
          <body>
          <div className="footer">
              <div className="col-1">
                <h4>More about us</h4>
                <p>A commercial website that helps people buy and sell second-hand items</p>
              </div>
              <div className="col-2">
                <h4>Keep connected</h4>
               <p><SocialIcon network="twitter" bgColor="#ff5a01" /> Follow us in Twitter </p>
               <p><SocialIcon network="facebook" bgColor="#00B2EE" /> Follow us in FaceBook </p>
               <p><SocialIcon network="pinterest" bgColor="pink" /> Follow us in FaceBook </p>
              </div>
              <div className="col-3">
                <h4>Contact information</h4>
                <p><FaBuilding/> The office at 99 To Hien Thanh, DaNang, VietNam</p>
                
                <p><FaPhoneSquareAlt/> (+84) 452 855 999</p>
                <p><FaEnvelope/>Secondhand@gmail.com </p>
                
              </div>
          </div>
          </body>
        );
    }
}
export default Footer;