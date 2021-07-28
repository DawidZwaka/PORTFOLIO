import image from "../../assets/landing.webp";
import React from "react";
import HomeAnims from "./HomeAnims";
import AnimatableContainer from "../../HOC/AnimatableContainer";

class Home extends React.Component {
	render() {
		const render = (
			<AnimatableContainer AnimClass={HomeAnims}>
				<main className="landing">
					<div className="landing__img">
						<svg viewBox="0 0 500 500" fill="none">
							<circle
								className="landing__circle"
								cx="250"
								cy="250"
								r="250"
								stroke="white"
								strokeWidth="2"
								strokeOpacity=".3"
							></circle>
						</svg>
						<img
							className="landing__figure"
							src={image}
							onLoad={this.handleLoaded}
							alt="landing page hero"
						/>
					</div>
					<section className="landing__content">
						<h1>Hello there!</h1>
						<p className="lh-180">
							You are propably here because, you would like to
							know a little bit more about me and what i do, so
							let’s get started!
						</p>
						<button>NEXT</button>
					</section>
				</main>
			</AnimatableContainer>
		);

		return render;
	}
}

export default Home;
