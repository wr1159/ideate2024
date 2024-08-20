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
                        name='Dr Lee Sangwon' 
                        picture='../judges/kate_sangwon_lee.jpg'
                        title='Lecturer - National University of Singapore'
                        link='https://www.linkedin.com/in/katesangwonlee/?originalSubdomain=sg' 
                    />
                    <Profile 
                        name='Dr Cai Shaoyu' 
                        picture='../judges/cai_shaoyu.jpg'
                        title='Lecturer - National University of Singapore'
                        link='https://www.linkedin.com/in/shaoyu-cai-63a96523a/?originalSubdomain=sg'
                    />
                    <Profile 
                        name='Mr Eugene Ee' 
                        picture='../judges/eugene_ee.png'
                        title='Engineering Instructor - National University of Singapore'
                        link='https://www.linkedin.com/in/wheee54/?originalSubdomain=sg' 
                    />
                    <Profile 
                        name='Mr Royston Shieh' 
                        picture='../judges/royston_shieh.jpeg'
                        title='Engineering Instructor - National University of Singapore'
                        link='https://www.linkedin.com/in/royston-s-961b96118/'
                    />
                </div>
                <div className="flex flex-col lg:flex-row">
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
                        title='Lead Mechanical Engineer - Dyson'
                        link='https://www.linkedin.com/in/santosh-kumar-13b5a923/?originalSubdomain=sg.com' 
                    />
                    <Profile 
                        name='Mr Luuk Eliens' 
                        title='Co-Founding Managing Partner - Singapore Deep-Tech Alliance'
                        link='https://www.linkedin.com/in/luuk-eliens/?originalSubdomain=sg' 
                    />
                    <Profile 
                        name='Mr Koon Kok Kwong' 
                        picture='../judges/koon_kok_kwong.jpg'
                        title='Chief Technology Officer - RIA Venture Capital'
                        link='https://www.linkedin.com/in/kok-kwong-koon-801725/?originalSubdomain=sg' 
                    />
                </div>
                <div className="flex flex-col lg:flex-row">
                    <Profile 
                        name='Dr Mark P. De Lessio' 
                        picture='../judges/mark_p_de_lessio.png'
                        title='Associate Professor - National University of Singapore'
                        link='https://www.linkedin.com/in/drmarkdelessio/'
                    />
                    <Profile
                        name="Dr Jovan Tan"
                        picture='../judges/jovan.jpeg'
                        title='WEF Fellow, Lecturer - National University of Singapore'
                        link="https://www.linkedin.com/in/jovantan/"
                    />
                </div>
                {/* <p className="font-poppins text-lg lg:text-3xl">To be confirmed...</p> */}
            </div>
            <div className="flex flex-col items-center">
                <p className="uppercase text-3xl lg:text-5xl p-5 lg:p-8">Finals</p>
                <div className="flex flex-col lg:flex-row">
                    <Profile 
                        name='Dr Khoo Eng Tat' 
                        picture='../judges/khoo_eng_tat.jpg'
                        title='Assistant Dean & Associate Professor - National University of Singapore'
                        link='https://www.linkedin.com/in/engtatkhoo/' 
                    />
                    <Profile 
                        name='Mrs Ho Yuen Ping' 
                        picture='../judges/yuen_ping.jpg'
                        title='Senior Associate Director, Ecosystem Business Development - NUS Enterprise'
                        link='https://www.linkedin.com/in/yp-ho-304b08140/'
                    />
                    <Profile 
                        name='Mr Richard Ng' 
                        picture='../judges/richard_ng.jpg'
                        title='Business Development Professional - ST Engineering Urban Solutions'
                        link='https://www.linkedin.com/in/richardngwithmeaningfulpursuits/?originalSubdomain=sg'
                    />
                </div>
            </div>
        </div>
    )
}

export default Judges;