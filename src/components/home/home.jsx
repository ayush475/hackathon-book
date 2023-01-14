import { BrowserRouter,Link ,Route } from 'react-router-dom';
import Carousel from '../carousel/carousel';
import ProductCard from '../productCard/productCard';
import ProductNewReleaseCard from '../productCard/productNewReleaseCard';
import ProductOfferBox from '../productOfferBox/productOfferBox';
import demoImage1 from './demoImage1.jpg';
import demoImage2 from './demoImage2.jpg';
import demoImage3 from './demoImage2.jpg';

import About from '../pages/About';
import Contact from '../pages/Contact';
// import Footer from '../footer/footer';
import Search from '../../Test/Search';
import Snav from '../../Test/Snav';
import Carousel1 from './Carousel1';


function Home() {
  return (
    <div className='m-0'>
      <Carousel1/>
     <div className='max-w-[1240px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>
                <Link to="/events">EVENTS</Link>
                  </p>
                
               
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1573690706484-86f444f0b940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
        </div>
        
        <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>BILLING</p>
              
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://img.freepik.com/free-vector/indian-rupee-money-bag_23-2147997926.jpg?w=740&t=st=1673712678~exp=1673713278~hmac=1b99d34bce18827aa729ff431702e7e566a1440366a46c2c0c0accc8293503c4" alt="" />
        </div>
        <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>MENU</p>
               
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1625173616412-7b403d49a41e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
        </div>
        <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>VOUCHER</p>
               
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://img.freepik.com/free-vector/gift-coupon-with-ribbon-offer_24877-55663.jpg?w=826&t=st=1673712572~exp=1673713172~hmac=d5d425f7ad04234b7df3f082e1bc5a7daa30384954a186db02a7de9293aecc3f" alt="" />
        </div>
        <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>REEDEM</p>
               
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://st2.depositphotos.com/4142621/6260/i/450/depositphotos_62602713-stock-photo-clicking-a-redeem-button-3d.jpg" alt="" />
        </div>
    </div>

   

</div>
  );
}

export default Home;
