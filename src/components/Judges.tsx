import React from "react";
import Profile from "./Profile";

const Judges: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-x-4 text-4xl lg:text-7xl lg:pt-16 pt-8 pb-12 gap-y-8 px-4 lg:px-8">
            <p className="uppercase pt-8 pb-4 lg:pt-8 lg:pb-8">Judges</p>

            <div className="flex flex-col items-center">
                <p className="uppercase text-3xl lg:text-5xl p-5 lg:p-8">PDR</p>
                <p className="font-poppins text-lg lg:text-3xl">To be confirmed...</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="uppercase text-3xl lg:text-5xl p-5 lg:p-8">Semi-Finals</p>
                <p className="font-poppins text-lg lg:text-3xl">To be confirmed...</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="uppercase text-3xl lg:text-5xl p-5 lg:p-8">Finals</p>
                <div className="flex flex-col lg:flex-row">
                    <Profile 
                        name='Mr Santosh Kumar' 
                        picture='../judges/santosh_kumar.jpeg'
                        link='https://www.linkedin.com/in/santosh-kumar-13b5a923/?originalSubdomain=sg.com' 
                    />
                    <Profile 
                        name='Prof Khoo Eng Tat' 
                        picture='../judges/khoo_eng_tat.jpg'
                        link='https://www.linkedin.com/in/engtatkhoo/' 
                    />
                    <Profile 
                        name='Mrs Ho Yuen Ping' 
                    />
                </div>
            </div>
        </div>
    )
}

export default Judges;