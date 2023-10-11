import React from 'react';
import info from '../infoItem';
import './component.css'

const InfoSection = () => {
  return (
    <div className='w-full mx-auto mb-10 mt-20 border-2 rounded-xl border-gray-700'>
        <h1 className='h-gradient text-center text-3xl mt-8'>Create and sell your NFTs</h1>
        <div className='w-full grid md:grid-cols-3   p-8'>
          
            {info.map(data => (
                <div className='gap-1 text-center flex flex-col items-center justify-center p-2 my-2'>
                    <span>{data.icon}</span>
                    <span className='text-[16px] my-3'>{data.title}</span>
                    <p className='text-[12px]'>{data.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default InfoSection;