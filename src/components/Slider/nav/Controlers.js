//components
import Controler from "./Controler";

const SliderControlers = (props) => {

    const getControls = () => {
        const { activeIndex, handleClick, amount } = props;
        const controls = [];

        for (let i = 0; i < amount; i++) {
            controls.push(
                <Controler
                    onclick={handleClick}
                    slideIndex={i}
                    active={activeIndex === i}
                    key={i}
                />
            );
        }

        return controls;
    }


    return <div className='controls' >
        <div className='controls__inside'>
            {getControls()}
        </div>
    </div>;

}

export default SliderControlers;