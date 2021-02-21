import image from '../assets/landing.webp';
import React from 'react';
import gsap, { Power4 } from 'gsap';
import Storage from '../util/AnimStorage';
import { AnimateBackground } from '../util/Background/Background';
import { withLastLocation } from 'react-router-last-location';

const getShiftLength = (elem, direction) => {
	const { x, y, width, height, bottom } = elem.getBoundingClientRect();
	let shift = 0;
	switch (direction) {
		case 'left':
		default: {
			shift -= x + width;
			break;
		}
		case 'right': {
			shift += window.innerWidth - x;
			break;
		}
		case 'up': {
			shift -= y + height;
			break;
		}
		case 'bottom': {
			shift += bottom + height;
			break;
		}
	}

	return shift;
};

class Home extends React.Component {
	exit = () => {
		const { bg, circle, img, content } = this.refs;
		gsap.defaults({ ease: Power4.easeIn });

		return new AnimateBackground({
			tl: gsap.timeline({ paused: true }),
		})
			.scaleUpX()
			.getTl()
			.to(
				circle,
				{
					duration: 0.7,
					strokeDashoffset: 2000,
				},
				'<'
			)
			.to(
				img,
				{
					x: getShiftLength(img, 'right'),
					duration: 1,
				},
				'<'
			)
			.staggerTo(
				content,
				0.4,
				{ x: getShiftLength(content[0], 'right'), opacity: 0 },
				0.1,
				'<.4'
			)
			.to('.component-loader', { opacity: 1, display: 'flex' });
	};

	entry = () => {
		const { circle, img, content } = this.refs;

		return new AnimateBackground({
			tl: gsap
				.timeline({ paused: true })
				.to('.component-loader', { opacity: 0, display: 'none' }),
		})
			.scaleDownX()
			.getTl()
			.from(
				img,
				{
					x: getShiftLength(img, 'left'),
					duration: 1,
					ease: Power4.easeOut,
				},
				'<.3'
			)
			.staggerFrom(
				content,
				0.4,
				{ x: getShiftLength(content[0], 'left'), opacity: 0 },
				0.1,
				'< -.2'
			)
			.to(
				circle,
				{
					duration: 0.7,
					strokeDashoffset: 0,
				},
				'-=.3'
			);
	};

	componentDidMount() {
		gsap.set('main', {
			opacity: 0,
		});

		Storage.set(this.exit(), 'exit');
		console.log('mount');
		/*gsap.timeline()
			.to('.ball', { y: -4, scaleX: 1, ease: Power4.easeIn })
			.to('.ball', { y: 0, scaleX: 1.4, ease: Power4.easeIn })
			.to('.ball', { top: '4rem', scaleX: 1, ease: Power4.easeOut });*/
		//.to('.ball', { scale: 600 }, '-=.3')
		//.set('.ball', { position: 'absolute', left: 0, top: 0 });
	}

	handleLoaded = () => {
		console.log(this);

		gsap.set('main', {
			opacity: 1,
		});

		this.entry().play(0);
	};

	render() {
		this.refs = { content: [] };

		const render = (
			<main className='landing'>
				<div
					className='landing_bg'
					ref={(ref) => (this.refs.bg = ref)}
				></div>

				<div className='landing_img'>
					<svg viewBox='0 0 500 500' fill='none'>
						<circle
							ref={(ref) => (this.refs.circle = ref)}
							cx='250'
							cy='250'
							r='250'
							stroke='white'
							strokeWidth='2'
							strokeOpacity='.3'
						></circle>
					</svg>
					<img
						src={image}
						onLoad={this.handleLoaded}
						alt='landing page hero'
						ref={(ref) => (this.refs.img = ref)}
					/>
				</div>
				<section className='landing_content'>
					<h1 ref={(ref) => (this.refs.content[0] = ref)}>
						Hello there!
					</h1>
					<p ref={(ref) => (this.refs.content[1] = ref)}>
						You are propably here because, you would like to know a
						little bit more about me and what i do, so let’s get
						started!
					</p>
					<a href='' ref={(ref) => (this.refs.content[2] = ref)}>
						NEXT
					</a>
				</section>
			</main>
		);

		return render;
	}
}

export default withLastLocation(Home);
