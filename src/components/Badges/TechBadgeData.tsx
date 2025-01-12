import css from "../../assets/Images/CSS.svg";
import express from "../../assets/Images/express.svg";
import html from "../../assets/Images/html.svg";
import js from "../../assets/Images/js.svg";
import mysql from "../../assets/Images/mysql.svg";
import node from "../../assets/Images/node.svg";
import react from "../../assets/Images/react.svg";
import "../../styles/TechBadgeData.css";

interface TechBadgeProps {
	name: string;
	logo: string;
}

export const techBadgeData: TechBadgeProps[] = [
	{
		name: "HTML",
		logo: html,
	},
	{
		name: "CSS",
		logo: css,
	},
	{
		name: "javaScript",
		logo: js,
	},
	{
		name: "React",
		logo: react,
	},
	{
		name: "Node.js",
		logo: node,
	},
	{
		name: "Express",
		logo: express,
	},
	{
		name: "MySQL",
		logo: mysql,
	},
];

export const techBadge: React.FC<TechBadgeProps> = ({ name, logo }) => {
	const className = name.toLowerCase().replace(".", "");
	return (
		<div className={`presentation-list ${className}`}>
			<img
				className={`presentation-list-logo ${className}`}
				src={logo}
				alt={`logo ${name}`}
			/>
			<p className={`presentation-list-description ${className}`}>
				{name.toUpperCase()}
			</p>
		</div>
	);
};
