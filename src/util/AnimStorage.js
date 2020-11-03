import { Timeline } from 'gsap/gsap-core';

class AnimStorage {
	static anims = { exit: new Timeline() };

	static set = (anim, name) => (this.anims[name] = anim);

	static get = (name) => this.anims[name];
}

export default AnimStorage;
