import axios from 'axios'
import { createContext, useEffect, useState } from 'react'


export const ShopContext = createContext(null)

const getDefaultCart = (items) => {
  let cart = {}
  for(let i = 1; i < items.length + 1; i++){
    cart[i] = 0
  }
  return cart
}

const iphones_Url = "https://api.timbu.cloud/products?organization_id=59bc18faa0544ed29897b6a3ed522e95&Appid=WKSL7B10OGTLAOL&Apikey=42581df2823c4741a5dc9ca8283529fa20240712123035745664" 


const ShopContextProvider = (props) => {
  const iphones = {}
  const [cartItems, setCartItems] = useState(getDefaultCart(iphones))

  

  useEffect(() => {
    const fetchData = async() =>{
      try {
        const response = await axios.get(iphones_Url)
        setCartItems(response.data.items)
      } catch (error) {
        console.log('Error', error)
      }
    }

    fetchData()
      
  }, [])
  
  const getTotalAmount = () => {
    let totalAmount = 0
    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = cartItems.find((iphone) => iphone.unique_id === Number(item))
        totalAmount += cartItems[item] * itemInfo.price
      }
    }

    return totalAmount
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const minusFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - prev[itemId]}))
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}))
  }

  const contextValue = { cartItems, addToCart, removeFromCart, minusFromCart, updateCartItemCount, getTotalAmount}

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}

export default ShopContextProvider