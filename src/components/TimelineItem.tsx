import React from "react";

type TimelineItemProps = {
    title: React.ReactNode;
    date: React.ReactNode;
    desc?: React.ReactNode | null;
    direction: 'left' | 'center' | 'right';
    shape: 'circle' | 'triangle' | 'square';
    textColor?: 'blue' | null;
  };
  
  const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, desc, direction, shape, textColor }) => {
    // let alignmentClasses = 'col-span-3 text-center'; // Default alignment
    let markerSource = '../timeline/timeline_circle.png';
    let markerName = 'Timeline Circle';
    
    // if (direction === 'left') {
    //   alignmentClasses = 'col-span-1 text-left';
    // } else if (direction === 'right') {
    //   alignmentClasses = 'col-span-1 text-right';
    // }

    if (shape === 'triangle') {
        markerSource = '../timeline/timeline_triangle.png';
        markerName = 'Timeline Triangle';
    } else if (shape === 'square') {
        markerSource = '../timeline/timeline_square.png';
        markerName = 'Timeline Square'
    }
  
    return (
        <div className="w-full h-28 lg:h-48 grid grid-cols-3 ">
        {/* Empty column on the left for 'right' direction */}
        {direction === 'right' && <div className="col-span-1"></div>}
        
        {/* Text in the left column if direction is 'left' */}
        {direction === 'left' && (
            <div className={ `col-span-1 text-left uppercase ` + (textColor === 'blue' ? 'text-[#1C34D4]' : '')}>
                <p className={(textColor === 'blue' ? 'blue-text-outline text-white ': 'white-text-outline text-[#1C34D4] ') + `text-base lg:text-3xl`}>
                    {date}
                </p>
                <p>
                    {title}
                </p>
                <p className="mt-2 lg:mt-4 text-sm xs:text-base lg:text-3xl">{desc}</p>
            </div>
        )}
        
        <div className='flex col-span-1 justify-center'>
            <img
            src={markerSource}
            alt={markerName}
            className='w-10 h-10 lg:w-20 lg:h-20 object-contain'
            />
        </div>
        
        {/* Empty right column if direction is 'left' */}
        {direction === 'left' && <div className="col-span-1"></div>}
        
        {/* Text in the right column if direction is 'right' */}
        {direction === 'right' && (
            <div className={ `col-span-1 text-right uppercase ` + (textColor === 'blue' ? 'text-[#1C34D4]' : '')}>
                <p className={(textColor === 'blue' ? 'blue-text-outline text-white ': 'white-text-outline text-[#1C34D4] ') + `text-base lg:text-3xl`}>
                    {date}
                </p>
                <p>
                    {title}
                </p>
                <p className="mt-2 lg:mt-4 text-sm xs:text-base lg:text-3xl">{desc}</p>
            </div>
        )}
    </div>
    );
  };

export default TimelineItem;