import gsap, { Power4 } from 'gsap/gsap-core';
import Image from '../Image';
import Floating from '../UI/Floating';
import TechIcon from './TechIcon/TechIcon';
import iconTypes from './TechIcon/TechIconEnum';
import mobile from '../../assets/mobile.png';
import desktop from '../../assets/dektop.png';
import AnimatedText from '../../HOC/AnimatedText/AnimatedText';
import React from 'react';
import { Power3 } from 'gsap/gsap-core';


class projectSlide extends React.Component {

    componentDidMount() {
        gsap.timeline().addLabel('start', 0.7).staggerFrom(
            '.slide_title .animText__inside',
            0.7,
            {
                yPercent: -100,
                opacity: 0,
                ease: Power4.easeOut,
            },
            0.15,
            'start'
        ).addLabel('iterator', '-=1').from(
            '.slide_iterator .animText__inside',
            {
                xPercent: -100,
                opacity: 0,
                duration: .5
            },
            'iterator'
        ).from('.slide_teaser .animText__inside', {
            duration: .5,
            opacity: 0,
            yPercent: 100
        }, 'iterator').addLabel('images', '-=.9').staggerFrom(
            '.slide_img img',
            .5,
            {
                x: 150,
                scale: .7,
                opacity: 0,
            },
            .1,
            'images'
        );
    }

    render() {
        return (<div className='slide'>
            <div className='slide_header pt-5'>
                <h1 className='slide_title'>
                    <AnimatedText>
                        SHOP
                </AnimatedText>
                    <AnimatedText>
                        _IN
                </AnimatedText>
                    <AnimatedText>
                        _NODE
                </AnimatedText>
                </h1>
                <span className='slide_iterator'><AnimatedText>01</AnimatedText></span>
            </div>
            <p className='slide_teaser pb-5'>
                <AnimatedText>
                    shop_in_node is an online shop app used for managing
                    your store.
                </AnimatedText>
            </p>
            <div className='slide_img py-5'>
                <img src={mobile} className="temp1" style={{ zIndex: 1 }} />
                <img src={desktop} className="temp2" />
                <Floating maxDeviation='10'>
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
}

export default projectSlide;