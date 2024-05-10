import Nav from "../../Nav";
import { useState } from "react";
import useFetch from '../../useFetch';
import './info.css'


const Info = ({ crads }) => {
    
    const [count, setCount] = useState(0)
    return ( 
    <div className='info'>
    <Nav />
    <div className="data">
  

    </div>  
    <div className="count">
      <button onClick={() => setCount((count) =>{if(count>0){count - 1}} )}>
          
         <strong> -</strong>
        </button>
          <a>amount to donate is {count}</a>
        <button onClick={() => setCount((count) => count + 1)}>
          <strong>+</strong>
        </button>
        <p>
        <button onClick={() => setCount((count) => count =0)}>
        Donate</button>
        </p>
      </div>  
      
      
    </div>

     );
}
 
export default Info;