import React, { useEffect, useState } from 'react'
import Slider from 'react-slick/lib/slider';
import data from '../data'
import TrendingCard from '../common/trendingCard';
import './component.css';
// import Slider from 'react-slick';



const TrendingNft = () => {
    const [slidesToShow, setSlideToShow] = useState(3);

useEffect(()=>{
    const updateSlideShow = () =>{
        if (window.innerWidth < 768){
            setSlideToShow(1);
        }else if(window.innerWidth < 1000 && window.innerWidth > 768){
            setSlideToShow(2)
        }
        else {
            setSlideToShow(3);
        }
    }

    window.addEventListener('resize', updateSlideShow);
    updateSlideShow();

    return() => {
        window.removeEventListener('resize', updateSlideShow);
    };
}, [])
 

const settings={
        slidesToShow,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        speed:500,
        arrows:false
    }

    const next = ()=>{
        return this.slider.slickNext();

    }

  
    return ( 
        <div className=''>
            <div className='flex justify-center'>
                <span className="h-gradient text-3xl">Trending NFTs</span>
            </div>
            <div className='relative mt-12'>
                <div className='w-[200px] h-[200px] bg-[#8e3cec] absolute blur-[160.58px] top-[40%] left-[50%] z-[-91]'></div>
                <div className=''>
                    <Slider {...settings}>
                              {data.map((item)=>(
                             <TrendingCard nftItem={item}/>  
                        ))}  
                      
                    </Slider>
                </div>
                <div className='w-full flex justify-center my-10'>
                    <button onClick={next} className='px-10 rounded-full text-[13px] w-[150px] py-2 border-2 border-white'>SEE MORE</button>
                </div>
             
            </div>
        </div>
     );
}
 
export default TrendingNft;