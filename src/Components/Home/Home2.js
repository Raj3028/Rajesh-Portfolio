import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF...
            </h1>
            <p className="home-about-body">
              I've completed my B-Tech at GKCET, Odisha.
              <br />
              But now I fell in love with programming and I have at least learnt
              something, I think… ¯\_(ツ)_/¯
              <br />
              My field of Interest's are building new
              <i>
                <b className="purple"> Web Technologies and Products. </b>
              </i>
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.</b>
              </i>
              <br />I am fluent in classics like
              <i>
                <b className="purple"> JavaScript, NodeJS, GIT, ReactJS, ExpressJS, MongoDB, MySQL.</b>
              </i>
              <br />
              I'm mainly interested in &nbsp;
              <i>
                <b className="purple">High-Performance Computing</b>, {" "}
                <b className="purple">
                  Learning more things
                </b> and recently I Worked as <b className="purple">Teaching Assistant </b>to guide junior batch students solving their doubts and helped them in their projects.
                I'm also very passionate about the field of pure <b className="purple">Software Engineering</b>.
              </i>
              <br />
              <br />
              I always try to learn new techniques and technologies every day.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              Feel free to <span className="purple">connect </span>with me
            </h1>
            <div className="contact">
              <div>
                <PhoneIcon
                  color="secondary"
                  className="con_ico"
                  sx={{ fontSize: 45 }}
                />
                <a href="tel:+918984063028" className="con-det">
                  +91 8984063028
                </a>
              </div>
              <div>
                <EmailIcon
                  className="con_ico"
                  color="secondary"
                  sx={{ fontSize: 45 }}
                />
                <a
                  href="mailto:rajeshkumarsahoo006@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="con-det"
                >
                  rajeshkumarsahoo006@gmail.com
                </a>
              </div>
              <div>
                <PlaceIcon
                  color="secondary"
                  className="con_ico"
                  sx={{ fontSize: 45 }}
                />
                <a href="https://goo.gl/maps/C8iTcLjfHfh86Loa8"
                  target="_blank"
                  className="con-det"
                >
                  Cuttack, Odisha
                </a>
              </div>
            </div>
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Raj3028"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:rajeshkumarsahoo006@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  {/* <AiOutlineTwitter /> */}
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/raj3028/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/iamraaj404"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
