const Controler = ({ onClick, slideIndex, active, key }) => (
	<button
		className={`controler ${active ? "active" : ""}`}
		onClick={onClick}
		data-slideindex={slideIndex}
	>
		<span className="controler__inside" data-slideIndex={key}></span>
	</button>
);

export default Controler;
