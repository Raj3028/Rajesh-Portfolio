import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { DiJsBadge, DiReact, DiNodejs, DiCss3, DiHtml5 } from "react-icons/di";
import { SiRedux } from "react-icons/si";

import ECommerce from "../../Assets/Projects/E-Commerce and Cart Management.jpg";
import URLShortener from "../../Assets/Projects/URL Shortener1.jpeg";
import BookManagement from "../../Assets/Projects/E-Book Management.jpg";
import Internship from "../../Assets/Projects/Internship Website.jpg";
import BloggingSite from "../../Assets/Projects/Blogging Site.jpg";




function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={ECommerce}
							isBlog={false}
							title="E-Commerce and Cart Management"
							description="Created an E-Commerce websites backend part with multiple APIs based on products, users, carts and orders. Here use JWT authentication for protected API’s and also use AWS. I Used Bcrypt for encrypting passwords. Like Amazon and Flipkart etc."
							techstack="NodeJS | JavaScript | MongoDB | AWS S3 | Bcrypt"
							link="https://ecommerce-and-cart-management-iahwubta1-raj3028.vercel.app/"
							git="https://github.com/Raj3028/Project-05.git"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={URLShortener}
							isBlog={false}
							title="URL Shortener"
							description="In this project, we use Redis & to shorten a long URL to a short URL. Used Redis as a Caching solution for quick response time. Like Bitly and TinyURL."
							techstack="NodeJS | JavaScript | MongoDB | Redis | Shortid"
							link="https://url-shortener-project-04-reapm8btu-raj3028.vercel.app/"
							git="https://github.com/Raj3028/Project-04.git"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={BookManagement}
							isBlog={false}
							title="E-Book Management"
							description="Create a books library website where users can give reviews on books. Here used JWT authentication & authorization for protected API’s. We used AWS S3 for the books cover page. Like library-management etc."
							techstack="NodeJS | JavaScript | MongoDB | AWS S3"
							link="https://books-management-aws-project-03-9cpcwyxmm-raj3028.vercel.app/"
							git="https://github.com/Raj3028/Project-03-AWS-Books-Management.git"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Internship}
							isBlog={false}
							title="Internship Website"
							description="Create a college or company profile where users can apply for their internship. Here users use to find suitable Internships or Jobs depending upon their skills. Like Internshala, Indeed and Naukri.com etc."
							techstack="NodeJS | JavaScript | MongoDB"
							link="https://open-to-intern-website-project-02-owxh7733e-raj3028.vercel.app/"
							git="https://github.com/Raj3028/Project-02.git"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={BloggingSite}
							isBlog={false}
							title="Blogging Site"
							description="Create a blog website where users can write some blogs and other users can see this blog. Here use JWT authentication for protected APIs. Like One Magazine and URBAN BEARDSMAN."
							techstack="NodeJS | JavaScript | MongoDB"
							link="https://blogging-site-mini-website-project-01.vercel.app/"
							git="https://github.com/Raj3028/Project-01.git"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
