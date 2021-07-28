class AnimStorage {
	static anims = {
		exit: [],
		entry: [],
	};

	static set = (name, anim) => {
		this.anims[name].push(anim);
	};

	static setAsFirst = (name, anim) => {
		this.anims[name].unshift(anim);
	};

	static get = (name) => this.anims[name];

	static clear = (name) => {
		delete this.anims[name];

		this.anims[name] = [];
	};

	static play = (name, clear = true) => {
		try {
			let delay = 0;
			const animArr = [...this.anims[name]];

			//console.log("Anims before animate: ", name, animArr.length);

			animArr.forEach((anim, key) => {
				setTimeout(() => {
					anim.play(0);

					if (key + 1 === animArr.length && clear) this.clear(name);
				}, delay * 1000);

				delay += anim.duration();
			});
		} catch (err) {
			throw new Error(err);
		}
	};

	static getDuration = (name) => {
		let duration = 0;

		this.anims[name].forEach((anim, key) => {
			duration += anim.duration();
		});

		return duration;
	};
}

export default AnimStorage;
