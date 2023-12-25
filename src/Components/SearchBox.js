import React from 'react';

const SearchBox = ({SearchField, searchChange}) =>{
    return(
        <div className='sb'>
        <input className='sf' type="search" name="" id="" placeholder='Search your Robo Friends' onChange={searchChange} />
        </div>
    );
}

export default SearchBox;