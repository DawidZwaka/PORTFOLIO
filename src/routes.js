//vendors
import loadable from "@loadable/component";
import { Route } from "react-router-dom";

//components
import ContainerOverlay from "./HOC/ContainerOverlay/ContainerOverlay";

//util
import sizes from "./HOC/ContainerOverlay/sizes";
import store from "./redux/store";
import loaderActions from "./redux/actions/Loader";
import { loaderTypes } from "./redux/reducers/reducers/Loader/Loader";
import timeout from "./util/timeout";
import GlobalLoader from "./util/GlobalLoader/GlobalLoader";

class AppRoutes {
	static routes = [
		{
			name: "Home",
			homePage: true,
			size: sizes.FULL_WIDTH,
		},
		{
			name: "About",
			size: sizes.DEFAULT,
		},
		{
			name: "Projects",
			size: sizes.DEFAULT,
		},
		{
			name: "Contact",
			size: sizes.FULL_WIDTH,
		},
	];
	static minTransitionTime = 2000;
	static Loader = store.getState().Loader;

	static camelCaseToPath = (name) => {
		let slug = "";
		const route = AppRoutes.routes.find((el) => el.name === name);

		if (!route.homePage) {
			const reg = new RegExp("([A-Z]|[0-9])[a-z]*", "g");

			slug = name
				.match(reg)
				.map((el) => el.toLowerCase())
				.join("-");
		}

		return "/" + slug;
	};

	static getLoadableComponent = (name) => {
		const { minTransitionTime } = AppRoutes;

		const component = loadable(async () => {
			const t0 = performance.now();

			const module = await loadable(() =>
				import(`./containers/${name}/${name}`)
			);

			const t1 = performance.now();

			const timeDiff = t1 - t0;

			if (timeDiff < minTransitionTime)
				await timeout(minTransitionTime - timeDiff);

			store.dispatch({ type: loaderActions.ADD_LOADED_ROUTE, name });

			store.dispatch({ type: loaderActions.TOGGLE_LOADER });

			if (AppRoutes.Loader.type === loaderTypes.INITIAL) {
				store.dispatch({
					type: loaderActions.SET_LOADER_TYPE,
					loaderType: loaderTypes.IN_APP,
				});

				const gl = new GlobalLoader();

				gl.updateLoader();

				gl.getLoader().updateLoaderAnimDuration();
			}

			return module;
		});

		return component;
	};

	static getPrearedRoutes = () => {
		let routes;

		routes = AppRoutes.routes.map((el) => {
			let { name } = el;

			const Component = AppRoutes.getLoadableComponent(name);
			const path = AppRoutes.camelCaseToPath(name);

			return { ...el, path, Component };
		});

		return routes;
	};

	static getRoutes = () => AppRoutes.getPrearedRoutes();

	static getContainers = () => {
		let containers;

		containers = AppRoutes.getPrearedRoutes().map(
			({ path, Component, size }, index) => {
				return (
					<Route
						exact
						path={path}
						key={index}
						render={(props) => (
							<ContainerOverlay size={size}>
								<Component {...props} />
							</ContainerOverlay>
						)}
					/>
				);
			}
		);

		return containers;
	};

	static isCurrRoute = (name) => {
		let res = false;
		const { pathname } = window.location;

		if (pathname === AppRoutes.camelCaseToPath(name)) res = true;

		return res;
	};
}

export default AppRoutes;
