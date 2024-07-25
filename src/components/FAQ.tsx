import React from "react";
import Accordion from "./FAQAccordian";

const FAQ: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-x-4 text-2xl lg:text-7xl lg:pt-16 pt-8 pb-12 min-h-[50vh] gap-y-8 px-4 lg:px-8">
            <p className="uppercase pb-4 lg:pb-8">
                faq
            </p>
            <div className="relative flex flex-col items-center justify-center">
                {/* <div className="z-0 absolute left-0 bottom-0">
                    <img src="../FAQ/bulb_wo_house.png" className="h-[50vh] w-[50vh] object-contain" />
                </div> */}
                <div className="flex flex-col w-3/4 items-left text-lg lg:text-xl font-poppins z-10">
                    <Accordion
                        title='Who can participate in IDEATE 2024?'
                        content='IDEATE 2024 is open to University students from all disciplines and years of study.'
                    />
                    <Accordion
                        title='Do I have to be from Engineering/iDP to join?'
                        content='Nope! In fact, we encourage you to form interdisciplinary teams for this makeathon, to maximise your chances in the technical, design and business aspects.'
                    />
                    <Accordion 
                        title='I am a Poly/JC student, can I participate in IDEATE 2024?'
                        content={
                            <span>
                                As this event is mainly targeted towards University undergraduates, do write in to our {" "} 
                                <a
                                    className="underline text-gray-300 hover:text-white"
                                    href="mailto:idp.studentsclub@u.nus.edu"
                                    target="_blank"
                                >
                                    email
                                </a> 
                                {" "} to see how we may accomodate you!
                            </span>
                        }
                    />
                    <Accordion
                        title='I have no coding/engineering/business experience, am I highly disadvantaged?'
                        content='We provide comprehensive workshops and mentorship to guide you through the process, so no prior experience is necessary.'
                    />
                    <Accordion
                        title='What are The Hangar and VIP IMPACT Greenlane opportunities?'
                        content={
                            <span>
                                Do visit{" "}
                                <a 
                                    className="underline text-gray-300 hover:text-white"
                                    href='https://enterprise.nus.edu.sg/supporting-entrepreneurs/nus-startup-runway/the-hangar/' 
                                    target='_blank'
                                >
                                    The Hangar 
                                </a>
                                {" "} and the {" "} 
                                <a  
                                    className="underline text-gray-300 hover:text-white"
                                    href='https://enterprise.nus.edu.sg/funding/nus-venture-initiation-programme-impact-track/'
                                    target='_blank'
                                >
                                    NUS Venture Initiation Programme (VIP) - Impact Track
                                </a>
                                {" "} websites to find out more. 
                            </span>
                        }
                    />
                    <Accordion
                        title='What is the commitment like?'
                        content='This makeathon lasts for 5 weeks and has a few compulsory sessions/workshops, but your level of involvement is entirely up to you.'
                    />
                    <Accordion
                        title='Do I need a team to participate?'
                        content='You will be forming a team of 3-5 members, but if you are joining individually or as a pair, we can help you form teams with other participants as well.'
                    />
                </div>
            </div>
        </div>
    )
}

export default FAQ;