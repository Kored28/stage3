import { useState } from "react"
import { heart } from "../../assets"
import { useSelector, useDispatch } from "react-redux";
import { addToCart, selectAllcarts } from "../../store/cart";
import { Link } from "react-router-dom";

const Phones = ({iphones}) => {
  const carts = useSelector(selectAllcarts)
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = iphones.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(iphones.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  
  return (
    <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10 pl-[24px] md:pl-[52px] gap-[40px] 
        md:gap-[50px]"
        >
            {currentItems.map((iphone, index) => (
                <div key={index} className="flex flex-col gap-[13px] items-center 
                justify-center bg-[#F5F5F5] w-[180px] h-[250px] shadow-md
                sm:w-[259px] sm:h-[370px] rounded-lg" 
                >
                    {Object.keys(iphone.photos).length > 0 && (
                        <Link to={`/${iphone.id}`}>
                            <img
                                src={`https://api.timbu.cloud/images/${iphone.photos[0].url}?organization_id=59bc18faa0544ed29897b6a3ed522e95`}
                                alt={iphone.name}
                                className="sm:w-[130px] sm:h-[159px] w-[68px] h-[81.6px]"
                            />
                        </Link>
                    ) }
                    <p className="text-[#676767] font-josefin text-[12px] sm:text-[17px]">
                        {iphone.name}
                    </p>

                    <h2 className="text-black text-[16px] sm:text-[24px] font-josefin">
                        $100
                    </h2>

                    <div className="flex gap-3">
                        <div className="sm:w-[25px] sm:h-[25px] w-[12px] h-[12px] 
                        rounded-full bg-white border border-black"></div>
                        <div className="sm:w-[25px] sm:h-[25px] w-[12px] h-[12px] 
                        rounded-full bg-[#575D6D]"></div>
                        <div className="sm:w-[25px] sm:h-[25px] w-[12px] h-[12px] 
                        rounded-full bg-[#3E093C]"></div>
                    </div>

                    <div className="flex gap-8 items-center">                           
                        {carts.some(cartItem => cartItem.productId === iphone.unique_id) ? (
                            <button
                            className="sm:text-[17px] text-[10px] font-josefin shadow-md border cursor-not-allowed bg-[#A4179F] text-white px-[23px] py-[10px] rounded-lg"
                            disabled={true}
                            >
                            Added to cart
                            </button>
                            ) : (
                            <button
                            className="sm:text-[17px] text-[10px] font-josefin bg-white shadow-md border border-[#A4179F] px-[23px] py-[10px] rounded-lg hover:bg-[#E0B0DE]"
                            onClick={() => {
                                dispatch(
                                addToCart({
                                    productId: iphone.unique_id,
                                    quantity: 1,
                                    img: iphone.photos,
                                    name: iphone.name,
                                    price: 100,
                                })
                                );
                            }}
                            >
                            Add to cart
                            </button>
                        )}

                        <img src={heart} alt="heart" className="w-[24px] h-[24px] cursor-pointer" 
                        />
                    </div>
                </div>
            ))}
            
        </div>
        <div className="flex items-center justify-center mb-[40px] mt-4">
            <button
            className="px-4 py-2 mx-1 bg-gray-300 rounded"
            onClick={prevPage}
            disabled={currentPage === 1}
            >
            Previous
            </button>
            <p className="px-1">
                Page {currentPage} of {Math.ceil(iphones.length / itemsPerPage)}
            </p>
            <button
            className="px-4 py-2 mx-1 bg-gray-300 rounded"
            onClick={nextPage}
            disabled={currentPage === Math.ceil(iphones.length / itemsPerPage)}
            >
            Next
            </button>
        </div>
    </>
  )
}

export default Phones