class ContainerAnims {
    entry = '';
    exit = '';

    checkClassProperties = () => {
        if (typeof this.entry !== 'object' && typeof this.exit !== 'object')
            throw new Error('You have to set entry and exit property of gsap type!');
    }

    entry = () => {
        throw new Error('You have to implement the method entry!');
    }

    exit = () => {
        throw new Error('You have to implement the method exit!');
    }

    get() {
        this.entry();
        this.exit();

        this.checkClassProperties();

        const { entry, exit } = this;

        return { entry, exit };
    }
}

export default ContainerAnims;