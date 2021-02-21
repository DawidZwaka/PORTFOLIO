import React from 'react';

const Loader = (Component) => {
	return class extends React.Component {
		render() {
			return <Component />;
		}
	};
};

export default Loader;
