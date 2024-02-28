import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import style from './Payment.module.css'
import { FcApproval } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import { useTranslation } from "react-i18next";

export const Payment = () => {
    const [t, i18n] = useTranslation("global");
    const [paymentInfo, setPaymentInfo] = useState()

    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const payment_id = params.get('payment_id')
    const preference_id = params.get('preference_id')
    const obj = {
        payment_id: payment_id,
        preference_id: preference_id
    }
    const searchPay = async () => {
        const { data } = await axios('https://wedevelop-production.up.railway.app/successpayment', { params: obj })
        const value = { id: data._id }
        const search = await axios('https://wedevelop-production.up.railway.app/getpreference', { params: value })
        setPaymentInfo(search.data)
    }
    useEffect(() => {
        searchPay()
    }, [])


    return (
        <div>
            <div className={style.paymentContainer}>
                <div className={style.containerBox}>
                    <div className={style.confirmation}>
                        {paymentInfo?.status === 'approved' ? <FcApproval className={style.iconStatus} /> : <FcHighPriority className={style.iconStatus} />}
                        <span>{paymentInfo?.status}</span>
                    </div>
                    <div className={style.infoPayment}>
                        <div className={style.containerTitle}>
                            <h2>{t("PayStatus.title")}</h2>
                        </div>
                        <div className={style.info}>
                            <p>{t("PayStatus.number")}</p>
                            <span> {paymentInfo?.payId}</span>
                            <p>{t("PayStatus.service")}</p>
                            <span>{paymentInfo?.title}</span>
                            <p>{t("PayStatus.type")}</p>
                            <span> {paymentInfo?.payment_type_id}</span>
                            <p>{t("PayStatus.amount")}</p>
                            <span> {paymentInfo?.amount} ARG</span>
                            <p>{t("PayStatus.creation")}</p>
                            <span> {paymentInfo?.date_approved}</span>
                            <p>{t("PayStatus.email")}</p>
                            <span> {paymentInfo?.email}</span>
                        </div>
                        <div className={style.containerButton}>
                            <Link to='/'>
                                <button>{t("PayStatus.backHome")}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}