import React from 'react';
import Slider from '../../components/Slider/Slider';
import Storage from '../../util/AnimStorage';
import AnimatableContainer from '../../HOC/AnimatableContainer';
import ProjectsAnims from './ProjectsAnims';

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
			desc:
				'ultrices consequat lorem, vel tempor purus ultricies ac. Aliquam ut auctor ligula, nec bibendum mi. Suspendisse potenti',
			img: 'https://via.placeholder.com/300',
		},
		{
			title: 'project_2',
			desc:
				'ultrices consequat lorem, vel tempor purus ultricies ac. Aliquam ut auctor ligula, nec bibendum mi. Suspendisse potenti',
			img: 'https://via.placeholder.com/300',
		},
		{
			title: 'project_3',
			desc:
				'ultrices consequat lorem, vel tempor purus ultricies ac. Aliquam ut auctor ligula, nec bibendum mi. Suspendisse potenti',
			img: 'https://via.placeholder.com/300',
		},
	];

	render() {
		return (
			<AnimatableContainer AnimClass={ProjectsAnims}>
				<main className='projects'>
					<section className='projects_content'>
						<Slider slides={this.slides} />
					</section>
				</main>
			</AnimatableContainer>
		);
	}
}

export default Projects;
