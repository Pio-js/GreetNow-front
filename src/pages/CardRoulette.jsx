import React, { useState, useEffect } from 'react';
import EventFilter from "../components/EventFilter";
import CardRouletteAnimation from "../components/CardRouletteAnimation";
import cardRoulette from './css/CardRoulette.css';
import balloonGold from '../assets/balloon-gold.png';
import balloonWhite from '../assets/balloon-white.png';

const CardRoulette = (props) => {

    const [event, setEvent] = useState({events:'all'});

    return (
        <section id="card-roulette-container">
            <div className="big-frame">
                <div className="star-container">
                    <h1>Card Roulette</h1>
                    <EventFilter isAuth={props.isAuth} setEvent={setEvent}/>
                    <div className="star star1"></div>
                    <div className="star star2"></div>
                    <div className="star star3"></div>
                    <div className="star star4"></div>
                    <div className="star star5"></div>
                    <div className="star star6"></div>
                    <div className="star star7"></div>
                    <div className="star star8"></div>
                </div>
                <CardRouletteAnimation event={event}/>
                <div className="card-roulette-banner">
                    <div className="card-roulette-text">
                        <h2>Try your luck at the Card Roulette!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                            Ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                            Ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                    </div>
                    <div className="card-roulette-logo">
                    </div>
                </div>
                <div className="balloon1">
                    <img src={balloonGold} alt="balloon"/>
                </div>
                <div className="balloon2">
                    <img src={balloonWhite} alt="balloon"/>
                </div>
                {/* <div id="card-roulette-btn" className="card-roulette-button glow-on-hover">
                    <Link className="roulette-btn">SPIN</Link>
                </div> */}
                </div>
            </section>
    );
}

export default CardRoulette;
