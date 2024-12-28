import css from "../assets/Images/css.svg";
import express from "../assets/Images/express.svg";
import github from "../assets/Images/github.svg";
import html from "../assets/Images/html.svg";
import js from "../assets/Images/js.svg";
import linkedin from "../assets/Images/linkedin.svg";
import mysql from "../assets/Images/mysql.svg";
import node from "../assets/Images/node.svg";
import react from "../assets/Images/react.svg";
import "../styles/About.css";

export default function About() {
	return (
		<div className="about-container">
			<div className="background-circle" />
			<h2 className="about-title">Bonjour !</h2>
			<p className="about-text">
				Développeuse web junior, passionnée par le code et la création de sites
				web
			</p>
			<ul className="about-list">
				<li className="about-list-html">
					<img className="about-list-logohtml" src={html} alt="logo HTML" />
					<p className="about-list-description-html">HTML</p>
				</li>
				<li className="about-list-css">
					<img className="about-list-logocss" src={css} alt="logo CSS" />
					<p className="about-list-description-css">CSS</p>
				</li>
				<li className="about-list-js">
					<img className="about-list-logojs" src={js} alt="logo JavaScript" />
					<p className="about-list-description-js">JavaScript</p>
				</li>
				<li className="about-list-react">
					<img className="about-list-logoreact" src={react} alt="logo React" />
					<p className="about-list-description-react">React</p>
				</li>
				<li className="about-list-node">
					<img className="about-list-logonode" src={node} alt="logo Node.js" />
					<p className="about-list-description-node">Node.js</p>
				</li>
				<li className="about-list-express">
					<img
						className="about-list-logoexpress"
						src={express}
						alt="logo Express"
					/>
					<p className="about-list-description-express">Express</p>
				</li>
				<li className="about-list-mysql">
					<img className="about-list-logomysql" src={mysql} alt="logo MySQL" />
					<p className="about-list-description-mysql">MySQL</p>
				</li>
			</ul>
			<div className="about-social-links">
				<a className="about-github" href="https://github.com/Justine-Cousin">
					<img src={github} alt="logo Github" />
				</a>
				<a className="about-linkedin" href="www.linkedin.com/in/justinedevweb">
					<img src={linkedin} alt="logo Linkedin" />
				</a>
			</div>
		</div>
	);
}
