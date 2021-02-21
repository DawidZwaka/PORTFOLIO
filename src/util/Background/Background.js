import { Power2 } from 'gsap';

class Animate {
	constructor(props) {
		this.ref = document.querySelector(props.ref);
		this.tl = props.tl;
	}

	getOffset = (elem, direction) => {
		console.log(elem.getBoundingClientRect());
		const { x, y, width, height, bottom } = elem.getBoundingClientRect();
		let offset = 0;

		switch (direction) {
			case 'left':
			default: {
				offset = x;
				break;
			}
			case 'top': {
				offset = y;
				break;
			}
		}

		return offset;
	};

	getTl = () => this.tl;
}

class AnimateBackground extends Animate {
	constructor(props) {
		props.ref = '.bg-master';
		super(props);
	}

	scaleUpX = () => {
		this.tl.to(this.ref, {
			scaleX: 1.2,
			duration: 1,
			ease: Power2.easeIn,
		});

		return this;
	};

	scaleDownX = () => {
		this.tl.to(this.ref, {
			scaleX: 1,
			duration: 1,
			ease: Power2.easeOut,
		});

		return this;
	};

	scaleDownY = () => {
		this.tl.delay(1).fromTo(
			this.ref,
			{
				scaleY: 1.2,
			},
			{
				scaleY: 1,
				duration: 1,
				ease: Power2.easeOut,
			}
		);

		return this;
	};

	scaleUpY = () => {
		this.tl.fromTo(
			this.ref,
			{
				scaleY: 1,
			},
			{
				scaleY: 1.2,
				duration: 1,
				ease: Power2.easeIn,
			}
		);

		return this;
	};

	setEntryAnim = () => {};

	setExitAnim = () => {};
}

export { Animate, AnimateBackground };
