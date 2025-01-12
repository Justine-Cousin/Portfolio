import "../styles/About.css";
import Timeline from "./Timeline/Timeline";

export default function About() {
	return (
		<div className="about-container">
			<h2 className="about-title">A propos</h2>
			<p className="about-text">
				Bonjour ! Je m'appelle Justine, développeuse web débutante avec un
				parcours de 20 ans en tant que commerciale B2B. <br />
				<br />
				Au fil de ces années, j'ai collaboré avec de nombreux professionnels,
				affiné mon sens de l'écoute et développé une compréhension approfondie
				des enjeux business. Cette expérience m'a permis de maîtriser l'art
				d'analyser les besoins clients et de proposer des solutions adaptées.
				<br />
				<br />
				Aujourd'hui, je réinvente ma carrière en alliant ma connaissance du
				monde professionnel à ma passion pour le développement web.
				<br />
				<br />
				<span className="about-text-strong">Mon objectif ?</span>
				<br />
				<br />
				Créer des solutions digitales qui répondent précisément aux besoins des
				utilisateurs, en m'appuyant sur ma double expertise : la compréhension
				des attentes business et les compétences techniques du développement
				web.
			</p>
			<Timeline />
		</div>
	);
}
