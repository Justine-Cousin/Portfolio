import about from "../../assets/Images/about.svg";
import contact from "../../assets/Images/contact.svg";
import home from "../../assets/Images/home.svg";
import projects from "../../assets/Images/project.svg";
import "../../styles/Header.css";

export default function Header() {
	return (
		<div className="header-page">
			<h1 className="header-title">Justine Cousin</h1>
			<nav className="header-nav">
				<ul className="header-nav-list">
					<li className="navbar-item header-logo-home-container">
						<img className="header-logo-home" src={home} alt="Accueil" />
						<p>Accueil</p>
					</li>
					<li className="navbar-item header-logo-about-container">
						<img className="header-logo-about" src={about} alt="À propos" />
						<p>A propos</p>
					</li>
					<li className="navbar-item header-logo-projects-container">
						<img
							className="header-logo-projects"
							src={projects}
							alt="Projets"
						/>
						<p>Projets</p>
					</li>
					<li className="navbar-item header-logo-contact-container">
						<img className="header-logo-contact" src={contact} alt="Contact" />
						<p>Contact</p>
					</li>
				</ul>
			</nav>
		</div>
	);
}
