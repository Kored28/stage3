import { logo } from '../assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#C0BCBC] gap-4 lg:gap-16 px-[24px] lg:px-[52px] w-full py-[10px] lg:py-[86px]">
      <div className="flex flex-col gap-0 sm:gap-2">
        <img src={logo} alt="" className='w-45 h-12' />

        <p className="text-black hidden sm:flex font-normal text-lg w-[404px]">
          Sit vel eget commodo iaculis ipsum orci cursus sodales in.
        </p>

        <p className="text-[#3E093C] hidden sm:flex text-[15px] font-normal">
          &copy; copyright
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className='text-[#3E093C] xs:text-[20px] sm:text-3xl font-normal font-josefin'>
          Products
        </h2>

        <div className="flex flex-col text-black xs:text-[13px] sm:text-[20px]">
          <Link to='/gadgets'>Gadgets</Link>
          <Link to='/accessories'>Accessories</Link>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className='text-[#3E093C] xs:text-[20px] sm:text-3xl font-normal font-josefin'>
          Category
        </h2>

        <div className="flex flex-col text-black xs:text-[13px] sm:text-[20px]">
          <Link to='/iphones'>iPhone</Link>
          <Link to='/ipads'>iPad</Link>
          <Link to='/airpods'>Airpods</Link>
          <Link to='/iwatches'>iWatch</Link>
          <Link to='/accessories'>Accessories</Link>
        </div>
      </div>

      <div className="hidden flex-col sm:flex gap-2">
        <h2 className='text-[#3E093C] text-3xl font-normal font-josefin'>
          Contacts
        </h2>

        <div className="flex flex-col text-black text-[20px]">
          <p>6954 Kihn Stream, Dearborn Heights 73949</p>
          <p>Orlando_Raynor14@applehome.com</p>
          <p>+549.468.4760</p>
        </div>
      </div>

      <p className="text-[#3E093C] flex sm:hidden text-[15px] font-normal">
        &copy; copyright
      </p>
    </div>
  )
}

export default Footer