import about from "../assets/Images/about.svg";
import contact from "../assets/Images/contact.svg";
import home from "../assets/Images/home.svg";
import projects from "../assets/Images/project.svg";

export default function Header() {
	return (
		<div>
			<h1>Justine Cousin</h1>
			<nav>
				<li>
					<img src={home} alt="Accueil" />
					<p>Accueil</p>
				</li>
				<li>
					<img src={about} alt="À propos" />
					<p>A propos</p>
				</li>
				<li>
					<img src={projects} alt="Projets" />
					<p>Projets</p>
				</li>
				<li>
					<img src={contact} alt="Contact" />
					<p>Contact</p>
				</li>
			</nav>
		</div>
	);
}
