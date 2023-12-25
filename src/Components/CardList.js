import React from 'react';
import Card from '../Components/Card';

const CardList = ({Robots}) => {

    // if(true){
    //     throw new Error('nooooo');
    // }

    const CardComponents = Robots.map((user, i) => {
        return <Card key={i} id={Robots[i].id} name={Robots[i].name} email={Robots[i].email}/>
    } )
    return(
        <div className='mm'>
            {CardComponents}
        </div>
    )
}


export default CardList;