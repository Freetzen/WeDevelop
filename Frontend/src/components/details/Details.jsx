import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import style from './Details.module.css';

const Details = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/products/${id}`);
                setProductDetail(response.data);
            } catch (error) {
                window.alert(error.message);
            }
        };

        fetchProduct();

        return () => {
            // Cleanup function
            setProductDetail(null); // Reset state on unmount
        };
    }, [id]);

    const handleBack = () => {
        navigate('/products');
    };

    return (
        <div className={style.container}>
            <button onClick={handleBack}>Back</button>
            {productDetail && (
                <>
                    <img src={productDetail.image} alt={productDetail.name} />
                    <h1>{productDetail.name}</h1>
                    <p>{productDetail.description}</p>
                </>
            )}
        </div>
    );
};

export default Details;
