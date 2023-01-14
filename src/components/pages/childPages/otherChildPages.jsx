import { Link } from "react-router-dom";
import ProductCard from "../../productCard/productCard";

function OtherChildPages() {
    return ( <div className="grid justify-center 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols- md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2    bg-black ">
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
      <ProductCard />
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
      <ProductCard />
    </Link>
</div> )
}

export default OtherChildPages;