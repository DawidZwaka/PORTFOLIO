import React from "react";

const Animate = (entry, exit) => {
	return (Component) => {
		return class extends React.Component {
			constructor(props) {
				super(props);

				this.show = props.show;
			}

			componentDidMount() {
				//component is mounting initally

				if (this.show) entry(this.ref);
			}

			componentDidUpdate(prevProps, prevState) {
				//component is unmounting
				if (prevProps.show && !this.props.show) {
					exit(this.ref);
				}
				//component is mounting
				else if (!prevProps.show && this.props.show) {
					entry(this.ref);
				}
			}

			render() {
				return (
					<Component
						ref={(ref) => (this.ref = ref)}
						{...this.props}
					/>
				);
			}
		};
	};
};

export default Animate;
