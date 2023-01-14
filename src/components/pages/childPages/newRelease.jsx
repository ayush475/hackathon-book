import { Link } from "react-router-dom";
import ProductNewReleaseCard from "../../productCard/productNewReleaseCard";



function NewRelease() {
    return ( 
    <div>
      <div className="sm:mx-auto sm:container px-6 xl:px-0 dark:bg-gray-800" >
            <div className="flex items-center justify-between md:flex-row flex-col py-12 space-y-6 md:space-y-0 w-full">
                <div className="hidden md:block pl-2 pr-2">
                    <img className="hidden xl:block w-full" src="https://i.ibb.co/ZcSmVGf/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
                    <img className="xl:hidden w-full" src="https://i.ibb.co/mBk8myg/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1" />
                </div>
                <div className="flex justify-center items-center flex-col xl:w-2/5 md:px-6 sm:w-3/4 md:w-2/4">
                    <div className="">
                        <h1 className="xl:text-4xl text-3xl font-semibold leading-9 text-gray-800 dark:text-white">Act before it’s too late!</h1>
                    </div>
                    <div className="mt-4">
                        <p className="xl:text-xl text-base leading-7 text-center text-gray-600 dark:text-white
                        ">Furniture that looks modern and is comfortable as well. Avail the 50% offer now.</p>
                    </div>
                    <div className="mt-8 flex justify-center items-center w-full">
                        <button className="hover:opacity-75 flex justify-center bg-gray-800 dark:bg-white dark:text-black sm:w-32 w-full h-10 py-3">
                            <p className="text-base leading-none text-white dark:text-gray-800 font-bold">Explore</p>
                        </button>
                    </div>
                </div>
                <div className="flex md:w-auto w-full justify-center flex-row space-x-4 md:space-x-0">
                    <div className="w-full">
                        <img className="hidden xl:block w-full" src="https://i.ibb.co/kg4KPBG/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
                        <img className="xl:hidden w-full" src="https://i.ibb.co/JjMcGH1/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1.png" alt="sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1" />
                    </div>
                    <div className="md:hidden w-full">
                        <img className="hidden xl:block w-full" src="https://i.ibb.co/ZcSmVGf/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
                        <img className="xl:hidden w-full" src="https://i.ibb.co/mBk8myg/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1" />
                    </div>
                </div>
            </div>
        </div>

        <div className="grid justify-center 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols- md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2    bg-black ">
    <Link to={`/Product/123`}>
      <ProductNewReleaseCard />
    </Link>
    <Link to={`/Product/123`}>
      <ProductNewReleaseCard />
    </Link>
    <Link to={`/Product/123`}>
      <ProductNewReleaseCard />
    </Link>
    <Link to={`/Product/123`}>
      <ProductNewReleaseCard />
    </Link>
    <Link to={`/Product/123`}>
      <ProductNewReleaseCard />
    </Link>
    <Link to={`/Product/123`}>
      <ProductNewReleaseCard />
    </Link>
    <Link to={`/Product/123`}>
      <ProductNewReleaseCard />
    </Link>
    <Link to={`/Product/123`}>
      <ProductNewReleaseCard />
    </Link>
  
    
</div>
    </div>
    
    
     );
}

export default NewRelease;