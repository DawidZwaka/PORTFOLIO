import { forwardRef } from 'react';

const Topbar = ({ onclick }, ref) => (
	<header className='topbar'>
		<button ref={ref} onClick={onclick} className='toggler'></button>
		<div className='logo'>Zwaka</div>
	</header>
);

export default forwardRef(Topbar);
