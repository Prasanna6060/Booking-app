import { Link } from "react-router-dom"
import MobileNav from "./MobileNav"
import MainNav from "./MainNav"

const Header = () => {
  return (
    <div className="flex justify-between py-6 border-b-orange-500 border-b-2">
      <div className="container mx-auto flex items-center justify-between">
        <Link to='/' className="text-orange-500 text-3xl tracking-tight font-bold">MernEats.com</Link>

        <div className="md:hidden">
          < MobileNav />
        </div>
        <div className="hidden md:block">
          < MainNav />
        </div>
      </div>
    </div>
  )
}

export default Header
