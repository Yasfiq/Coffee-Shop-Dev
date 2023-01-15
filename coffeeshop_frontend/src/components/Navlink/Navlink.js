// Imports
import React from "react";
import { Link } from "react-router-dom";


const Navlink = (props) => {
    return (
        <>
            <li className="mr-5">
                <Link to={`${props.linkto}`}>
                    <a href={`${props.linkto}`} className={`text-secondary font-rubik ${props.active && 'font-bold'}`}>{props.title}</a>
                </Link>
            </li>
        </>
    )
}

export default Navlink