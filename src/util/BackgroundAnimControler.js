import gsap, { Power2 } from 'gsap';

class BackgroundAnimControler {
    static #transitions = {
        HOME_TO_HOME: 'home_to_home',
        HOME_TO_OTHER: 'home_to_other',
        OTHER_TO_HOME: 'other_to_home',
        OTHER_TO_OTHER: 'other_to_other',
    };
    static #ref = '.bg-master';
    static #location = { curr: '/', next: '/' };
    static #transitionsAnims = {
        entry: gsap.timeline({ paused: true }),
        exit: gsap.timeline({ paused: true })
    };

    static setLocation = (location) => {
        this.#location = location;
    };

    static scaleUpX = (tl) => {
        tl.addLabel('upX').fromTo(this.#ref, {
            scaleX: 1,
        }, {
            scaleX: 1.2,
            duration: 1,
            ease: Power2.easeIn,
        });

        return tl;
    };

    static scaleDownX = (tl) => {
        tl.addLabel('downX').fromTo(this.#ref, {
            scaleX: 1.2,
        }, {
            scaleX: 1,
            duration: 1,
            ease: Power2.easeOut,
        });

        return tl;
    };

    static scaleDownY = (tl) => {
        tl.addLabel('downY').fromTo(
            this.#ref,
            {
                scaleY: 1.2,
            },
            {
                scaleY: 1,
                duration: 1,
                ease: Power2.easeOut,
            }
        );

        return tl;
    };

    static scaleUpY = (tl) => {
        tl.addLabel('upY').fromTo(
            this.#ref,
            {
                scaleY: 1,
            },
            {
                scaleY: 1.2,
                duration: 1,
                ease: Power2.easeIn,
            }
        );

        return tl;
    };

    static #resolveTransition = () => {
        const { next, curr } = this.#location;
        const transitions = this.#transitions;

        if (next === curr && curr === '/') {
            return transitions.HOME_TO_HOME;
        }
        if (next !== curr && curr === '/') {
            return transitions.HOME_TO_OTHER;
        }
        if (next !== curr && curr !== '/' && next === '/') {
            return transitions.OTHER_TO_HOME;
        }
        if (next !== curr && curr !== '/' && next !== '/') {
            return transitions.OTHER_TO_OTHER;
        }
    }

    static #setAnimations = () => {
        const transitionType = this.#resolveTransition(),
            transitions = this.#transitions,
            entry = gsap.timeline({ paused: true }),
            exit = gsap.timeline({ paused: true });

        switch (transitionType) {
            case transitions.HOME_TO_HOME: {
                this.scaleUpX(exit);
                this.scaleDownX(entry);
                break;
            }
            case transitions.HOME_TO_OTHER: {
                this.scaleUpX(exit);
                this.scaleUpY(entry);
                entry.set(this.#ref, { scaleX: 1.2 });

                break;
            }
            case transitions.OTHER_TO_HOME: {
                this.scaleDownY(entry);
                this.scaleDownX(entry);
                break;
            }
            case transitions.OTHER_TO_OTHER:
            default: {
                entry.set(this.#ref, { scale: 1.2 });
                break;
            }
        }

        this.#transitionsAnims = { entry, exit };
    }

    static getTransitionsAnims = () => {
        this.#setAnimations();
        return this.#transitionsAnims;
    }
}

export default BackgroundAnimControler;