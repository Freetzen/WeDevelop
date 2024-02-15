import { useAuth0 } from "@auth0/auth0-react"
import style from "./UserAccount.module.css"
import { useEffect, useState } from "react";
import userProvider from "../../utils/provider/userProvider/userProvider";

export const UserAccount = () => {
  // const [changes, setChanges] = useState({});
    const { user, logout } = useAuth0()
    console.log(user)
    let fecha = user.updated_at.split("")
    let res = fecha.slice(0,10)

//     useEffect(()=>{
//       const fetchData = async () => {
//       try {
//         const user = await userProvider.getUserByEmail(user.email);
//         setChanges(user);
//       } catch (error) {
//         console.log(error.message)
//       }
//     }
//     fetchData();
//     },[])
//     const handleChange = (e) => {
//       setChanges({
//           ...changes,
//           [e.target.name]: e.target.value
//       })
//   }

//   const sendUserChanges = async () => {
//     try {
//       await userProvider.putUser(changes);
//       const usersResponse = await userProvider.getUsers()
//     } catch (error) {
//       console.log(error.message)
//     }
// }
//   console.log(changes.name)
  return (<>
        <img src={user?.picture}></img>
        <label>{user?.name}</label>
        <input type="text" name="name" value={changes.name} onChange={handleChange}/>
        <button onClick={sendUserChanges}>save changes</button>
        <h2>{user?.email}</h2>
        <h2>Plan/membresia:</h2>
        <h2>fecha de creacion de la cuenta: {res}</h2>
        <button onClick={() => logout()}>LogOut: {user.name}</button>
    
    </>
  )
}
