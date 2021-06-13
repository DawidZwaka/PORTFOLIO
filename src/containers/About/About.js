import React from 'react';
import Image from '../../assets/about-image.png';
import Storage from '../../util/AnimStorage';
import AnimatableContainer from '../../HOC/AnimatableContainer';
import AboutAnims from './AboutAnims';
import CoveredPicture from '../../components/CoveredPicture';

class About extends React.Component {

	render() {
		console.log('render about');

		return <AnimatableContainer AnimClass={AboutAnims}>
			<main className='about'>
				<h1 className="about__title">few words ABOUT me</h1>
				<CoveredPicture className='about__image' src={Image} alt="" />
				<p className="about__content1 py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate cras porttitor a sed mollis eget aenean. Varius leo placerat sed id ipsum. Mattis tincidunt at ante in. Pharetra ac tristique sit faucibus natoque.</p>
				<p className="about__content2 py-5">Varius leo placerat sed id ipsum. Mattis tincidunt at ante in. Pharetra ac tristique sit faucibus natoque. Varius leo placerat sed id ipsum. Mattis tincidunt at ante in. Pharetra ac tristique sit faucibus natoque.Varius leo placerat sed id ipsum. Mattis tincidunt at ante in. Pharetra ac tristique sit faucibus natoque.</p>
				<div className="about__skills">
					<h2>skills</h2>
				</div>
				<div className="about__learning">
					<h2>still learning</h2>

				</div>
			</main>
		</AnimatableContainer>;

	}
};

export default About;
