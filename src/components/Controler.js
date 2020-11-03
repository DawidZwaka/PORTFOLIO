import { forwardRef } from 'react';

const Controler = ({ onclick, slideIndex, active }, ref) => (
	<button
		ref={ref}
		className={`controler ${active ? 'active' : ''}`}
		onClick={onclick}
		data-slideindex={slideIndex}
	></button>
);

export default forwardRef(Controler);
