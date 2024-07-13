import { paypal, transfer, visa } from '../../assets'
import Inputs from './Inputs'
import CheckoutItems from './CheckoutItems'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Checkout = () => {
    const carts = useSelector((state) => state.cart.items)
    const [payment, setPayment] = useState(null)
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [input3, setInput3] = useState("")
    const [input4, setInput4] = useState("")
    const [input5, setInput5] = useState("")
    const [input6, setInput6] = useState("")
    const [input7, setInput7] = useState("")
    const [input8, setInput8] = useState("")
    const [select1, setSelect1] = useState("Select")
    const [select2, setSelect2] = useState("Select")

    const totalPrice = () => {
        let total = 0
        carts.map((item) => (total += item.quantity * item.price))
        return total
    }

    const handleSubmit = () => {
        if(payment && input1 && input2 && input3 && input4 && input5 && input6 && input7 && input8 && select1 && select2  ){
            window.location.replace('/completed')
        }else{
            window.alert('Please fill in the form')
        }
    }

    const shipmentCost = 22.5
    const discount = 0
    const grandtotal = totalPrice() + shipmentCost - discount
  return (
    <div className="flex flex-col gap-2 px-[20px] sm:px-[52px] ">
        <h2 className='text-black text-[32px] font-poppins font-semibold mb-4'>
            Checkout
        </h2>

        <p className='text-black text-[24px] font-poppins font-semibold mb-4'>
            Select payment methods
        </p>

        <div className="flex flex-col sm:flex-row w-full gap-[20px] mb-[70px]">
            <div className="flex flex-col w-full sm:w-1/2 gap-6">
                <div className="flex gap-[10px] sm:gap-[31px]">
                    <div className={`flex flex-col items-center justify-center 
                    ${payment === 'card' ? 'bg-[#676767]' : 'bg-white'} w-[110px] h-[126px]
                    shadow-md border py-[21px] px-[16.8px] cursor-pointer`}
                    onClick={() => setPayment('card')}
                    >
                        <p className="text-black text-sm font-normal">Credit Card</p>
                        <img src={visa} alt="visa" className=' sm:w-[63px] sm:h-[23.8px]' />
                    </div>

                    <div className={`flex flex-col justify-center w-[110px] h-[126px]
                    ${payment === 'paypal' ? 'bg-[#676767]' : 'bg-white'}
                    shadow-md border py-[21px] px-[16.8px] cursor-pointer`}
                    onClick={() => setPayment('paypal')}
                    >
                        <p className="text-black text-sm font-normal text-center">Paypal</p>
                        <img src={paypal} alt="paypal" className=' sm:w-[63px] sm:h-[23.8px]'  />
                    </div>

                    <div className={`flex flex-col items-center justify-center  
                    ${payment === 'transfer' ? 'bg-[#676767]' : 'bg-white'} w-[120px] h-[126px]
                    shadow-md border py-[21px] px-[16.8px] cursor-pointer`}
                    onClick={() => setPayment('transfer')}
                    >
                        <p className="text-black text-sm font-normal">Data Transfer</p>
                        <img src={transfer} alt="data transfer" className='w-[21px] h-[21px]'  />
                    </div>
                </div>

                <Inputs
                input1 = {input1}
                input2 = {input2}
                input3 = {input3}
                input4 = {input4}
                input5 = {input5}
                input6 = {input6}
                input7 = {input7}
                input8 = {input8}
                select1 = {select1}
                select2 = {select2}
                setInput1 = {setInput1}
                setInput2 = {setInput2}
                setInput3 = {setInput3}
                setInput4 = {setInput4}
                setInput5 = {setInput5}
                setInput6 = {setInput6}
                setInput7 = {setInput7}
                setInput8 = {setInput8}
                setSelect1 = {setSelect1}
                setSelect2 = {setSelect2}
                />
            </div>
            <div className="flex flex-col w-full sm:w-1/2 border border-[#DFDFDF] gap-[4px] bg-white p-[20px] sm:px-[57px] py-[35px] shadow-md">
                <p className="text-[20px] mb-4 font-josefin font-normal">Summary</p>
                <div className="flex flex-col gap-[30px] mb-4">
                    <CheckoutItems carts={carts} />               
                    
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <p className='text-[20px] text-black opacity-[0.5] font-josefins'>Subtotal</p>
                        <p className='text-[20px] text-black font-josefins'>${totalPrice()}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-[20px] text-black opacity-[0.5] font-josefins'>Discount</p>
                        <p className='text-[20px] text-black font-josefins'>${discount}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-[20px] text-black opacity-[0.5] font-josefins'>Shipment cost</p>
                        <p className='text-[20px] text-black font-josefins'>${shipmentCost}0</p>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-[20px] text-black  font-josefins'>Grand total</p>
                        <p className='text-[20px] text-black font-josefins'>${grandtotal}0</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center w-full">
            <button className='bg-black text-white font-josefin text-[24px] align-center px-[8px]
            py-[2px] w-[322px] h-[40px] rounded-md text-center mb-[80px]'  
            onClick={handleSubmit}             
            >
                Proceed to Pay
                
            </button>
            
        </div>
    </div>
  )
}

export default Checkout