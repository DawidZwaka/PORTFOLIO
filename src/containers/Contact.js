import React from 'react';
import gsap, { Power4 } from 'gsap';
import Storage from '../util/AnimStorage';
import { AnimateBackground } from '../util/Background/Background';

const contactData = [
	{ type: 'phone', value: 508833686 },
	{ type: 'mail', value: 'zwakadawid@gmail.com' },
	{ type: 'facebook', value: 'Dawid Żwaka' },
];

const ContactMethods = () => {
	const methods = [],
		values = [];

	contactData.forEach(({ type, value }) => {
		methods.push(<strong>{type}</strong>);
		values.push(<p>{value}</p>);
	});

	return (
		<div class='contact_methods'>
			<div className='column'>{methods}</div>
			<div className='column'>{values}</div>
		</div>
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
		const elem_1 = document.querySelectorAll(
			'.contact_content .portal > span'
		);
		let tl;

		if (false)
			tl = new AnimateBackground({ tl: gsap.timeline() })
				.scaleUpY()
				.getTl();
		else {
			tl = gsap.timeline();
			tl.set('.bg-master', { scale: 1.2 });
		}

		tl.staggerFrom(
			elem_1,
			0.4,
			{
				yPercent: 100,
			},
			0
		);

		const tl2 = new AnimateBackground({
			tl: gsap.timeline({ paused: true }),
		})
			.scaleDownY()
			.getTl()
			.delay(0.7)
			.staggerTo(
				elem_1,
				0.4,
				{
					x: getShiftLength(elem_1[0], 'right'),
					opacity: 0,
				},
				0.1
			);

		Storage.set(tl2, 'exit');
	}

	render() {
		return (
			<main className='contact'>
				<section className='contact_content'>
					<h1 class='portal'>
						<span>Contact</span>
					</h1>
					<div className='contact_methods'>
						<ContactMethods />
					</div>
				</section>
			</main>
		);
	}
}

export default Contact;
