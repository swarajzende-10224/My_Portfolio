import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={10} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="mailto:your-email@example.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://github.com/swarajzende-10224">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://leetcode.com/swaraj_zende/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <p>&copy; 2024 Swaraj Zende. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
