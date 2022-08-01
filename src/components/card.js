import React from 'react';
import './card.css';
// import image from '../images/undraw_news_re_6uub.svg'

function Card(props) {
    const { data: { source, title, description, author, urlToImage, url } } = props

    return (
        <div className='container'>
        <div className='card'>
            <img className='image' src= {urlToImage} alt='' />
            <h2 className='heading'>{title}</h2>
            <p className='desc'>{description}</p>
            <p className='author'>{author}</p>
            <a href={url} target='#'><button className='readmore'>Read More</button></a>
            <p className='source'>{source.name}</p>
        </div>
        </div>
    );
}

export default Card;