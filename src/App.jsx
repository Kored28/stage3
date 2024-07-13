import { Routes, Route } from "react-router-dom"
import { CheckLayout, HomeLayout } from "./components"
import { Cart, Checkout, Completed, Home } from "./pages"
import PhoneDetails from "./pages/home/PhoneDetails"

function App() {

  return (
    <>

      <Routes>
        <Route element={<HomeLayout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<PhoneDetails/>} />
          <Route path="/cart" element={<Cart/>} />
        </Route>
        <Route element={<CheckLayout/>}>
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/completed" element={<Completed/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
