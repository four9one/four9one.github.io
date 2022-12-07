import React from 'react'

export type UserContextModel = {
  user?: UserModel
  setUser: (user: UserModel) => void
}

export type UserModel = {
  firstName: string
  lastName: string
  email: string
}

const UserContext = React.createContext<UserContextModel>(undefined!)
// const UserContext = React.createContext<UserContextModel>({
//   user: { firstName: '', lastName: '', email: '' }:UserModel,
//   setUser: (user: UserModel) => {
//     // do
//   }
// })

export default UserContext
