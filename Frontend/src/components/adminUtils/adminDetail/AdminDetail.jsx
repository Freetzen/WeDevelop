import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./AdminDetail.module.css";
import { useNavigate } from "react-router-dom";
import userProvider from "../../../utils/provider/userProvider/userProvider";

export default function AdminDetail() {
    const { id } = useParams();

    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            try {
                const userData = await userProvider.getUserByEmail(email);
                setUser(userData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, [id]);

    const navigate = useNavigate();

    const backToAdmin = () => {
        navigate('/admin');
    };


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div className={style.detailsContainer}>
            <div className={style.detailproduct}>
                <div className={style.detailsLeft}>
                    <div><h2>{user.name}</h2></div>
                </div>
                <div className={style.detailsRight}>
                    <h5>{user.email}</h5>
                    <div className={style.buttonsContainer}>
                        <button onClick={backToAdmin} className={style.button1}>Back to Projects</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
