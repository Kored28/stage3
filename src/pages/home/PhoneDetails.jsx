import { useEffect, useState } from "react";
import { fetchDataId } from "../../api/FetchFromApi";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, changeQuantity } from "../../store/cart";
import { add, heart, minus } from "../../assets";



const PhoneDetails = () => {
    const [iphone, setIphone] = useState(null);
    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const carts = useSelector((state) => state.cart.items)

    const dispatch = useDispatch()

    const { id } = useParams()

    useEffect(() => {
        const fetchIphonesDetails = async() =>{
            try {
                setLoading(true)
                const response = await fetchDataId(id)
                setIphone(response.data)
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        }

        fetchIphonesDetails()
        
    }, [id])
  return (
    <div className="flex px-[24px] sm:pl-[52px] mb-10">
        {
            error ? <h2 className="text-[40px] md:text-[70px]text-black font-bold mb-[50px]">Something went wrong. Please try gain Later</h2>
            :
            loading === true ? 
            <h2 className="text-[#A4179F] text-[70px] md:text-[100px] text-center mb-[50px] "><i className="fa-solid fa-spinner animate-spin"></i></h2> 
            :      iphone && (
            <div className="flex flex-col md:flex-row w-full gap-5">
                <div className="flex flex-col md:flex-row w-full md:w-1/2 gap-3">
                    <div className="flex md:w-[70%] w-full">
                        <img
                            src={`https://api.timbu.cloud/images/${iphone.photos[selectedImg].url}?organization_id=59bc18faa0544ed29897b6a3ed522e95`}
                            alt={iphone.name}
                            className=" h-auto w-full cursor-pointer "
                        />
                    </div>
                    <div className="flex flex-row md:flex-col gap-4 w-full md:w-[30%]">
                        <img
                            src={`https://api.timbu.cloud/images/${iphone.photos[0].url}?organization_id=59bc18faa0544ed29897b6a3ed522e95`}
                            alt={iphone.name}
                            className="sm:w-full sm:h-[159px] w-1/2 h-[150px] cursor-pointer"
                            onClick={() => setSelectedImg(0)}
                        />
                        <img
                            src={`https://api.timbu.cloud/images/${iphone.photos[1].url}?organization_id=59bc18faa0544ed29897b6a3ed522e95`}
                            alt={iphone.name}
                            className="sm:w-full sm:h-[159px] w-1/2 h-[150px] cursor-pointer"
                            onClick={() => setSelectedImg(1)}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-5 w-1/2 pt-2">
                    <h2 className=" text-[#676767] text-[30px] font-bold font-josefin">{iphone.name}</h2>
                    <p className="text-black text-[18px] font-normal font-josefin">
                        {iphone.description.slice(0, 120)}
                    </p>

                    <h2 className="text-black text-[30px] sm:text-[24px] font-josefin">
                        $100
                    </h2>

                    <div className="flex 
                    w-[100px] border-[1.7px] p-[5px] sm:p-[0]
                    item-center justify-center border-black rounded-[10.81px] px-[5px] gap-1"
                    >
                        <img src={minus} alt="minus" className=' w-[25px] h-[25px] p-[2px] cursor-pointer'
                        onClick={() => {
                        dispatch(changeQuantity({
                            productId: iphone.unique_id,
                            quantity:  setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
                        }))
                        }}
                        />
                        <span className='w-[33px] pl-1 border border-black'>{quantity}</span>
                        <img src={add} alt="add" className='w-[25px] h-[25px] p-[2px] cursor-pointer'
                        onClick={() => {
                            dispatch(changeQuantity({
                                productId: iphone.unique_id,
                                quantity:  setQuantity(quantity + 1)
                            }))
                        }}
                        />
                    </div>

                    <div className="flex gap-8 items-center">                           
                        {carts.some(cartItem => cartItem.productId === iphone.unique_id) ? (
                            <button
                            className="sm:text-[17px] text-[20px] font-josefin shadow-md border cursor-not-allowed bg-[#A4179F] text-white px-[23px] py-[10px] rounded-lg"
                            disabled={true}
                            >
                            Added to cart
                            </button>
                            ) : (
                            <button
                            className="sm:text-[17px] text-[20px] font-josefin bg-white shadow-md border border-[#A4179F] px-[23px] py-[10px] rounded-lg hover:bg-[#E0B0DE]"
                            onClick={() => {
                                dispatch(
                                addToCart({
                                    productId: iphone.unique_id,
                                    quantity: quantity,
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
                    
            </div>
        )}  

    </div>
  )
}

export default PhoneDetails