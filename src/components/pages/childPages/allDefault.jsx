
import { Link } from "react-router-dom";
import ProductCard from "../../productCard/productCard";
import ProductNewReleaseCard from "../../productCard/productNewReleaseCard";
import ProductOfferCard from "../../productCard/productOfferCard";






function AllDefault() {
    return ( <div className="grid justify-center 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols- md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2    bg-black ">
       
        <Link to={`/Product/123`}>
          <ProductNewReleaseCard/>
        </Link>
        <Link to={`/Product/123`}>
          <ProductCard />
        </Link>
        <Link to={`/Product/123`}>
          <ProductCard />
        </Link>
        <Link to={`/Product/123`}>
          <ProductNewReleaseCard/>
        </Link>
        <Link to={`/Product/123`}>
          <ProductCard />
        </Link>
        <Link to={`/Product/123`}>
          <ProductNewReleaseCard/>
        </Link>
        <Link to={`/Product/123`}>
          <ProductNewReleaseCard/>
        </Link>
        <Link to={`/Product/123`}>
          <ProductNewReleaseCard/>
        </Link>
        <Link to={`/Product/123`}>
          <ProductCard />
        </Link>
        <Link to={`/Product/123`}>
          <ProductCard />
        </Link>
        <Link to={`/Product/123`}>
          <ProductCard />
        </Link>
        <Link to={`/Product/123`}>
          <ProductNewReleaseCard/>
        </Link>
    </div> );
}

export default AllDefault;