import React, { Component } from 'react'; 
import '../cComponents';


const Hello = (props) => {
  return (
    <><div className='hlo'>
      <img src="https://www.latimes.com/projects/artificial-intelligence-generated-art-ownership-bias-dall-e-midjourney/assets/images/700/8.1bbe596e.png" alt="" />
      <h1>Hello World</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam adipisci quisquam aperiam nostrum vitae minima fuga corporis consectetur distinctio minus voluptas quasi similique ipsam veniam soluta iure fugiat, ipsa rerum?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam adipisci quisquam aperiam nostrum vitae minima fuga corporis consectetur distinctio minus voluptas quasi similique ipsam veniam soluta iure fugiat, ipsa rerum?
      </p>
      <a href="#"> Learn More About me</a>
    </div>
    <div className='f3'>
        <h1>propt</h1>
        <p>{props.greetings}</p>
      </div></>
  );
}
  
  export default Hello;