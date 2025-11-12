'use client'
import React, {useState} from 'react';



export default function Counter(props) {
     const [count, setCount] = useState(0);

     function handleClick() {
          setCount(props.incrementBy ? count+props.incrementBy : count+1)
          if (count >= 10) {
               setCount(0)
          }
     }



     return (
          <div>
               <p>Count: {count}</p>
               <button onClick={handleClick}
                    style={{
                         backgroundColor: props.color || "black" 
                         
                    }}
                    className="count-button">
                    +{props.incrementBy ? props.incrementBy : 1}
               </button>
          </div>
     );
}