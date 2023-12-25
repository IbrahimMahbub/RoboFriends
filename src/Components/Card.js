import React from 'react';
import './Card.css';


const Card = ({name, email, id}) => {
    const robolink = `https://robohash.org/${id}?200x200`;
    return(
        <div className='crd'>
            <img alt='robots' src={robolink} />
            <div className='content'>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{robolink}</p>
            </div>
        </div>
    );
}


export default Card;