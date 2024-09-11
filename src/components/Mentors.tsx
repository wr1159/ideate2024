import React from "react";
import Profile from "./Profile";

const Mentors: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-x-4 text-4xl lg:text-7xl lg:pt-16 pt-8 pb-12 gap-y-8 px-4 lg:px-8">
            <p className="uppercase pt-8 pb-4 lg:pt-8 lg:pb-8">Mentors</p>

            <div className="flex flex-col items-center">
                <p className="uppercase text-3xl lg:text-5xl p-5 lg:p-8">Industrial Mentors</p>
                <div className="flex flex-col lg:flex-row">
                    <Profile 
                        name='Ms Gladys Yuen' 
                        picture='../mentors/industrial/gladys_yuen.png'
                        title='Developer Relations - Tribe & Angelhack'
                        link='https://www.linkedin.com/in/gladys-yuen/?originalSubdomain=sg' 
                    />
                    <Profile 
                        name='Mr Sathvik Rao' 
                        picture='../mentors/industrial/sathvik_rao.png'
                        title='Managing Director - Digital Engineering & Manufacturing Lead (SEA) of Industry X, Accenture'
                        link='https://www.linkedin.com/in/sathviksrao/?originalSubdomain=sg' 
                    />
                    <Profile
                        name='Prof Chan Tong Leong' 
                        picture='../mentors/industrial/chan_tong_leong.png'
                        title='Venture Corporation Limited, Adjunct Professor NUS'
                        link='https://www.linkedin.com/in/tong-leong-chan-033b934/?originalSubdomain=sg' 
                    />
                </div>
                <div className="flex flex-col lg:flex-row">
                    <Profile 
                        name='Mr Sandeep Ranalkar' 
                        picture='../mentors/industrial/sandeep_ranalkar.png'
                        title='Industry Principal Director - Digital Manufacturing & Operations | Accenture - Industry X (South East Asia)'
                        link='https://www.linkedin.com/in/sandeepranalkar/?originalSubdomain=my' 
                    />
                    <Profile
                        name='Prof Lim Yeow Khee' 
                        picture='../mentors/industrial/yeow_khee_lim.jpeg'
                        title='Managing Director - LYK Aerospace(s) PTE LTD'
                        link='https://www.linkedin.com/in/yeow-khee-lim-7393331/' 
                    />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p className="uppercase text-3xl lg:text-5xl p-5 lg:p-8">Student Mentors</p>
                <div className="flex flex-col lg:flex-row">
                    <Profile 
                        name='Mohamed Elsayed' 
                        picture='../mentors/student/mohamed_elsayed.jpg'
                        title='Y3 Electrical Engineering'
                        link='https://www.linkedin.com/in/mohamed-elsayed-53269624a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
                    />
                    <Profile 
                        name='Nicholas Tan Yan Yu' 
                        picture='../mentors/student/nicholas.jpg'
                        title='Y3 Computer Engineering Student'
                        link='https://www.linkedin.com/in/nicholas-tan-1615b8207/'
                    />
                    <Profile 
                        name='Muthukumaran Yogeeswaran' 
                        picture='../mentors/student/yogee.jpg'
                        title='Y3 Engineering Science Program'
                        link='https://www.linkedin.com/in/yogee-b844a8207' 
                    />
                </div>
                <div className="flex flex-col lg:flex-row">
                    <Profile 
                        name='Thulasidas Muthukumar' 
                        picture='../mentors/student/thulasidas.jpg'
                        title='Y3 Mechanical Engineering'
                        link='https://www.linkedin.com/in/thulasidas-muthukumar-2a436a1b5/'
                    />
                    <Profile 
                        name='Chai Zi Yang' 
                        picture='../mentors/student/chai_zi_yang.jpg'
                        title='Y3 Electrical Engineering'
                        link='https://www.linkedin.com/in/zi-yang-chai-a80535221/'
                    />
                </div>
            </div>
        </div>
    )
}

export default Mentors;