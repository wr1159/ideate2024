import React from "react";
import Profile from "./Profile";

const Judges: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-x-4 text-4xl lg:text-7xl lg:pt-16 pt-8 pb-12 gap-y-8 px-4 lg:px-8">
            <p className="uppercase pt-8 pb-4 lg:pt-8 lg:pb-8">Judges</p>

            <div className="flex flex-col items-center">
                <p className="uppercase text-3xl lg:text-5xl p-5 lg:p-8">PDR</p>
                <div className="flex flex-col lg:flex-row">
                    <Profile 
                        name='Dr Kate Sangwon Lee' 
                        picture='../judges/kate_sangwon_lee.jpg'
                        link='https://www.linkedin.com/in/katesangwonlee/?originalSubdomain=sg' 
                    />
                    <Profile 
                        name='Dr Cai Shaoyu' 
                        picture='../judges/cai_shaoyu.jpg'
                        link='https://www.linkedin.com/in/shaoyu-cai-63a96523a/?originalSubdomain=sg'
                    />
                    <Profile 
                        name='Mr Eugene Ee' 
                        picture='../judges/eugene_ee.png'
                        link='https://www.linkedin.com/in/wheee54/?originalSubdomain=sg' 
                    />
                    <Profile 
                        name='Mr Royston Shieh' 
                        picture='../judges/royston_shieh.jpeg'
                        link='https://www.linkedin.com/in/royston-s-961b96118/'
                    />
                    <Profile 
                        name='Mr Nicholas Chew' 
                    />
                    <Profile 
                        name='Mr Graham Zhu' 
                    />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p className="uppercase text-3xl lg:text-5xl p-5 lg:p-8">Semi-Finals</p>
                <div className="flex flex-col lg:flex-row">
                    <Profile 
                        name='Mr Santosh Kumar' 
                        picture='../judges/santosh_kumar.jpeg'
                        link='https://www.linkedin.com/in/santosh-kumar-13b5a923/?originalSubdomain=sg.com' 
                    />
                    <Profile 
                        name='Mr Luuk Eliens' 
                        link='https://www.linkedin.com/in/luuk-eliens/?originalSubdomain=sg' 
                    />
                    <Profile 
                        name='Mr Kok Kwong Koon' 
                        link='https://www.linkedin.com/in/kok-kwong-koon-801725/?originalSubdomain=sg' 
                    />
                    <Profile 
                        name='Dr Mark P. De Lessio' 
                        picture='../judges/mark_p_de_lessio.png'
                        link='https://www.linkedin.com/in/drmarkdelessio/'
                    />
                    <Profile
                        name="Dr Jovan Tan"
                        picture='../judges/jovan.jpeg'
                        link="https://www.linkedin.com/in/jovantan/"
                    />
                </div>
                {/* <p className="font-poppins text-lg lg:text-3xl">To be confirmed...</p> */}
            </div>
            <div className="flex flex-col items-center">
                <p className="uppercase text-3xl lg:text-5xl p-5 lg:p-8">Finals</p>
                <div className="flex flex-col lg:flex-row">
                    <Profile 
                        name='Prof Khoo Eng Tat' 
                        picture='../judges/khoo_eng_tat.jpg'
                        link='https://www.linkedin.com/in/engtatkhoo/' 
                    />
                    <Profile 
                        name='Mrs Ho Yuen Ping' 
                        picture='../judges/yuen_ping.jpg'
                        link='https://www.linkedin.com/in/yp-ho-304b08140/'
                    />
                    <Profile 
                        name='Mr Richard Ng' 
                        picture='../judges/richard_ng.jpg'
                        link='https://www.linkedin.com/in/richardngwithmeaningfulpursuits/?originalSubdomain=sg'
                    />
                </div>
            </div>
        </div>
    )
}

export default Judges;