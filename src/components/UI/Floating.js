import React from 'react';
import gsap from 'gsap';

class Floating extends React.Component {
	ref = React.createRef();

	constructor(props) {
		super(props);
		this.maxDeviation = props.maxDeviation;
	}

	componentDidMount() {
		document.addEventListener('mousemove', this.handleMouseMove);
		document.addEventListener('mouseleave', this.handleMouseLeave);
	}

	componentWillUnmount() {
		document.removeEventListener('mousemove', this.handleMouseMove);
		document.removeEventListener('mouseleave', this.handleMouseLeave);
	}

	handleMouseLeave = (ev) => {
		const floatingElem = this.ref.current;

		gsap.fromTo(
			floatingElem,
			{ transform: floatingElem.style.transform },
			{
				transform: 'rotateX(0deg) rotateY(0deg)',
				duration: 0.7,
			}
		);
	};

	handleMouseMove = (ev) => {
		const { clientX, clientY } = ev,
			{ innerWidth, innerHeight } = window,
			x = -(innerWidth / 2 - clientX),
			y = innerHeight / 2 - clientY,
			xPercent = (x * 100) / (innerWidth / 2),
			yPercent = (y * 100) / (innerHeight / 2),
			xCalced = (this.maxDeviation * xPercent) / 100,
			yCalced = (this.maxDeviation * yPercent) / 100;
		const floatingElem = this.ref.current;

		floatingElem.style.transform = `rotateY(${xCalced}deg) rotateX(${yCalced}deg)`;
	};

	render() {
		return (
			<div className='floating'>
				<div ref={this.ref} className='floating_inside'>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Floating;
