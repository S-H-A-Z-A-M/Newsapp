import React from 'react';
import Card from './card';
import data from '../data/sampleNews.json'

function Newsapp() {
    return (
        <div className="container">
            {data.map((element, index)=> {
                return <Card
                key={index}
                data={element}
                />
            })}
        </div>
      );
    }; 

export default Newsapp;