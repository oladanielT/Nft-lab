import meta from '../assets/brandimages/meta.png' 
import trust from '../assets/brandimages/trustw.png' 
import walletc from '../assets/brandimages/walletconn.png' 
import exodus from '../assets/brandimages/exod.png' 
import safepal from '../assets/brandimages/safepal.png' 
const BrandInt = () => {
    return ( 
        <div className="flex flex-wrap items-center justify-center w-[100%] gap-4 mx-auto my-8">
            <div><img className='w-[300px] h-[80px]' src={meta} alt="" /></div>
            <div><img className='w-[300px] h-[80px]'src={trust} alt="" /></div>
            <div><img className='w-[250px] h-[60px]'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSaS72vI6pY7Es1zdoNrKUFeJBsyZbyHbDA&usqp=CAU" alt="" /></div>
            <div><img className='w-[300px] h-[60px]'src={exodus} alt="" /></div>
            <div><img className='w-[300px] h-[80px]'src={safepal} alt="" /></div>
        </div>
     );
}
 
export default BrandInt;