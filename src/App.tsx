import Form from 'components/Form'
import UserContextProvider from 'context/UserProvider'
import UserCard from 'components/UserCard'

function App() {
  return (
    // <div className="m-0 mx-auto max-w-max rounded-xl bg-green-600 ">
    //   <div className="flex flex-col justify-center bg-red-200">
    <div className="mx-auto max-w-2xl overflow-hidden p-2">
      <div className="mt-4 flex flex-col gap-6">
        <UserContextProvider>
          <UserCard />
          <Form />
        </UserContextProvider>
      </div>
    </div>
  )
}

export default App
