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
                    className="counter-btn"
                    style={{
                         backgroundColor: props.color || "black",   // use prop color, fallback to gray
                         fontSize: "16px",
                         color: "white",
                         border: "none",
                         borderRadius: "8px",
                         padding: "10px 16px",
                    }}>
                    +{props.incrementBy ? props.incrementBy : 1}
               </button>
          </div>
     );
}