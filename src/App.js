import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Projects from './containers/Projects';
import Contact from './containers/Contact';
import MainMenu from './components/UI/MainMenu';
import Background from './components/UI/Background';
import React from 'react';

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

	return (
		<>
			<MainMenu routes={routes} />
			<Switch>{render}</Switch>
			<Background />
		</>
	);
};

export default App;
