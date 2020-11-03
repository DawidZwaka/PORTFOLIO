import React from 'react';
import gsap, { Power4 } from 'gsap';
import Storage from '../util/AnimStorage';
const contactData = [
	{ type: 'phone', value: 508833686 },
	{ type: 'mail', value: 'zwakadawid@gmail.com' },
	{ type: 'facebook', value: 'Dawid Żwaka' },
];

const SingleContact = (props) => {
	const { type, value } = props.data;
	return (
		<p className='single'>
			<strong>{type}</strong>: {value}
		</p>
	);
};

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

class Contact extends React.Component {
	componentDidMount() {
		const tl = gsap.timeline();

		const elem_1 = document.querySelectorAll('.contact_content > *');

		tl.delay(0.3);
		tl.staggerFrom(
			'.bg_stacker .stacker',
			0.3,
			{
				xPercent: -100,
				ease: Power4.easeIn,
			},
			0.2
		).staggerFrom(
			elem_1,
			0.4,
			{
				yPercent: 100,
				opacity: 0,
			},
			0.1
		);

		const tl2 = gsap
			.timeline({ paused: true })
			.delay(0.7)
			.staggerTo(
				elem_1,
				0.4,
				{
					x: getShiftLength(elem_1[0], 'right'),
					opacity: 0,
				},
				0.1
			)
			.staggerTo(
				[
					'.bg_stacker .stacker_3',
					'.bg_stacker .stacker_2',
					'.bg_stacker .stacker_1',
				],
				0.3,
				{
					xPercent: 100,
					ease: Power4.easeOut,
				},
				0.2
			);

		Storage.set(tl2, 'exit');
	}

	render() {
		return (
			<main className='contact'>
				<div className='contact_bg'></div>
				<div className='bg_stacker'>
					<div className='stacker stacker_1'></div>
					<div className='stacker stacker_2'></div>
					<div className='stacker stacker_3'></div>
				</div>
				<section className='contact_content'>
					<h1>Contact</h1>
					{contactData.map((single, index) => (
						<SingleContact data={single} key={index} />
					))}
				</section>
			</main>
		);
	}
}

export default Contact;
