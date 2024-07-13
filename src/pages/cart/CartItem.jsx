import { add, bin, minus, save } from '../../assets'
import { useDispatch } from 'react-redux'
import { changeQuantity, removeItem } from '../../store/cart'


const CartItem = ({carts}) => {
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col ">
      {carts?.map(item => (
        <div className='flex flex-col md:flex-row border-t border-t-black py-[30px] justify-between ' key={item.productId}>
          <div className="flex gap-[10px] sm:gap-[60px]">
            <div className="flex bg-[#E5E6E4] items-center px-[27px]  sm:px-[50px] sm:py-[27px]">
              {Object.keys(item.img).length > 0 && (
                <img
                  src={`https://api.timbu.cloud/images/${item.img[0].url}?organization_id=59bc18faa0544ed29897b6a3ed522e95`}
                  alt={item.name}
                  className='w-[108px] h-[130px] sm:w-[150px] sm:h-[179px]'
                />
              )}
            </div>

            <div className="flex flex-col items-center justify-center gap-[16px] md:gap-[43px] 
            pl-[20px] md:pl-0 pt-2 "
            >
              <p className="text-[20px] text-center font-josefin text-[#0A0A0A] ">{item.name}</p>

              <div className="flex flex-col gap-[4px]">
                <div className="flex gap-3">
                  <div className="sm:w-[25px] sm:h-[25px] w-[12px] h-[12px] 
                    rounded-full bg-white border border-black"></div>
                  <div className="sm:w-[25px] sm:h-[25px] w-[12px] h-[12px] 
                    rounded-full bg-[#575D6D]"></div>
                  <div className="sm:w-[25px] sm:h-[25px] w-[12px] h-[12px] 
                    rounded-full bg-[#3E093C]"></div>
                </div>
                <p className="text-[#676767] text-[17px] font-josefin text-center "> Space Grey</p>
              </div>

              <p className='flex md:hidden text-[24px] font-josefin'>
                ${item.price}
              </p>

              <div className=" gap-[42px] hidden md:flex">
                <div className="flex items-center cursor-pointer" onClick={() => dispatch(removeItem(item.productId))}  >
                  <img src={bin} alt="remove" />
                  <p className='text-[15px] text-[#757575] pt-[6px] text-center font-josefin'>Remove item</p>
                </div>
                <div className="flex items-center cursor-pointer">
                  <img src={save} alt="save" />
                  <p className='text-[15px] text-[#757575] text-center py-[2px] font-josefin'>Save for later</p>
                </div>
              </div>

            </div>
          </div>

        <div className="flex flex-col items-center justify-center gap-[91px]">
          <p className='hidden md:flex text-[24px] font-josefin'>
            ${item.price}
          </p>

          <div className="flex ml-[160px] md:ml-[0] border-[1.7px] m-3 md:m-[0] p-[5px] sm:p-[0] border-black rounded-[10.81px] px-[10px] ">
            <img src={minus} alt="minus" className=' w-[25px] h-[25px] p-[2px] cursor-pointer'
            onClick={() => {
              dispatch(changeQuantity({
                productId: item.productId,
                quantity: item.quantity - 1 < 1 ? 1 : item.quantity - 1
              }))
            }}
            />
            <span className='w-[33px] pl-1 border border-black'>{item.quantity}</span>
            <img src={add} alt="add" className='w-[25px] h-[25px] p-[2px] cursor-pointer'
              onClick={() => {
                dispatch(changeQuantity({
                  productId: item.productId,
                  quantity: item.quantity + 1
                }))
              }}
            />
          </div>
        </div>

        <div className="flex md:hidden gap-[42px]">
          <div className="flex items-center cursor-pointer" onClick={() => dispatch(removeItem(item.productId))} >
            <img src={bin} alt="remove" />
            <p className='text-[15px] text-[#757575] pt-[6px] text-center font-josefin'>Remove item</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <img src={save} alt="save" />
            <p className='text-[15px] text-[#757575] text-center py-[2px] font-josefin'>Save for later</p>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default CartItem