import { useState } from 'react'
import style from './AdminWindow.module.css'
import { Bar, BarChart, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, CartesianGrid } from 'recharts'
import SearchBarAdmin from '../../components/adminUtils/searchBarAdmin/SearchBarAdmin'
import AdminItemCard from '../../components/adminUtils/adminItemCard/AdminItemCard'


const AdminWindow = () => {
    const [itemsToEdit, setItemsToEdit] = useState([])
    const pieGraph = [
        { name: 'Activo', value: 25, valuePercent: `${25}%` },
        { name: 'Inactivo', value: 75, valuePercent: `${75}%` }
    ]
    const pieGraphColors = ['#0FBCBB', '#1186EC']

    const pieGraphTipo = [
        { name: 'ecommerce', value: 40, valuePercent: `${25}%` },
        { name: 'Web', value: 23, valuePercent: `${75}%` },
        { name: 'Personalizado', value: 15, valuePercent: `${75}%` },
    ]
    const pieGraphTipoColors = ['#0FBCBB', '#E56741', '#7334EF']

    const barGraph = [
        { name: '5', valoraciones: 70 },
        { name: '4', valoraciones: 20 },
        { name: '3', valoraciones: 5 },
        { name: '2', valoraciones: 3 },
        { name: '1', valoraciones: 2 },
    ]

    return (
        <div className={style.adminWindow}>
            <SearchBarAdmin setItemsToEdit={setItemsToEdit} itemsToEdit={itemsToEdit} />
            <div className={style.containerPanel}>
                <div className={style.graphscontainer}>
                    <div className={style.box}>
                        <div className={style.title} style={{ backgroundColor: '#2F61E4' }}>
                            <h3>Status de usuarios</h3>
                        </div>
                        <ResponsiveContainer width='100%' height={320} className={style.graph}>
                            <PieChart>
                                <Pie
                                    dataKey='value'
                                    data={pieGraph}
                                    innerRadius={50}
                                    outerRadius={100}
                                    fill='#82ca9d'
                                    labelLine={false}
                                    label={pieGraphTipo}
                                >
                                    {pieGraph.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={pieGraphColors[index % pieGraphColors.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>

                    </div>
                    <div className={style.box}>
                        <div className={style.title} style={{ backgroundColor: '#2F61E4' }}>
                            <h3>Tipo de página</h3>
                        </div>
                        <ResponsiveContainer width='100%' height={320} className={style.graph}>
                            <PieChart >
                                <Pie

                                    dataKey='value'
                                    data={pieGraphTipo}
                                    innerRadius={50}
                                    outerRadius={100}
                                    fill='#82ca9d'
                                    labelLine={false}
                                    label={pieGraphTipo}

                                >
                                    {pieGraphTipo.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={pieGraphTipoColors[index % pieGraphTipoColors.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className={style.box}>
                        <div className={style.title} style={{ backgroundColor: '#2F61E4' }}>
                            <h3>Valoraciones por cantidad de estrellas</h3>
                        </div>
                        <ResponsiveContainer width='100%' height={320} className={style.graph}>
                            <BarChart
                                data={barGraph}
                                height={200}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    left: 20,
                                    bottom: 20,
                                }}
                            >
                                <XAxis dataKey='name' />
                                <Tooltip />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <Bar dataKey='valoraciones' fill='#1186EC' barSize={50} />
                                <Legend />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className={style.titleAdminUser}>
                    <h2>Administración de usuarios y proyectos</h2>
                </div>
                <div className={style.adminusers}>
                    {!itemsToEdit.length ? '' : itemsToEdit[0].email ? 
                    <div className={style.containerInfo}>
                        <p>User</p>
                        <p>Email</p>
                        <p>Status</p>
                    </div> : ''}
                    
                    <div className={style.adminCards}>
                        {
                            !itemsToEdit.length
                                ? <div className={style.titleContaine}><h3>No se han seleccionado items</h3></div>
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
                </div>
            </div>
        </div>
    )
}
export default AdminWindow