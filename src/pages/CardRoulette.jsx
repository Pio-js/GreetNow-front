import React from 'react';
import EventFIlter from "../components/EventFIlter";
import { Carousel, Button } from "react-bootstrap";

import { useHistory } from "react-router-dom";




const CardRoulette = () => {

    const history = useHistory();

    function redirect(pass) {
        /* pass for preview  will be generated by NextJS */
        history.push("/" + pass);
    }

    return (
        <div id="card-roulette" className="page">
            
            <EventFIlter />

            <Carousel 
            className="m-auto border" style={{width:'200px', height:'300px'}}
            interval={null}
            >
                <Carousel.Item>
                    <img
                        style={{width:'200px', height:'300px'}}
                        className="d-block"
                        src="https://static.vecteezy.com/system/resources/previews/000/545/653/original/vector-happy-birthday-greeting-card.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{width:'200px', height:'300px'}}
                        className="d-block"
                        src="https://i.pinimg.com/originals/44/c4/fb/44c4fb8acba4a7249cc3f50d13d2281b.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="flex flex-row justify-content-around">
                <Button variant='warning' onClick={() => redirect('card-editor')}>Edit</Button>
                <Button variant='warning'onClick={ () => redirect('pass')}>Send</Button>
            </div>

            <Button className="m-auto" variant='danger'>Generate</Button>
            
        </div>
    );
}

export default CardRoulette;
