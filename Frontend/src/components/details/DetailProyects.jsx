import React, { useState, useEffect } from 'react';
import proyectsProvider from '../../utils/provider/proyectsProvider/proyectsProvider';
import style from './Details.module.css';

function DetailProyects() {
    const [proyects, setProyects] = useState([]);

    useEffect(() => {
        async function fetchProyects() {
            try {
                const data = await proyectsProvider.getProyects();
                setProyects(data);
            } catch (error) {
                console.error('Error fetching proyects:', error);
            }
        }
        
        fetchProyects();
    }, []);

    return (
        <div>
            <h1>Proyect Details</h1>
            <ul>
                {proyects.map(proyect => (
                    <li key={proyect.id}>
                        <p>Name: {proyect.name}</p>
                        <p>Images: {proyect.images}</p>
                        <p>Description: {proyect.description}</p>
                        <p>Category: {proyect.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DetailProyects;
