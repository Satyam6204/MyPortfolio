import React, { useState } from "react";
import { Link } from 'react-router-dom'





function Header() {

    const [mode, setMode] = useState(false)
    console.log(mode)



    return (
        <>

            <div className="flex justify-center items-center align-middle h-20">
                <ul className="flex gap-4  bg-black text-white justify-center h-10 items-center 
                rounded-4xl text-1xl md:text-1xl xl:text-1xl shadow-amber-300 shadow-md md:shadow-blue-300 xl:shadow-red-300 md:w-100 ">
                    <li className="hover:text-amber-300 md:hover:text-blue-300 xl:hover:text-red-300"><Link to='/Home'>Home</Link></li>

                    <li className="hover:text-amber-300 md:hover:text-blue-300 xl:hover:text-red-300"><Link to='/About'>About</Link></li>

                    <li className="hover:text-amber-300 md:hover:text-blue-300 xl:hover:text-red-300"><Link to='/Projects'>Projects</Link></li>

                    <li className="hover:text-amber-300 md:hover:text-blue-300 xl:hover:text-red-300"><Link to='/Contact'>Contact</Link></li>
                    <li><button className="border-2 border-amber-50 rounded-4xl" onClick={() => setMode(true)}>🌕</button></li>
                    <li><button className="border-2 border-amber-50 rounded-4xl" onClick={() => setMode(false)}>🌙</button></li>
                </ul>


            </div>

        </>
    )

}
export default Header;