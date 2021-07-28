
import "./PortalBlock.scss";

const PortalBlock = (props) => {
	const { innerClasses, classes } = props;

	return (
		<span className={['animText', classes].join(' ')}>
			<span className={['animText__inside', innerClasses].join(' ')}>
				{props.children}
			</span>
		</span>
	);
};

export default PortalBlock;