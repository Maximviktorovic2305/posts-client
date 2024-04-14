import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react"
import { useContext } from "react"
import { CiLogout } from "react-icons/ci"
import { FaRegMoon } from "react-icons/fa"
import { LuSunMedium } from "react-icons/lu"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout, selectIsAuthenticated } from "../../features/userSlice"
import Dropdown from "../drop-down"
import { ThemeContext } from "../theme-providers"

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const isAuthentificated = useSelector(selectIsAuthenticated)
  const dispath = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispath(logout())
    localStorage.removeItem("token")
    navigate("/auth")
  }

  return (
    <Navbar className="shadow-md shadow-slate-950">
      <NavbarBrand>
        <p className="font-bold text-inherit text-xl blink">Социальная сеть</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <div className="mr-[20%]">
          <Dropdown />
        </div>
        <NavbarItem
          onClick={() => toggleTheme()}
          className="lg:flex text-3xl cursor-pointer"
        >
          {theme === "light" ? (
            <FaRegMoon size={22} />
          ) : (
            <LuSunMedium size={28} />
          )}
        </NavbarItem>
        <NavbarItem>
          {isAuthentificated && (
            <Button
              color="default"
              variant="flat"
              className="gap-3"
              onClick={handleLogout}
            >
              <CiLogout /> <span>Выйти</span>
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header
