import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { MdAlternateEmail } from "react-icons/md"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
// import { BASE_URL } from "../../constants"
import { selectCurrent } from "../../features/userSlice"
import Avatar, { genConfig } from "react-nice-avatar"

const Profile = () => {
  const current = useSelector(selectCurrent)

  if (!current) {
    return null
  }

  const config = genConfig()

  const { name, email, avatarUrl, id } = current

  return (
    <Card className="py-4 max-w-[300px] shadow-md shadow-gray-500">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <Avatar style={{ width: "8rem", height: "9rem" }} {...config} />
        {/* <Image
          alt="Card profile"
          className="object-cover rounded-xl"
          src="https://api.multiavatar.com/"
        //   src={`${BASE_URL}${avatarUrl}`}
          width={200}
        /> */}
      </CardHeader>
      <CardBody>
        <Link to={`/users/${id}`}>
          <h4 className="font-bold text-large mb-2">{name}</h4>
        </Link>
        <p className="text-default-500 text-sm flex items-center gap-2">
          <MdAlternateEmail />
          {email}
        </p>
      </CardBody>
    </Card>
  )
}

export default Profile
