import { forwardRef } from 'react';

const Topbar = ({ onclick, classes }, ref) => (
	<header className={['topbar', classes].join(' ')}>
		<button ref={ref} onClick={onclick} className='toggler'></button>
		<div className='logo'>Zwaka</div>
	</header>
);

export default forwardRef(Topbar);
