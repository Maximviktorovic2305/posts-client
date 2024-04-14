import { Card, CardBody } from "@nextui-org/react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import User from "../../components/user"
import { selectCurrent } from "../../features/userSlice"

const Following = () => {
  const currentUser = useSelector(selectCurrent)

  if (!currentUser) {
    return null
  }

  return currentUser.following.length > 0 ? (
    <div className="gap-5 flex flex-col max-w-[34rem]">
      {currentUser.following.map(user => (
        <Link to={`/users/${user.following.id}`} key={user.following.id}>
          <Card>
            <CardBody className="block">
              <User
                name={user.following.name ?? ""}
                avatarUrl={user.following.avatarUrl ?? ""}
                description={user.following.email ?? ""}
              />
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  ) : (
    <h2>У Вас нет подписчиков</h2>
  )
}

export default Following
