

const CheckoutItems = ({carts}) => {
//const { imgUrl, name, price} = iphone
  
  return (
    <div className="flex flex-col gap-[30px]">
        {
            carts?.map((item) => (
                <div key={item.productId} className="flex gap-[26px]">
                    {Object.keys(item.img).length > 0 && (
                    <img
                        src={`https://api.timbu.cloud/images/${item.img[0].url}?organization_id=59bc18faa0544ed29897b6a3ed522e95`}
                        alt={item.name}
                        className="sm:w-[155px] sm:h-[178px] w-[55px] h-[66px] "
                    />
                    )}

                    <div className="flex flex-col w-[543px]">
                        <h2 className='text-[#0A0A0A] text-[20px] font-josefin'>
                            {item.name.slice(0, 10)}...
                        </h2>
                        <p className="text-[#676767] text-[17px] font-josefin "> Space Grey v1</p>
                    </div>

                    <div className="flex">
                        <p className='text-[24px] font-josefin'>
                            ${item.price * item.quantity}
                        </p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CheckoutItems