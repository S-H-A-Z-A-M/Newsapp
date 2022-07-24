import React from 'react';
import './card.css';
import image from '../images/undraw_news_re_6uub.svg'

function Card(){
    return (
        <div className='container'>
        <div className='card'>
            <img className='image' src= {image} alt='' />
            <h2 className='heading'>Heading of the News</h2>
            <p className='desc'>Short description of the news </p>
            <p className='author'>Authour and time of the publication</p>
            <button className='readmore'>Read More</button>
            <p className='source'>source</p>
        </div>
        </div>
    );
}

export default Card;