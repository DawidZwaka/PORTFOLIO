//components
import ClassicLink from "./Buttons/ClassicLink/ClassicLink";

const FixedComponents = () => {
	return (
		<>
			<div className="bottomBar">
				{/*<div className="scroll_down">
					<div class="scroll_down__inner"></div>
    </div>*/}
				<div className="navigator">
					<ClassicLink
						href="https://www.linkedin.com/in/zwakadawid"
						text="linkedin"
					/>
					<ClassicLink
						href="https://github.com/DawidZwaka"
						text="github"
					/>
				</div>
			</div>
		</>
	);
};

export default FixedComponents;
