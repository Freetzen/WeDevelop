import { useAuth0 } from "@auth0/auth0-react"
import style from "./UserAccount.module.css"

export const UserAccount = () => {
    const { user, logout } = useAuth0()
    console.log(user)
    // // let arr = Object.keys(user)
    let fecha = user.updated_at.split("")
    let res = fecha.slice(0,10)
  return (<>
        <img src={user.picture}></img>
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <h2>Plan/membresia:</h2>
        <h2>fecha de creacion de la cuenta: {res}</h2>
        <button onClick={() => logout()}>LogOut: {user.name}</button>
    
    </>
  )
}
