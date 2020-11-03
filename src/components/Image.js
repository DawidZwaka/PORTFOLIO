import { forwardRef } from 'react';

const Image = (props, ref) => {
	const { ratio, src, alt = 'some picture' } = props;
	const digits = /\d+/g;

	return (
		<figure
			className={`image aspect_ratio-${ratio.match(digits).join('_')}`}
		>
			<img src={src} alt={alt} ref={ref} className='object-cover' />
		</figure>
	);
};

export default forwardRef(Image);
