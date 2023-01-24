import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	DiJsBadge,
	DiReact,
	DiNodejs,
	DiCss3,
	DiHtml5,
	DiJavascript1,
	DiMongodb,
	DiRedis,
	DiMysql,
	DiAws
} from "react-icons/di";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

			{
				[
					<DiHtml5 />,
					<DiCss3 />,
					<DiJsBadge />,
					<DiNodejs />,
					<DiReact />,
					<DiMongodb />,
					<DiMysql />,
					<DiRedis />,
					<DiAws />,
				].map(tool =>

					<Col xs={4} md={2} className="tech-icons">
						{tool}
					</Col>)
			}


		</Row>
	);
}

export default Techstack;
