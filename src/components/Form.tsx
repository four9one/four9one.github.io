import UserContext from 'context/UserContext'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { User } from '../types'

const Form: React.FC = () => {
  const { setUser } = useContext(UserContext)
  const { register, handleSubmit } = useForm<User>()

  const onSubmit = (user: User) => {
    setUser(user)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg border-slate-300 bg-white p-6 sm:border sm:drop-shadow-lg"
    >
      <div className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-normal text-slate-500">
            Firstname
          </span>
          <input
            {...register('firstName', { required: true, minLength: 4 })}
            type="text"
            className="peer w-full rounded p-1 text-slate-500 outline outline-1 outline-gray-200 focus:outline-blue-400"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-normal text-slate-500">
            Lastname
          </span>
          <input
            type="text"
            {...register('lastName', { required: true, minLength: 4 })}
            className="peer w-full rounded p-1 text-slate-500 outline outline-1 outline-gray-200 focus:border-none focus:outline-blue-400"
          />
        </label>
      </div>
      <label className="mt-3 block">
        <span className="mb-1 block text-sm font-normal text-slate-500">
          Email
        </span>
        <input
          type="email"
          {...register('email', { required: true, minLength: 4 })}
          className="peer w-full rounded p-1 text-slate-500 outline outline-1 outline-gray-200 focus:border-none focus:outline-blue-400"
        />
        <p className="invisible my-2 text-sm text-pink-600 peer-invalid:visible">
          Please provide a valid email address.
        </p>
      </label>
      <button
        type="submit"
        className="rounded-md bg-blue-500 px-3 py-1 font-medium text-white"
      >
        Submit
      </button>
    </form>
  )
}

export default Form
