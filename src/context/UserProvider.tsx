import React, { useState } from 'react'
import UserContext, { UserContextModel, UserModel } from './UserContext'

interface Props {
  children: React.ReactNode
}

const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserModel>()

  const setUserHandler = (user: UserModel) => {
    console.log('user', user)
    setUser(user)
  }

  const contextValue: UserContextModel = {
    user,
    setUser: setUserHandler
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}

export default UserContextProvider
