import Image from '../Image';
import Floating from '../UI/Floating';
import TechIcon from './TechIcon/TechIcon';
import iconTypes from './TechIcon/TechIconEnum';

const projectSlide = ({ props }) => {
    const { img, title } = props;

    return (<div className='slide'>
        <div className='slide_header pt-5'>
            <h1 className='slide_title'>
                {title}
            </h1>
            <span className='slide_iterator'>01</span>
        </div>
        <p className='slide_teaser pb-5'>
            shop_in_node is an online shop app used for managing
            your store.
        </p>
        <div className='slide_img py-5'>
            <Floating maxDeviation='10'>
                <Image src={img} ratio='16:9' />
            </Floating>
        </div>
        <article className='slide_tech py-5'>
            <h2>Technologies</h2>
            <p>
                shop_in_node is build with MVC model. The backbone
                of this application is Express.js, Mongodb as
                database and clean js on the frontend.
        </p>
        </article>
        <article className='slide_features py-5'>
            <h2>Features</h2>
            <p>
                The application includes functionalities such as
                user authorization, submission and management of
                orders, management of products, user account page,
                English and Polish languages support, store
                configuration, statistics panel and many many
                others...
        </p>
        </article>
        <div className='slide_stack'>
            <h4>Whole Tech Stack</h4>
            <ul className='stack_list'>
                <TechIcon type={iconTypes.JS} />
                <TechIcon type={iconTypes.MONGODB} />
                <TechIcon type={iconTypes.NODEJS} />
                <TechIcon type={iconTypes.PUG} />
                <TechIcon type={iconTypes.SASS} />
            </ul>
        </div>
    </div>
    );
}

export default projectSlide;