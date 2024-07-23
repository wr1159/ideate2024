import React from "react";
import data from './OpeningDayInfo.json';

interface DataItem {
    id: number;
    timeStart: string;
    timeEnd: string;
    description: string;
};

const typedData: DataItem[] = data;

const OpeningDay: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-x-4 text-2xl lg:text-7xl lg:pt-16 pt-8 pb-12 min-h-[50vh] gap-y-8 px-4 lg:px-8">
            <p className="uppercase pb-8 lg:pb-16">
                Semi Finals <span className="text-base lg:text-2xl">and</span> Finals
            </p>
            {/* TODO */}
            {/* add opening day schedule  */}
            <div className="font-poppins w-3/4">
                {typedData.map(item => (
                    <div key={item.id} className="grid grid-cols-6 m-5">
                        <div className="col-span-2 grid grid-cols-3 text-2xs xs:text-xs sm:text-lg lg:text-xl flex items-center">
                            <h2 className="text-right">{item.timeStart}</h2>
                            <h2 className="text-center"> - </h2>
                            <h2 className="text-left">{item.timeEnd}</h2>
                        </div>
                        <div className="flex justify-center col-span-1">
                            <div className="h-full w-1 bg-white rounded-md" />
                        </div>
                        <p className="col-span-3 text-xs xs:text-s sm:text-xl lg:text-3xl flex items-center">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OpeningDay;;
