import React from "react";
import { NavLink } from "react-router-dom";

/*class Nav {
	nav = {};

	setNavContainer = (props) => {
		this.nav = { tag: 'nav', props, children: [] };
	};

	setListContainer = (props) => {
		this.nav.children = [{ tag: 'ul', props, children: [] }];
	};

	setListItem = (itemProps, linkProps, text) => {
		this.nav.children[0].children.push({
			tag: 'li',
			props: itemProps,
			children: [{ tag: 'navlink', props: linkProps, children: [text] }],
		});
	};

	setLinkElement = (tag, index, props) => {
		this.nav.children[0].children[index].children[0].children.push({
			tag,
			props,
		});
	};

	#createReactElement = (tag, props, childs) => {
		let elem;
		switch (tag) {
			case 'navlink': {
				elem = <NavLink to={props.href}>{childs}</NavLink>;
				break;
			}
			default: {
				elem = React.createElement(tag, props, childs);
				break;
			}
		}

		return elem;
	};

	getNavComponent = (elem = this.nav) => {
		const { props, tag } = elem;
		let childs = [];

		if (elem.children) {
			childs = elem.children.map((child) => {
				if (typeof child === 'string') return child;
				else return this.getNavComponent(child);
			});
		}

		return this.#createReactElement(tag, props, childs);
	};
}*/

const MainNav = (props) => {
	const { routes, onclick } = props;

	const navItems = routes.map(({ path, name }, index) => {
		return (
			<li className="nav_item" key={index}>
				<NavLink to={path} onClickCapture={onclick} key={index}>
					{name}
				</NavLink>
			</li>
		);
	});

	return (
		<nav className="mainNav">
			<ul className="nav nav-column">{navItems}</ul>
		</nav>
	);
};

export default MainNav;
