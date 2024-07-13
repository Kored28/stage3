import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'



const Cart = () => {
    const carts = useSelector((state) => state.cart.items)
    const totalPrice = () => {
        let total = 0
        carts.forEach((item) => (total += item.quantity * item.price))
        return total
    }
    

  return (
    <div className="flex flex-col w-full px-[20px] md:px-[52px] mb-[80px]">
        <h2 className='text-black text-[32px] font-poppins font-semibold'>
            Your Cart
        </h2>

        <div className="flex flex-col ">           
            <CartItem  carts={carts}/> 
        </div>

        <div className="flex flex-col items-center">
            <div className="flex justify-between py-[30px] px-[1px] border-t border-t-black
            border-b border-b-black mb-8 w-full"
            >
                <p className='text-[#0A0A0A] text-[20px] font-josefin'>
                    Subtotal
                </p>
                <p className='text-[24px] font-josefin'>
                    ${totalPrice()}
                </p>
            </div>

            <Link to="/checkout">
                <button className='bg-[#A4179F] text-white font-josefin text-[24px] align-center px-[8px]
                py-[2px] w-[224px] h-[40px] rounded-md'
                >
                    Checkout
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Cart