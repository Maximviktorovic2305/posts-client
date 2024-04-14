import { User as NextUser } from "@nextui-org/react"
import React from "react"
import Avatar, { genConfig } from "react-nice-avatar"

type Props = {
  name: string
  avatarUrl?: string
  description?: string
  className?: string
}

const User: React.FC<Props> = ({
  name = "",
  avatarUrl = "",
  description = "",
  className = "",
}) => {
  const config = genConfig()

  return (
    <div className="relative">
      <NextUser name={name} className={className} description={description} />
      <Avatar className="absolute top-0" style={{ width: "2.5rem", height: "2.5rem" }} {...config} />
    </div>
  )
}

export default User
