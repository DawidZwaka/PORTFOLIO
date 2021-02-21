const ComponentLoader = () => {
	const boxes = [];

	for (let i = 0; i < 1; i++) boxes.push(<div></div>);

	return <div className='component-loader'>{boxes}</div>;
};

export default ComponentLoader;
