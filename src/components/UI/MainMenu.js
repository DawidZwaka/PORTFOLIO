import MainNav from './MainNav';
import { useHistory } from 'react-router-dom';
import gsap, { Power3 } from 'gsap';
import React, { forwardRef } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/UI';
import Animate from '../../HOC/Animate';
import Storage from '../../util/AnimStorage';
import Topbar from '../UI/Topbar';

const styling = {
	fixed: {
		duration: 0.5,
		ease: Power3.in,
		exit: { display: 'none', opacity: 0, transform: 'scale(0.8)' },
		appear: { transform: 'scale(1)', opacity: 1, display: 'block' },
	},
	nav: { entry: { opacity: 0, transform: 'scale(.7)' }, exit: null },
};

const entryAnim = (refs) => {
	const { fixed, nav } = refs;
	const { fixed: fstyle } = styling;

	const tl = gsap.timeline();

	tl.to(fixed, {
		clipPath: 'circle(150% at 5.5rem 5.5rem',
		ease: Power3.easeIn,
	}).staggerFrom(nav, 0.4, { opacity: 0, x: 100 }, 0.1, '-= 0.2');
};

const exitAnim = (refs) => {
	const { fixed } = refs;
	const { fixed: fstyle } = styling;

	gsap.timeline().to(fixed, {
		clipPath: 'circle(0px at 5.5rem 5.5rem',
		ease: Power3.easeOut,
	});
};

const MainMenu = (props, ref) => {
	const { routes, toggleMenu, show } = props;
	const refs = {};
	const history = useHistory();

	const setActivePage = (ev) => {
		ev.preventDefault();
		const href = ev.currentTarget.pathname;
		const anim = Storage.get('exit');

		anim.play(0);
		toggleMenu();

		setTimeout(() => {
			history.push(href);
		}, anim.duration() * 1000);
	};

	const render = (
		<>
			<Topbar onclick={toggleMenu} />
			<div ref={(ref) => (refs.fixed = ref)} className='fixed'>
				<Topbar onclick={toggleMenu} />
				<MainNav
					ref={(ref) => (refs.nav = ref)}
					onclick={setActivePage}
					routes={routes}
				/>
				<hr />
				<div className='footer'>
					<div className='lang'>
						<strong>Lang:</strong>
						<a>EN</a>
						<a>PL</a>
					</div>
					<div className='socials'>
						<a>linkedin</a>
						<a>github</a>
						<a>facebook</a>
						<a>instagram</a>
					</div>
				</div>
			</div>
		</>
	);

	ref(refs);

	return render;
};

export default connect(
	({ UI }) => ({ show: UI.menuVisibility }),
	(dispatch) => ({
		toggleMenu: () => {
			dispatch({ type: actions.TOGGLE_MENU });
		},
	})
)(Animate(entryAnim, exitAnim)(forwardRef(MainMenu)));
