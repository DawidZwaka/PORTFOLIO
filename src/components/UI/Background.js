import React from 'react';
import Particles from 'particlesjs';

class Background extends React.Component {
	componentDidMount() {
		Particles.init({
			selector: '.background',
			maxParticles: 100,
			color: '#fefefe',
			connectParticles: true,
		});
	}
	render() {
		return <canvas className='background'></canvas>;
	}
}

export default Background;
