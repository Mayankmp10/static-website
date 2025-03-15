import "./Mann.css";
import { CiMail } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Mann = () => {
  return (
    <>
      <div className="mainn">
        <div className="mail">
            <div>
          <CiMail color="rgb(216, 203, 203)" size="2em"/>
          </div>
          <div className="mailcontact">info@company.com</div>
          <div><MdCall color="rgb(216, 203, 203)" size="2em" /></div>
          <div className="number">010-020-0340</div>
        </div>

        <div className="socialmedia">
            <div><FaFacebookF /></div>
            <div><FaInstagram /></div>
            <div><FaTwitter /></div>
            <div><FaLinkedin /></div>
        </div>
      </div>
    </>
  );
};

export default Mann;
