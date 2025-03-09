import React, { useState } from "react";
import Animation01 from "../Animation/Animation01";



function ImgTitle() {

    const [like, setLike] = useState(991)

    return (
        <>



            <div className=" flex h-full w-full justify-evenly flex-col">
                <div className="flex justify-center items-center align-middle flex-col gap-5  w-full  py-5  ">


                    <h1 className=" text-xl font-bold">HI,I'M SATYAM</h1>
                    <h2 className=" text-6xl font-extrabold">FULL STACK JAVA DEVELOPER</h2>


                    <h2 className=" text-1xl font-bold">Passionate about creating scalable, efficient, and user-friendly web applications using modern technologies to deliver impactful and high-performing digital solutions.</h2>
                    <h4>❤{like}</h4>
                    <button className=" w-20 bg-blue-300 rounded-2xl hover:bg-pink-300 " onClick={() => setLike(like + 1)} ><span className="font-extrabold">Like</span> </button>
                </div>

                <div>

                    <Animation01 />

                </div>



            </div>

        </>
    )
}
export default ImgTitle