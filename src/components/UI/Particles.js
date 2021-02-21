import React from 'react';
import Particles from 'particlesjs';

class Background extends React.Component {
	bgSelector = 'particles';

	componentDidMount() {
		Particles.init({
			selector: `.${this.bgSelector}`,
			maxParticles: 100,
			color: '#030303',
			connectParticles: true,
		});
	}

	render() {
		return <canvas className={[this.bgSelector, 'bg'].join(' ')}></canvas>;
	}
}

export default Background;
