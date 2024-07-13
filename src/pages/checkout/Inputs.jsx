

const Inputs = ({
    input1, input2, input3, input4, input5, input6, input7, input8, select1, select2,
    setInput1, setInput2,setInput3, setInput4, setInput5, setInput6,
    setInput7, setInput8, setSelect1, setSelect2
}) => {
    

  return (
    <div className="flex flex-col gap-6">
        <input type="text" 
         className="w-full h-[51.81px] border-[2px] outline-none bg-[#EBEFF3]
         p-[10px] rounded-lg"
         value={input1}
         onChange={(e) => setInput1(e.target.value)}
         placeholder="Card Number"
        />
        <input type="text" 
         className="w-full h-[51.81px] border-[2px] outline-none bg-[#EBEFF3]
         p-[10px] rounded-lg"
         value={input2}
         onChange={(e) => setInput2(e.target.value)}
         placeholder="Name on card"
        />

        <div className="flex justify-between gap-5 sm:gap-0 w-full">
            <input type="text" 
            className="w-1/2 sm:w-[448.42px] h-[51.81px] border-[2px] outline-none bg-[#EBEFF3]
            p-[10px] rounded-lg mr-[0] sm:mr-[40px]"
            value={input3}
            onChange={(e) => setInput3(e.target.value)}
            placeholder="Expiration date(MM/YY)"
            />
            <input type="text" 
            className=" w-1/2 sm:w-[300.95px] h-[51.81px] border-[2px] outline-none bg-[#EBEFF3]
            p-[10px] rounded-lg"
            value={input4}
            onChange={(e) => setInput4(e.target.value)}
            placeholder="CVV"
            />
        </div>

        <div className="flex flex-col">
            <p className="font-poppins text-[15px] mb-3">Billing address</p>

            <div className="flex items-center gap-3">
                <input type="checkbox" id="check" className="hidden peer"/>
                <label htmlFor="check" className="w-[20px] h-[20px] border border-black rounded-full cursor-pointer 
                flex items-center justify-center peer-checked:bg-[#A4179F] ">
                </label>
                <p className="text-black text-[15px] sm:text-[20px]">Same as my shipping address</p>
            </div>
        </div>

        <div className="flex flex-col gap-8">
            <div className="flex-col">
                <label htmlFor="Phone Number" className="text-[15px] font-poppins">Phone Number*</label>
                <input type="text" 
                className="w-full h-[51.81px] border-[2px] outline-none bg-[#EBEFF3]
                p-[10px] rounded-lg"
                value={input5}
                onChange={(e) => setInput5(e.target.value)}
                placeholder="Enter your phone number e.g 123456789"
                id="Phone Number"
                />
            </div>

            <div className="flex-col">
                <label htmlFor="Street name and house number" className="text-[15px] font-poppins">Street name and house number*</label>
                <input type="text" 
                className="w-full h-[51.81px] border-[2px] outline-none bg-[#EBEFF3]
                p-[10px] rounded-lg"
                value={input6}
                onChange={(e) => setInput6(e.target.value)}
                placeholder="Enter your street name and house number"
                id="Street name and house number"
                />
            </div>

            <select name="region" id="region"
            defaultValue="Select"
            value={select1}
            onChange={(e) => setSelect1(e.target.value)}
            className="w-full h-[51.81px] outline-none border rounded-lg p-[10px]"
            >
                <option disabled value="Select">Select Region</option>
                <option value="Rivers"> Rivers State</option>
            </select>

            <select name="country" id="country"
            value={select2}
            onChange={(e) => setSelect2(e.target.value)}
            className="w-full h-[51.81px] outline-none border rounded-lg p-[10px]"
            >
                <option  disabled value="Select">Select Country</option>
                <option value="Nig">Nigeria</option>
                <option value="Us">USA</option>
                <option value="Can">Canada</option>
            </select>

            <div className="flex flex-col">
                <label htmlFor="Postal code" className="text-[15px] font-poppins">Postal code*</label>
                <input type="text" 
                className=" w-full sm:w-[417px] h-[43px] border-[2px] outline-none bg-[#EBEFF3]
                p-[10px] rounded-lg"
                value={input7}
                onChange={(e) => setInput7(e.target.value)}
                placeholder="Enter Postal code"
                id="Postal code"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="City" className="text-[15px] font-poppins">City*</label>
                <input type="text" 
                className="w-[260px] h-[43px] border-[2px] outline-none bg-[#EBEFF3]
                p-[10px] rounded-lg"
                value={input8}
                onChange={(e) => setInput8(e.target.value)}
                placeholder="City"
                id="City"
                />
            </div>

        </div>
    </div>
  )
}

export default Inputs