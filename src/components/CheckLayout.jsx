import { Outlet } from 'react-router-dom'
import CheckNavbar from './CheckNavbar'

const CheckLayout = () => {
  return (
    <div>
      <CheckNavbar/>
      <Outlet/>
    </div>
  )
}

export default CheckLayout