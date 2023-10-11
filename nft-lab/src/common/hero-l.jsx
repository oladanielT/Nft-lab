import React from 'react';
import '../components/component.css'
const HeroL = () => {
    return ( 
        <div className="flex flex-col mx-2">
            <div>
                <h1 className="text-5xl">Discover, Collect & sell <span className="h-gradient">Extraodinary</span> NFTs.</h1>
                <p className='my-4 text-[14px] '>the loading NFT marketplace on Ethereum Home to the next generation of digital creators. Discover the best NFT collections</p>
                <div className='flex gap-8 my-8'>
                    <button className='px-8 py-[8px] bg-blue-600 rounded-full'>Explore</button>
                    <button className='border-white border-2 px-8 py-[8px] rounded-full'>Create</button>
                </div>
                {/* rate && info counts*/}
                <div className="flex items-center gap-5 my-10">
                    <div>
                        <h1 className='text-2xl'>200K+</h1>
                        <small className='text-[12px]'>Collections</small>
                    </div>

                    <div>
                        <h1 className='text-2xl'>10K+</h1>
                        <small className='text-[12px]'>Artist</small>
                    </div>

                    <div>
                        <h1 className='text-2xl'>423k+</h1>
                        <small className='text-[12px]'>Community</small>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HeroL;