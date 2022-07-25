import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import Swal from 'sweetalert2'

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1jme3tz",
        "template_ygctc4u",
        formRef.current,
        "user_q71OllNXWjb0ZDa75tNlJ"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: 'success',
            title: 'Your E-mail has been sent',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(result.text);
          document.getElementById("myform").reset();
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project :)</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +917259283492
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              lakshmiharan1@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Bengaluru, India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>How can I help?</b> Get in touch. Always available for
            freelancing if the right project comes along!
          </p>
          <form id="myform" ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
            <input style={{backgroundColor: darkMode && "#333"}} type="email" placeholder="Email" name="user_email" required/>
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" required/>
            <button>Submit</button>
            {done}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
