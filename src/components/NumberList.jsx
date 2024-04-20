import React, { useState } from 'react'

function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.props;
    console.log(numbers);
    return (
      <ul>
        {
        numbers.map((number) =>        
            <ListItem key={number.toString()}                  
                    value={number} 
            />      
        )}   
      </ul>
    );
  }

export default NumberList