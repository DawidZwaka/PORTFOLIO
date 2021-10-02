//vendors
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";

//components
import MainMenu from "./components/UI/Navigation/MainMenu/MainMenu";
import FixedComponents from "./components/FixedComponents";
import VirtualCursor from "./components/UI/VirtualCursor";

//util
import Device from "./util/Device";
import AppRoutes from "./routes";

class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<Route
						component={(props) => (
							<MainMenu
								routes={AppRoutes.getRoutes()}
								{...props}
							/>
						)}
					/>
					<Switch>{AppRoutes.getContainers()}</Switch>
					<FixedComponents />
					{Device.isMobile() ? null : <VirtualCursor />}
				</Router>
			</>
		);
	}
}

export default App;
