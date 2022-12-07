import UserContext from 'context/UserContext'
import { useContext } from 'react'

const UserCard: React.FC = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="rounded-lg border-slate-300 bg-white p-6 sm:border sm:drop-shadow-md">
      <div className="text-xl">User</div>
      <div>First name: {user?.firstName}</div>
      <div>Last name: {user?.lastName}</div>
      <div>email: {user?.email}</div>
    </div>
  )
}

export default UserCard
