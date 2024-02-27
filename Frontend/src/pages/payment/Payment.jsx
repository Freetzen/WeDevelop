import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import style from './Payment.module.css'
import { FcApproval } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";

export const Payment = () => {
    const [paymentInfo, setPaymentInfo] = useState()

    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const payment_id = params.get('payment_id')
    const preference_id = params.get('preference_id')
    const obj = {
        payment_id: payment_id,
        preference_id: preference_id
    }
    const yeison = async () => {
        const { _id } = await axios('https://wedevelop-production.up.railway.app/successpayment', { params: obj })
        const search = await axios('https://wedevelop-production.up.railway.app/getpreference', { params: _id })
        setPaymentInfo(search.data)
    }
    useEffect(() => {
        yeison()
    }, [])
    return (
        <div>
            <div className={style.paymentContainer}>
                <div className={style.containerBox}>
                    <div className={style.confirmation}>
                        {paymentInfo?.status === 'approved' ? <FcApproval className={style.iconStatus}/> : <FcHighPriority className={style.iconStatus}/>}
                        <span>approved</span>
                    </div>
                    <div className={style.infoPayment}>
                        <div className={style.containerTitle}>
                            <h2>Payment Status</h2>
                        </div>
                        <div className={style.info}>
                            <p>Payment number:</p>
                            <span> {paymentInfo?.payId}</span>
                            <p>Service Name:</p>
                            <span>{paymentInfo?.title}</span>
                            <p>Payment Type:</p>
                            <span> {paymentInfo?.payment_type_id}</span>
                            <p>Payment Amount:</p>
                            <span> {paymentInfo?.amount} ARG</span>
                            <p>Creation Date:</p>
                            <span> {paymentInfo?.date_approved}</span>
                            <p>Email:</p>
                            <span> {paymentInfo?.email}</span>
                        </div>
                        <div className={style.containerButton}>
                            <Link to='/'>
                                <button>Back to Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}