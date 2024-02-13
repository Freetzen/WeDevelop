import { useState } from 'react'
import style from './AdminWindow.module.css'
import { Bar, BarChart, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import AdminItemCard from '../../components/adminUtils/adminItemCard/adminItemCard'
import SearchBarAdmin from '../../components/adminUtils/searchBarAdmin/SearchBarAdmin'
const AdminWindow = () => {
    const [itemsToEdit, setItemsToEdit] = useState([])
    const pieGraph = [
        { name: 'Activo', value: 25, valuePercent: `${25}%` },
        { name: 'Inactivo', value: 75, valuePercent: `${75}%` }
    ]
    const pieGraphColors = ['#59B4C3', '#7F27FF']

    const pieGraphTipo = [
        { name: 'ecommerce', value: 40, valuePercent: `${25}%` },
        { name: 'Web', value: 23, valuePercent: `${75}%` },
        { name: 'Personalizado', value: 15, valuePercent: `${75}%` },
    ]
    const pieGraphTipoColors = ['#DCF2F1', '#7FC7D9', '#365486']

    const barGraph = [
        { name: '5', valoraciones: 70 },
        { name: '4', valoraciones: 20 },
        { name: '3', valoraciones: 5 },
        { name: '2', valoraciones: 3 },
        { name: '1', valoraciones: 2 },
    ]

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
            <SearchBarAdmin setItemsToEdit={setItemsToEdit} itemsToEdit={itemsToEdit} />
            <br />
            <div className={style.adminCards}>
                {
                    !itemsToEdit.length
                        ? <h3>No se han seleccionado items</h3>
                        : itemsToEdit[0].email
                            ? itemsToEdit.map(item => (
                                <AdminItemCard
                                    key={item._id}
                                    id={item._id}
                                    name={item.name}
                                    email={item.email}
                                    suspended={item.suspended}
                                />
                            ))
                            : itemsToEdit.map(item => (
                                <AdminItemCard
                                    key={item._id}
                                    id={item._id}
                                    name={item.name}
                                    images={item.images}
                                    category={item.category}
                                />
                            ))
                }
            </div>
            <br />
        </div>
    )
}
export default AdminWindow