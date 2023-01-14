import productDemoImage from "../productCard/productDemoImage.jpg";

function ProductOfferBox() {
  const product = () => {
    return (
      <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={productDemoImage} alt="" />
        </a>
        <div className="p-1">
          <p className=" font-normal text-gray-700 dark:text-gray-400">
            Samsung F22
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="p-2 max-w-sm  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between">
        <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Dashain 2021
        </h5>

        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm text-blue-700 font-medium   hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          See All Offers
        </button>
      </div>

      <div className="grid grid-cols-2">
        {product()}
        {product()}
        {product()}
        {product()}
      </div>
    </div>
  );
}

export default ProductOfferBox;
