import TimelineElements from "./TimelineElements";
import "../styles/Timeline.css";

export default function Timeline() {
	return (
		<div className="timeline">
			<h2 className="timeline-title">Mon Parcours</h2>
			<div className="timeline-container">
				<div className="timeline-content">
					<div className="timeline-line" />
					{TimelineElements.map((element) => (
						<div key={element.id} className={`timeline-element-${element.id}`}>
							<div className="timeline-element">
								<h3 className="timeline-element-title">{element.title}</h3>
								<p className="timeline-element-description">
									{element.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
