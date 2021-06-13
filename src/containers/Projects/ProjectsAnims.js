import gsap from 'gsap/gsap-core';
import ContainerAnims from '../../util/ContainerAnims';

class ProjectsAnims extends ContainerAnims {

    hooks = {
        figure: '.landing__figure',
        circle: '.landing__circle',
        content: '.landing__content > *',
        content_first: '.landing__content > *:first-child'
    }

    entry = () => {
        this.entry = gsap.timeline({ paused: true }).to('main', { opacity: 1 }, .3);
    }

    exit = () => {
        this.exit = gsap.timeline({ paused: true }).to('main', { opacity: 1 }, .3);
    }
}

export default ProjectsAnims;