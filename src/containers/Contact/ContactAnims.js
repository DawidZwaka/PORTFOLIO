import gsap from 'gsap/gsap-core';
import ContainerAnims from '../../util/ContainerAnims';

class ContactAnims extends ContainerAnims {

    hooks = {
        copy: '.contact .portal > span',
    }

    constructor(props) {
        super(props);

        this.copy = Array.from(
            document.querySelectorAll(this.hooks.copy)
        );
    }

    entry = () => {
        const { copy } = this;

        this.entry = gsap.timeline({ paused: true }).add('start', .7).from(
            copy[0],
            {
                duration: .5,
                yPercent: -100
            },
            'start'
        )
            .add('list', '-=.3')
            .staggerFrom(
                copy.slice(1, copy.length / 2 + 1),
                0.5,
                {
                    xPercent: -100,

                },
                0.1,
                'list'
            ).staggerFrom(
                copy.slice(copy.length / 2 + 1, copy.length),
                0.5,
                {
                    xPercent: 100,
                },
                0.1,
                'list'
            );
    }

    exit = () => {
        const { copy } = this;

        this.exit = gsap.timeline({ paused: true })
            .delay(0.7)
            .add('start').to(
                copy[0],
                {
                    duration: .5,
                    yPercent: 100
                },
                'start'
            )
            .add('list', '-=.3')
            .staggerTo(
                copy.slice(1, copy.length / 2 + 1),
                0.5,
                {
                    xPercent: 100,
                },
                0.1,
                'list'
            ).staggerTo(
                copy.slice(copy.length / 2 + 1, copy.length),
                0.5,
                {
                    xPercent: -100,
                },
                0.1,
                'list'
            );
    }
}

export default ContactAnims;