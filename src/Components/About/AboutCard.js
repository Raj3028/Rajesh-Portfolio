import React from "react";
import Card from "react-bootstrap/Card";
import MovieIcon from "@mui/icons-material/Movie";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import { FaHandPointRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rajesh Kumar Sahoo </span>
            from <span className="purple"> Odisha, India.</span>
            <br />I am an engineer learning Web Development at FunctionUp.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <MovieIcon /> Watching movies, Comedy Show
            </li>
            <li className="about-activity">
              <AutoStoriesIcon /> Reading Scientific Books
            </li>

            <li className="about-activity">
              <ScreenSearchDesktopIcon /> Researching about latest tech
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>Soft Skills:</p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> Time Management
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Teamwork
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Hard Work
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Leadership Quality
            </li>
          </ul>
          <br />
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Empty your mind, Stop thinking about anything, Simply be !"{" "}
          </p>
          <br />
          <footer className="blockquote-footer"> RKS</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
