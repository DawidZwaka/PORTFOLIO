import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import MainMenu from './components/UI/Navigation/MainMenu/MainMenu';
import Particles from './components/UI/Particles';
import AppBackground from './components/UI/Background';
import React from 'react';
import ComponentLoader from './components/ComponentLoader';
import ScrollBar from './components/UI/ScrollBar/ScrollBar';

const routes = [
	{ name: 'Home', path: '/', Component: Home },
	{ name: 'About', path: '/about', Component: About },
	{ name: 'Projects', path: '/projects', Component: Projects },
	{ name: 'Contact', path: '/contact', Component: Contact },
];

const App = () => {
	const { pathname } = useLocation();

	const render = routes.map(({ path, Component }, index) => {
		return (
			<Route
				exact
				path={path}
				key={index}
				component={(props) => (
					<Component show={pathname === path} {...props} />
				)}
			/>
		);
	});

	const appContent = (
		<>
			<MainMenu routes={routes} />
			<Switch>{render}</Switch>
			<AppBackground />
			{//<ComponentLoader />
			}
		</>
	);


	return <ScrollBar dumping={.01} autohide="true">
		<div id="app">
			{appContent}
		</div>
	</ScrollBar>;

};

export default App;
