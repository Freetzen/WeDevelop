import style from './Pricing.module.css';
import { useEffect, useState } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react'
import { useTranslation } from 'react-i18next';
import pricingProvider from "../../utils/provider/pricingProvider/pricingProvider";
import planProvider from '../../utils/provider/planProvider/planProvider';
import Web from './web/Web';
import ECommerce from './ecommerce/ECommerce';

const Pricing = ({ quote, plan }) => {

    initMercadoPago('TEST-a17e8b8f-91a1-4351-bc9c-cdb9d1033859', { locale: "es-AR" });

    const [t, i18n] = useTranslation("global");
    const [preferenceId, setPreferenceId] = useState('')
  

    const infoUser = JSON.parse(localStorage.getItem('info'))

    const [project, setProject] = useState({
        title: "",
        price: 0,
        quantity: 1,
        quote,
        email: infoUser.email
    })
    

    const handleClick = async (e) => {
        const dolar = await planProvider.getDolar()
        setPreferenceId('')
        const newProject = {
            ...project,
            'title': e.target.name,
            'price': e.target.value * dolar
        };

        await setProject(newProject)
    }

    useEffect(() => {
        handleBuy();
    }, [project])


    const handleBuy = async () => {
        const id = await pricingProvider.createPreference(project)
        if (id) {
            await setPreferenceId(id)
        }
    }

    return (
        <>
        <div className={style.pricingContainer}>
            <div className={style.titleCuestion}>
                <h3>{t("plansTitle.title")}</h3>
                <p>{t("plansTitle.subtitle")}</p>
            </div>
            {
                quote.purpose === 'web' 
                ? <Web handleClick={handleClick} preferenceId={preferenceId} t={t} project={project} plan={plan}/> 
                : <ECommerce handleClick={handleClick} preferenceId={preferenceId} t={t} project={project} plan={plan}/>
            }
        </div>
        </>
    );
};

export default Pricing;