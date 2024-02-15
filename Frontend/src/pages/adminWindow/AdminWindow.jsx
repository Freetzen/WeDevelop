import { useEffect, useState } from 'react'
import style from './AdminWindow.module.css'
import { Bar, BarChart, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import AdminItemCard from '../../components/adminUtils/adminItemCard/adminItemCard'
import SearchBarAdmin from '../../components/adminUtils/searchBarAdmin/SearchBarAdmin'
import AdminDetail from '../../components/adminUtils/adminDetail/AdminDetail'
import userProvider from '../../utils/provider/userProvider/userProvider'
import projectsProvider from '../../utils/provider/projectsProvider/projectsProvider'
const AdminWindow = () => {
    const [itemsToEdit, setItemsToEdit] = useState([])
    const [detailState, setDetailState] = useState('')

    const [pieGraph, setPieGraph] = useState([
        { name: 'Asset', value: 0, valuePercent: `${25}%` },
        { name: 'Idle', value: 0, valuePercent: `${75}%` }
    ])
    const pieGraphColors = ['#59B4C3', '#7F27FF']

    const [pieGraphTipo, setpieGraphTipo] = useState([
        { name: 'E-commerce', value: 40, valuePercent: `${25}%` },
        { name: 'Entertainment', value: 23, valuePercent: `${75}%` },
        { name: 'Health', value: 15, valuePercent: `${75}%` },
        { name: 'Landing Page', value: 15, valuePercent: `${75}%` },
        { name: 'Portfolio', value: 15, valuePercent: `${75}%` },
        { name: 'Social Network', value: 15, valuePercent: `${75}%` },
        { name: 'Tourism', value: 15, valuePercent: `${75}%` },
    ])

    const pieGraphTipoColors = ['#DCF2F1', '#7FC7D9', '#365486']

    const barGraph = [
        { name: '5', valoraciones: 70 },
        { name: '4', valoraciones: 20 },
        { name: '3', valoraciones: 5 },
        { name: '2', valoraciones: 3 },
        { name: '1', valoraciones: 2 },
    ]
    useEffect(() => {
        bringData()
    }, [])

    const bringData = async () => {
        const users = await userProvider.getUsers()
        const docs = await projectsProvider.getProjectsAll()

        const counterProjects = docs.reduce((counter, item) => {
            const categoryModif = item.category.replace(/-/g, ' ').replace(/\s+/g, '_');
            counter[categoryModif] = (counter[categoryModif] || 0) + 1;
            return counter;
        }, {});

        const counterUsers = users.reduce((counter, item) => {
            counter[item.suspended] = (counter[item.suspended] || 0) + 1;
            return counter;
        }, { true: 0, false: 0 });

        setPieGraph([
            { name: 'Asset', value: counterUsers.false, valuePercent: `${25}%` },
            { name: 'Idle', value: counterUsers.true, valuePercent: `${75}%` }
        ])
        setpieGraphTipo([
            { name: 'E-commerce', value: counterProjects.E_commerce, valuePercent: `${25}%` },
            { name: 'Entertainment', value: counterProjects.Entertainment, valuePercent: `${75}%` },
            { name: 'Health', value: counterProjects.Health, valuePercent: `${75}%` },
            { name: 'Landing Page', value: counterProjects.Landing_Page, valuePercent: `${75}%` },
            { name: 'Portfolio', value: counterProjects.Portfolio, valuePercent: `${75}%` },
            { name: 'Social Network', value: counterProjects.Social_Network, valuePercent: `${75}%` },
            { name: 'Tourism', value: counterProjects.Tourism, valuePercent: `${75}%` },
        ])
    }

    return (
        <div className={style.adminWindow}>
            <h2>Dashboard</h2>
            <br />
            <div className={style.graphscontainer}>

                <ResponsiveContainer width='28%' height={300}>
                    <h3>Status de usuarios</h3>
                    <PieChart>
                        <Pie
                            dataKey='value'
                            data={pieGraph}
                            innerRadius={40}
                            outerRadius={70}
                            fill='#82ca9d'
                        >
                            {pieGraph.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={pieGraphColors[index % pieGraphColors.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>

                <ResponsiveContainer width='28%' height={300}>
                    <h3>Tipo de página</h3>
                    <PieChart>
                        <Pie
                            dataKey='value'
                            data={pieGraphTipo}
                            innerRadius={40}
                            outerRadius={70}
                            fill='#82ca9d'
                        >
                            {pieGraphTipo.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={pieGraphTipoColors[index % pieGraphTipoColors.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>

                <ResponsiveContainer width='42%' height={300} >
                    <h3>Valoraciones por cantidad de estrellas</h3>
                    <br />
                    <BarChart
                        data={barGraph}
                        width={100}
                        height={80}
                    >
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey='valoraciones' fill='#59B4C3' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <br />
            <hr />
            <div className={style.adminusers}>
                <h2>Administración de usuarios y proyectos</h2>
            </div>
            <SearchBarAdmin
                setItemsToEdit={setItemsToEdit}
                itemsToEdit={itemsToEdit}
                setDetailState={setDetailState}
            />
            <br />
            <div className={style.adminCards}>
                {
                    detailState
                        ? <AdminDetail
                            detailState={detailState}
                            setDetailState={setDetailState}
                            setItemsToEdit={setItemsToEdit}
                            itemsToEdit={itemsToEdit}
                        />
                        : !itemsToEdit.length
                            ? <h3>No se han seleccionado items</h3>
                            : itemsToEdit[0].email
                                ? itemsToEdit.map(item => (
                                    <AdminItemCard
                                        key={item._id}
                                        id={item._id}
                                        name={item.name}
                                        email={item.email}
                                        suspended={item.suspended}
                                        setDetailState={setDetailState}
                                    />
                                ))
                                : itemsToEdit.map(item => (
                                    <AdminItemCard
                                        key={item._id}
                                        id={item._id}
                                        name={item.name}
                                        images={item.images}
                                        category={item.category}
                                        setDetailState={setDetailState}
                                    />
                                ))
                }
            </div>
            <br />
        </div>
    )
}
export default AdminWindow