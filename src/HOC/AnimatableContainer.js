import React from "react";
import Storage from '../util/AnimStorage';

class AnimatableContainer extends React.Component {

    componentDidMount() {
        const { AnimClass } = this.props;
        const { entry, exit } = new AnimClass().get();

        Storage.set('entry', entry);
        Storage.set('exit', exit);

        Storage.play('entry');
    }

    render() {
        return <>{this.props.children}</>
    }
}

export default AnimatableContainer;