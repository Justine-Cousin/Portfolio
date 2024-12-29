import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TimelineElements from "./TimelineElements";
import "../styles/Timeline.css";
import { motion, useAnimation } from "framer-motion";

export default function Timeline() {
	return (
		<div className="timeline">
			<h2 className="timeline-title">Mon Parcours</h2>
			<div className="timeline-container">
				<div className="timeline-content">
					<div className="timeline-line" />
					{TimelineElements.map((element) => (
						<TimelineElement key={element.id} element={element} />
					))}
				</div>
			</div>
		</div>
	);
}

interface TimelineElementProps {
	element: {
		id: number;
		title: string;
		description: string;
	};
}

function TimelineElement({ element }: TimelineElementProps) {
	const controls = useAnimation();
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			className={`timeline-element-${element.id}`}
			initial="hidden"
			animate={controls}
			variants={{
				hidden: { opacity: 0, x: -100 },
				visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
			}}
		>
			<div className="timeline-element">
				<h3 className="timeline-element-title">{element.title}</h3>
				<p className="timeline-element-description">{element.description}</p>
			</div>
		</motion.div>
	);
}
