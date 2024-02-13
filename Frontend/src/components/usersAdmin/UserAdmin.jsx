
import userProvider from '../../utils/provider/userProvider/userProvider'
import { useState } from 'react'


const UserAdmin = () => {
    const [userAdmin, setUserAdmin] = useState({
        name: '',
        email:'',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserAdmin({
            ...userAdmin,
            [name]: value
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newUser = await userProvider.postUserAdmin(userAdmin)
            console.log('User Create');
        } catch (error) {
            return error.message
        }

    }


  return (
      <form onSubmit={handleSubmit}>
          <label htmlFor="user">User: </label>
          <input type="text" name='user' value={userAdmin.name} onChange={handleChange}/>
          <label htmlFor="user">Email: </label>
          <input type="text" name='Email' value={userAdmin.email} onChange={handleChange}/>
          <label htmlFor="password">Password: </label>
          <input type="text" name='password' value={userAdmin.password} onChange={handleChange}/>
          <button>Create</button>
    </form>
  )
}

export default UserAdmin;