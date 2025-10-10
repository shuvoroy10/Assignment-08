import React from 'react';
import { FaDownload, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AllApp = ({app}) => {
    const {id, image, title, downloads, ratingAvg} = app
    return (
        <Link to={`/apps/${id}`}>
        <div className='p-2 h-[400px] bg-gray-50 flex flex-col items-center justify-center shadow-2xl hover:rotate-1'>
                    <div>
                        <img className='w-[300px] h-[300px] rounded-[15px]' src={image} alt="" />
                    </div>
                    <h4>{title}</h4>
                    <div className='flex gap-28'>
                        <div className='bg-[#F1F5E8] p-2 flex items-center gap-2 text-[#00D390]'><FaDownload /> {downloads}M</div>
                        <div className='bg-[#FFF0E1] p-2 flex items-center gap-2 text-[#FF8811]'><FaRegStar />{ratingAvg}</div>
                    </div>
                   
                </div>
        </Link>
    );
};

export default AllApp;