import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,Line } from 'recharts';
import style from './ReviewBar.module.css'

const ReviewBar = () => {

    const data = [
        {
            name: '5',
            uv: 4000,
           
        },
        {
            name: '4',
            uv: 3000,
            
        },
        {
            name: '3',
            uv: 2000,
           
        },
        {
            name: '2',
            uv: 2780,
            
        },
        {
            name: '1',
            uv: 1890,
        },


    ];


    return (
        <ResponsiveContainer width='49%' height={330}>
        <BarChart
            data={data}
            height={200}
            margin={{
                top:25
            }}
        >
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey='uv' fill='#6940FF' barSize={50}/>
        </BarChart>
    </ResponsiveContainer>

    )
}

export default ReviewBar