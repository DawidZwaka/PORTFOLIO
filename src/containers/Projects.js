import React from 'react';
import Slider from '../components/Slider';

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
			<main className='projects'>
				<div className='bg_stacker'>
					<div className='stacker stacker_1'></div>
					<div className='stacker stacker_2'></div>
					<div className='stacker stacker_3'></div>
				</div>
				<section className='projects_content'>
					<Slider slides={this.slides} />
				</section>
			</main>
		);
	}
}

export default Projects;
