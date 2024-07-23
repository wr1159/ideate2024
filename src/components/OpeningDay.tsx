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
            <p className="uppercase pt-20 pb-4 lg:pb-8">
                Opening Day
            </p>
            {/* TODO */}
            {/* add opening day schedule  */}
            <div className="font-poppins w-3/4">
                {typedData.map(item => (
                    <div key={item.id} className="grid grid-cols-5 m-5">
                        <div className="col-span-1" />
                        <div className="col-span-1 flex items-center w-full grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 text-sm xs:text-base sm:text-lg lg:text-xl">
                            <h2 className="text-center md:text-right">{item.timeStart}</h2>
                            <h2 className="text-center">
                                <span className="block md:hidden">|</span>
                                <span className="hidden md:block">-</span>
                            </h2>
                            <h2 className="text-center md:text-left">{item.timeEnd}</h2>
                        </div>
                        <div className="col-span-1 flex justify-center col-span-1">
                            <div className="h-full w-1 bg-white rounded-md" />
                        </div>
                        <p className="col-span-2 text-sm xs:text-base sm:text-xl lg:text-3xl flex items-center">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OpeningDay;