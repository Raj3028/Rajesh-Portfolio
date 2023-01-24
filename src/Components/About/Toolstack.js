import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiCodesandbox,
	SiVisualstudiocode,
	SiCodepen,
	SiPostman,
	SiHeroku,
	SiGithub,
	SiVercel,
	SiLinux,
	SiVim,
	SiDocker,
	SiGit,
} from "react-icons/si";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

			{
				[
					<SiGithub />,
					<SiVisualstudiocode />,
					<SiVercel />,
					<SiCodesandbox />,
					<SiPostman />
				].map(tool =>

					<Col xs={4} md={2} className="tech-icons">
						{tool}
					</Col>)
			}




		</Row>
	);
}

export default Toolstack;
