import React from 'react';
import { withLastLocation } from 'react-router-last-location';

class AppBackground extends React.Component {

	render() {
		return <div className='bg bg-master'></div>;
	}
};

export default withLastLocation(AppBackground);
