import { useSelector } from "react-redux"

export default function UserInfo() {
   let data =  useSelector(state => state.user)
  return (
   <div>
    <h1>Hello, Redux</h1>
     <h1>{data.name}, {data.balance}</h1>
   </div>
  )
}

