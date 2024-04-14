import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { selectIsAuthenticated, selectUser } from "../../features/userSlice"
import Container from "../container"
import Counter from "../counter"
import Header from "../header"
import Navbar from "../navbar"
import Profile from "../profile"

const Layout = () => {
  const isAuthentificated = useSelector(selectIsAuthenticated)
  const user = useSelector(selectUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthentificated) {
      navigate("/auth")
    }
  }, [])

  return (
    <>
      <Header />
      <Container>
        <div className=" p-4">
          <Navbar />
          <div className="flex-2 p-4 my-6">
            <div className="flex-col flex gap-5">{!user && <Profile />}</div>
          </div>
        </div>
        <div className="flex w-full pl-[3%]">
          <div className="w-[70%]">
            <Outlet />
          </div>

          <div className="pl-[9%]">
            <Counter />
          </div>
          {/* <div className="flex-2 p-4">
          <div className="flex-col flex gap-5">{!user && <Profile />}</div>
        </div> */}
        </div>
      </Container>
    </>
  )
}

export default Layout
