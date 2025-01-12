import github from "../../assets/Images/github.svg";
import linkedin from "../../assets/Images/linkedin.svg";
import "../../styles/SocialBadgeData.css";

interface SocialLinkProps {
	name: string;
	logo: string;
	link: string;
}

export const socialLinks: SocialLinkProps[] = [
	{
		name: "github",
		logo: github,
		link: "https://github.com/Justine-Cousin",
	},
	{
		name: "linkedin",
		logo: linkedin,
		link: "https://www.linkedin.com/in/justinedevweb/",
	},
];

export const socialBadge: React.FC<SocialLinkProps> = ({
	name,
	logo,
	link,
}) => {
	return (
		<div className={`social-badge ${name.toLowerCase()}`}>
			<a
				href={link}
				target="_blank"
				rel="noreferrer"
				className={`social-badge-link ${name.toLowerCase()}`}
			>
				<img
					src={logo}
					alt={`logo ${name}`}
					className={`social-badge-logo ${name.toLowerCase()}`}
				/>
			</a>
		</div>
	);
};
