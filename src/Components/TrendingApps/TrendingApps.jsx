import React from 'react';
import { FaDownload, FaRegStar } from 'react-icons/fa';

const TrendingApps = ({app}) => {
    return (
        <div className='p-2 h-[400px] bg-gray-50 flex flex-col items-center justify-center shadow-2xl'>
            <div>
                <img className='w-[300px] h-[300px] rounded-[15px]' src={app.image} alt="" />
            </div>
            <h4>{app.title}</h4>
            <div className='flex gap-28'>
                <div className='bg-[#F1F5E8] p-2 flex items-center gap-2 text-[#00D390]'><FaDownload /> {app.downloads}</div>
                <div className='bg-[#FFF0E1] p-2 flex items-center gap-2 text-[#FF8811]'><FaRegStar />{app.ratingAvg}</div>
            </div>
           
        </div>
    );
};

export default TrendingApps;