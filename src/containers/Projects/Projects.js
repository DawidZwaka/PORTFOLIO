import React from "react";
import Slider from "../../components/Slider/Slider";
import AnimatableContainer from "../../HOC/AnimatableContainer";
import ProjectsAnims from "./ProjectsAnims";

class Projects extends React.Component {
	slides = [
		{
			title: (
				<>
					SHOP
					<br />
					_IN
					<br />
					_NODE
				</>
			),
			desc: "ultrices consequat lorem, vel tempor purus ultricies ac. Aliquam ut auctor ligula, nec bibendum mi. Suspendisse potenti",
			img: "https://via.placeholder.com/300",
		},
		{
			title: "project_2",
			desc: "ultrices consequat lorem, vel tempor purus ultricies ac. Aliquam ut auctor ligula, nec bibendum mi. Suspendisse potenti",
			img: "https://via.placeholder.com/300",
		},
		{
			title: "project_3",
			desc: "ultrices consequat lorem, vel tempor purus ultricies ac. Aliquam ut auctor ligula, nec bibendum mi. Suspendisse potenti",
			img: "https://via.placeholder.com/300",
		},
	];

	render() {
		return (
			<main className="projects">
				<Slider slides={this.slides} />
			</main>
		);
	}
}

export default Projects;
