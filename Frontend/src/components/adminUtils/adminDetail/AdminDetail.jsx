import React, { useEffect, useState } from "react";
import validator from 'validator'
import style from "./AdminDetail.module.css";
import userProvider from "../../../utils/provider/userProvider/userProvider";
import projectsProvider from "../../../utils/provider/projectsProvider/projectsProvider";

export default function AdminDetail({ detailState, setDetailState, setItemsToEdit }) {
    const [changes, setChanges] = useState({});
    const [isUser, setIsUser] = useState(true)

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            if (validator.isEmail(detailState)) {
                const user = await userProvider.getUserByEmail(detailState);
                if (isMounted) {
                    setChanges(user);
                    setIsUser(true)
                }
            } else {
                const project = await projectsProvider.getProjectById(detailState);
                if (isMounted) {
                    setChanges(project);
                    setIsUser(false)
                }
            }
        };
        fetchData();
        return () => {
            isMounted = false;
        };
    }, [])

    //console.log('datos sol', changes);

    const handleChange = (e) => {
        //console.log('este es name', e.target.name);
        // console.log('este es value', e.target.value);
        setChanges({
            ...changes,
            [e.target.name]: e.target.value
        })
    }
    const sendUserChanges = async () => {
        await userProvider.putUser(changes);
        const usersResponse = await userProvider.getUsers()
        setItemsToEdit(usersResponse)
        setDetailState('')
    }
    const sendprojectChanges = async () => {
        await projectsProvider.putProject(changes);
        const projectsResponse = await projectsProvider.getProjects()
        setItemsToEdit(projectsResponse.docs)
        setDetailState('')
    }

    const handleImage = async (e) => {
        const imgFile = e.target.files[0];
        try {
            const { data } = await projectsProvider.uploadImg(imgFile);
            setChanges({
                ...changes,
                images: data.url,
            });
        } catch (error) { }
    };


    return (
        <div className={style.detailsContainer}>
            {
                isUser
                    ? (
                        <div>
                            <label>Name : {changes.name}</label>
                            <br />
                            <label>Role : </label>
                            <select
                                name="role"
                                onChange={handleChange}
                                value={changes.role}>
                                <option value="admin" key="admin">Admin</option>
                                <option value="user" key="user">User</option>
                            </select>
                            <br />
                            <label>Status : </label>
                            <select
                                name="suspended"
                                onChange={handleChange}
                                value={changes.suspended}>
                                <option value={false} key="false">Active</option>
                                <option value={true} key="true">Disabled</option>
                            </select>
                            <br />
                            <button onClick={sendUserChanges}>Send</button>
                        </div>
                    )
                    : (
                        <div>
                            <label>Name : </label>
                            <input
                                type="text"
                                placeholder={changes.name}
                                name="name"
                                value={changes.name}
                                onChange={handleChange}
                            />
                            <img src={changes.images} alt="" />
                            <br />

                            <div className={style.containerSelectArchivos}>
                                <label>Import New Image: </label>
                                <input className={style.inputArchivos} type="file" name="image" onChange={handleImage} />
                            </div>
                            <br />

                            <label>Category: </label>
                            <select
                                name="category"
                                onChange={handleChange}
                                value={changes.category}>
                                <option value='Tourism' key="Tourism">Tourism</option>
                                <option value='E-commerce' key="E-commerce">E-commerce</option>
                                <option value='Social Network' key="Social Network">Social Network</option>
                                <option value='Health' key="Health">Health</option>
                                <option value='Landing Page' key="Landing Page">Landing Page</option>
                                <option value='Portfolio' key="Portfolio">Portfolio</option>
                                <option value='Entertainment' key="Entertainment">Entertainment</option>
                            </select>
                            <br />
                            <label>Description : </label>
                            <textarea
                                name="description"
                                id="description"
                                cols="60"
                                rows="10"
                                placeholder={changes.description}
                                value={changes.description}
                                onChange={handleChange} />
                            <br />
                            <button onClick={sendprojectChanges}>Send</button>
                        </div>
                    )
            }
        </div>
    );
}