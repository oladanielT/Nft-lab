import React from 'react';
import eth from '../assets/images/eth.png'
const TrendingCard = (props) => {
    const {nftItem} = props;
    return ( 
        <div>
                <div className='img-border h-[550px] mx-auto  md:w-[350px] lg:w-[280px] md:h-[300px] bg-[#000000] p-3 rounded-xl'>
                        <div className='w-full h-[75%]  rounded-xl'>
                            <img className='w-full h-full bg-gray-100 rounded-xl object-cover' src={nftItem.banner} alt="" />
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='my-3 flex items-center gap-3'>
                                <img className='w-[40px] rounded-xl h-[40px] bg-gray-100 object-contain ' src={nftItem.collection_logo} alt="" />
                                <div className='flex flex-col'>
                                    <span className='text-[14px]'>{nftItem.collection_name}</span>
                                    <span className='text-[10px]'>{nftItem.owner_name}</span>
                                </div>
                            </div>
                            <img className='w-10 ' src={eth} alt="" />
                        </div>
                       
                       
                    </div> 
        </div>
     );
}
 
export default TrendingCard;