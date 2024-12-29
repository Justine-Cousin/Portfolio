import css from "../assets/Images/css.svg";
import express from "../assets/Images/express.svg";
import github from "../assets/Images/github.svg";
import html from "../assets/Images/html.svg";
import js from "../assets/Images/js.svg";
import linkedin from "../assets/Images/linkedin.svg";
import mysql from "../assets/Images/mysql.svg";
import node from "../assets/Images/node.svg";
import react from "../assets/Images/react.svg";
import "../styles/Presentation.css";
import { useState } from "react";

export default function presentation() {
	return (
		<div className="presentation-container">
			<div className="background-circle" />
			<h2 className="presentation-title">Bonjour !</h2>
			<p className="presentation-text">
				Développeuse web junior, passionnée par le code et la création de sites
				web
			</p>
			<ul className="presentation-list">
				<li className="presentation-list-html">
					<img
						className="presentation-list-logohtml"
						src={html}
						alt="logo HTML"
					/>
					<p className="presentation-list-description-html">HTML</p>
				</li>
				<li className="presentation-list-css">
					<img className="presentation-list-logocss" src={css} alt="logo CSS" />
					<p className="presentation-list-description-css">CSS</p>
				</li>
				<li className="presentation-list-js">
					<img
						className="presentation-list-logojs"
						src={js}
						alt="logo JavaScript"
					/>
					<p className="presentation-list-description-js">JavaScript</p>
				</li>
				<li className="presentation-list-react">
					<img
						className="presentation-list-logoreact"
						src={react}
						alt="logo React"
					/>
					<p className="presentation-list-description-react">React</p>
				</li>
				<li className="presentation-list-node">
					<img
						className="presentation-list-logonode"
						src={node}
						alt="logo Node.js"
					/>
					<p className="presentation-list-description-node">Node.js</p>
				</li>
				<li className="presentation-list-express">
					<img
						className="presentation-list-logoexpress"
						src={express}
						alt="logo Express"
					/>
					<p className="presentation-list-description-express">Express</p>
				</li>
				<li className="presentation-list-mysql">
					<img
						className="presentation-list-logomysql"
						src={mysql}
						alt="logo MySQL"
					/>
					<p className="presentation-list-description-mysql">MySQL</p>
				</li>
			</ul>
			<div className="presentation-social-links">
				<a
					className="presentation-github"
					href="https://github.com/Justine-Cousin"
					target="_blank"
					rel="noreferrer"
				>
					<img src={github} alt="logo Github" />
				</a>
				<a
					className="presentation-linkedin"
					href="https://www.linkedin.com/in/justinedevweb/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={linkedin} alt="logo Linkedin" />
				</a>
			</div>
		</div>
	);
}
