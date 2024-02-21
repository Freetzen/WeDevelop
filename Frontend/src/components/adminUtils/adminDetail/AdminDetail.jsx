import React, { useEffect, useState } from "react";
import validator from 'validator'
import style from "./AdminDetail.module.css";
import userProvider from "../../../utils/provider/userProvider/userProvider";
import projectsProvider from "../../../utils/provider/projectsProvider/projectsProvider";
import Swal from 'sweetalert2'

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


    const handleChange = (e) => {
        setChanges({
            ...changes,
            [e.target.name]: e.target.value
        })
    }
    const sendUserChanges = async () => {
        await userProvider.putUser(changes);
        const usersResponse = await userProvider.getUsers()
        setItemsToEdit(usersResponse)
        Swal.fire({
            icon: "success",
            title: "Your user has been updated",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'center',
            }
        });
        setDetailState('')
    }

    const sendprojectChanges = async () => {
        await projectsProvider.putProject(changes);
        const projectsResponse = await projectsProvider.getProjects()
        setItemsToEdit(projectsResponse.docs)
        setDetailState('')
        Swal.fire({
            icon: "success",
            title: "Your project has been updated",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'center',
            }
        });
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


    const [edit, setEdit] = useState(false)

    const handleEdit = () => {
        setEdit(!edit)
    }

    return (
        <div className={style.detailsContainer}>
            {
                isUser
                    ? (
                        <div className={style.containerCard}>
                            <div className={style.labelAndSelect}>
                                <label style={{ paddingLeft: '20px' }}>{changes.name}</label>
                                <label className={style.labelEmail}>{changes.email}</label>
                                <select
                                    name="banned"
                                    onChange={handleChange}
                                    value={changes.banned}>
                                    <option value={false} key="false">UnBanned</option>
                                    <option value={true} key="true">Banned</option>
                                </select>
                                <select
                                    name="role"
                                    onChange={handleChange}
                                    value={changes.role}>
                                    <option value="admin" key="admin">Admin</option>
                                    <option value="user" key="user">User</option>
                                </select>
                            </div>
                            <div className={style.containerButton}>
                                <button onClick={sendUserChanges}>Send</button>
                            </div>
                        </div>
                    )
                    : (
                        <div className={style.containerDetailProject}>
                            <div className={style.containerSelectArchivos}>
                                <img src={changes.images} alt="" />
                                <input className={style.inputArchivos} style={edit ? { display: '' } : { display: 'none' }} type="file" name="image" onChange={handleImage} />
                            </div>
                            <div className={style.InputSelectAndDescription}>
                                <div className={style.containerInput}>
                                    <h2 style={edit ? { display: 'none' } : { display: '' }}>{changes.name}</h2>
                                    <input
                                        style={edit ? { display: '' } : { display: 'none' }}
                                        type="text"
                                        placeholder={changes.name}
                                        name="name"
                                        value={changes.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={style.containerSelecth4}>
                                    <h4 style={edit ? { display: 'none' } : { display: '' }}>{changes.category}</h4>
                                    <select
                                        style={edit ? { display: '' } : { display: 'none' }}
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
                                </div>
                                <div className={style.containerTextAreaAndP}>
                                    <p style={edit ? { display: 'none' } : { display: '' }}>{changes.description}</p>
                                    <textarea
                                        style={edit ? { display: '' } : { display: 'none' }}
                                        name="description"
                                        id="description"
                                        cols="60"
                                        rows="10"
                                        placeholder={changes.description}
                                        value={changes.description}
                                        onChange={handleChange} />
                                </div>
                                <div className={style.containerButtons}>
                                    <button onClick={() => setEdit(false)} style={edit ? { display: '' } : { display: 'none' }}>Cancelar</button>
                                    <button onClick={handleEdit} style={edit ? { display: 'none' } : { display: '' }} >Editar</button>
                                    <button onClick={sendprojectChanges} style={edit ? { display: '' } : { display: 'none' }} >Send</button>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    );
}