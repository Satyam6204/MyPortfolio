import React from "react";
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="flex justify-center items-center align-middle h-20">
                <ul className="flex gap-6 w-70 bg-black text-white justify-center h-10 items-center 
                rounded-4xl text-1xl md:text-2xl xl:text-2xl shadow-amber-300 shadow-md md:shadow-red-300 xl:shadow-blue-300 md:w-100 ">
                    <li className="hover:text-amber-300 md:hover:text-red-300 xl:hover:text-blue-300"><Link to='/Home'>Home</Link></li>

                    <li className="hover:text-amber-300 md:hover:text-red-300 xl:hover:text-blue-300"><Link to='/About'>About</Link></li>

                    <li className="hover:text-amber-300 md:hover:text-red-300 xl:hover:text-blue-300"><Link to='/Contact'>Contact</Link></li>
                </ul>
            </div>

        </>
    )

}
export default Header;