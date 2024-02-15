
import { useState } from 'react'
import userProvider from '../../../utils/provider/userProvider/userProvider';


const UserAdmin = () => {

    const [userAdmin, setUserAdmin] = useState({
        name: '',
        email: '',
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
            setUserAdmin({
                name: '',
                email: '',
                password: ''
            })
            return window.alert('User created');
        } catch (error) {
            return error.message
        }

    }
    return (
        <div style={{ marginTop: '200px' }}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user">User: </label>
                <input type="text" name='name' value={userAdmin.name} onChange={handleChange} />
                <label htmlFor="user">Email: </label>
                <input type="text" name='email' value={userAdmin.email} onChange={handleChange} />
                <label htmlFor="password">Password: </label>
                <input type="password" name='password' value={userAdmin.password} onChange={handleChange} />
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default UserAdmin;