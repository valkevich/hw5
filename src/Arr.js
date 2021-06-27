import React from 'react';
import data from './data.json';


const Arr = () => {
    return (
        <div>
            {data.map(item => {
                return(
                    <div>
                        <h3>{item.name.first}</h3>
                        <h4>{item.name.last}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Arr