import React from 'react'
import './footer.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faKaggle } from '@fortawesome/free-brands-svg-icons'




const Footer = () => {
  return (
      <div>

          <footer class="footer-distributed">

              <div class="footer-right">

                  <a href="https://www.linkedin.com/in/lakshmi-p-h/"> <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> </a>
                  <a href="https://github.com/prlak
"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                  <a href="https://www.kaggle.com/lakshmiph/
"><FontAwesomeIcon icon={faKaggle}></FontAwesomeIcon></a>

              </div>

              <div class="footer-left">

                  <p class="footer-links">
                      <a class="link-1" href="#intro">Home</a>

                      <a href="#intro">Intro</a>

                      <a href="#about">About</a>

                      <a href="#project">Projects</a>

                      <a href="#contact">Contact</a>
                  </p>

                  <p class="footer-copy">P H Lakshmi &copy; 2022</p>
              </div>

          </footer>
      </div>
  )
}

export default Footer
