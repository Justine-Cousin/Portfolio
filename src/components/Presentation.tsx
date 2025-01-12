import "../styles/Presentation.css";
import {
	socialBadge as SocialBadge,
	socialLinks,
} from "../components/Badges/SocialBadgeData";
import {
	techBadge as TechBadge,
	techBadgeData,
} from "../components/Badges/TechBadgeData";

interface TechBadgeData {
	name: string;
	logo: string;
}

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
				{techBadgeData.map((tech: TechBadgeData) => (
					<li key={tech.name}>
						<TechBadge name={tech.name} logo={tech.logo} />
					</li>
				))}
			</ul>
			<div className="presentation-social-links">
				{socialLinks.map((social) => (
					<SocialBadge
						key={social.name}
						name={social.name}
						logo={social.logo}
						link={social.link}
					/>
				))}
			</div>
		</div>
	);
}
