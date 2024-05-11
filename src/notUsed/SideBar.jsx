import React from 'react';
import {SideBarData} from './SideBarData';

const SideBar = () => {
    return ( 
        <div className="sideBar"> {/* Corrected className from "sideBar" to "sidebar" */}
            
            <ul className="SideBarList">
            {SideBarData.map((val, key) => { {/* Added parentheses around parameters */}
                return (
                    <li key={key} 
                    className="row"
                    onClick={() => {window.location.pathname = val.link}}>    
                        <div><strong>{val.title}</strong></div>
                    </li> 
                );
            })}
            </ul>
        </div>
    );
}
 
export default SideBar;
