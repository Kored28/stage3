import { Link } from "react-router-dom"
import { tick } from "../../assets"


const Completed = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
        <div className="flex items-center flex-col justify-center gap-[35.32px] sm:gap-[79px]">
            <img src={tick} alt="tick" className=" w-[77.8px] h-[77.8px] sm:h-[174px] sm:w-[174px]" />

            <h2 className="text-[15px] sm:text-[32px] text-[#A4179F] font-semibold font-josefin">
                Thank you for your Order!
            </h2>

            <div className="flex gap-[35.32px] sm:gap-[79px] items-center">
                <Link to="/view" className="sm:text-[30px] text-[15px] text-[#A4179F] font-josefin"
                >
                    View Order
                </Link>

                <Link to="/" className="sm:text-[30px] text-white font-josefin bg-[#A4179F] ease-out duration-300
                rounded-lg p-[10px]"
                >
                    Continue shopping
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Completed