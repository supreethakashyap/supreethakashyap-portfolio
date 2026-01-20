import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I'm a Computer Science graduate student specializing in data analytics, database systems, and Software Engineering. I currently work as a Quality Analytics and Insights Co-Op at Johnson & Johnson, modernizing analytics pipelines and building interactive Power BI dashboards.
          With prior experience at Accenture as an Application Development Analyst, I've developed scalable web applications and optimized relational databases to support business-critical systems. I'm an AWS Certified Cloud Practitioner, a quick learner, and a collaborative team player.
            Apart from coding, other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
