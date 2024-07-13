import { cart, logo, user } from '../assets'
import { Link } from 'react-router-dom'

const CheckNavbar = () => {
  return (
    <div className='flex justify-between items-center px-[20px] sm:px-[52px] py-6'>
      <Link to="/"><img src={logo} alt="logo" className='w-45 h-12' /></Link>


      <div className="flex gap-3">
          <Link to="/cart"><img src={cart} alt="cart" className='w-6 h-6' /></Link>
          <Link to="/user"><img src={user} alt="user" className='w-5 h-5' /></Link>
      </div>
    </div>
  )
}

export default CheckNavbar