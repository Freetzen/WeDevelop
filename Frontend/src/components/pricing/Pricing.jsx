
import axios from "axios"
import styles from './Pricing.module.css';
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { MdStars } from "react-icons/md";
import { useEffect, useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useTranslation } from 'react-i18next';

const Pricing = ({ quote }) => {
    const [t, i18n] = useTranslation("global");

    initMercadoPago('TEST-a17e8b8f-91a1-4351-bc9c-cdb9d1033859', {locale: "es-AR"});

    const [preferenceId, setPreferenceId] = useState('')

    const [project, setProject] = useState({
        title: "",
        price: 0,
        quantity: 1,
        quote
    })
    

    const createPreference = async() => {
        try {
            const response = await axios.post('http://localhost:3001/createpreference', project)
            const {id} = response.data
            return id
        }catch (error) {
            console.log(error.message)
        }
    }

    const handleClick = async(e) => {
        setPreferenceId('')
        
        const newProject = {
            ...project,
            'title': e.target.name,
            'price': e.target.value
        };
    
        await setProject(newProject);
        
        
    } 

    useEffect(() => {
        handleBuy();     
    }, [project])
    

    const handleBuy = async () => {
        const id = await createPreference()
        console.log('ID', id)
        if(id){
            await setPreferenceId(id)
        }
    }

    console.log('PREFERENCE', preferenceId)

    return (
        <>
        <section className={styles.pricing}>
            <div className={styles.container}>
                {/* CARD 1 */}
                <div className={styles.header}>
                    <img src="./images/responsive.png" />
                    <h1>{t("plans.BasicPlan.title")}</h1>
                </div>

                <div className={styles.detail}>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.BasicPlan.sec1")}</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.BasicPlan.sec2")}</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.BasicPlan.sec3")}</p>
                    <p><span className={styles.check}><FaCheck /></span> <b>10</b>  {t("plans.BasicPlan.sec4")}</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  {t("plans.BasicPlan.sec5")}</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  {t("plans.BasicPlan.sec6")}</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  {t("plans.BasicPlan.sec7")}</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  {t("plans.BasicPlan.sec8")}</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  {t("plans.BasicPlan.sec9")}</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  {t("plans.BasicPlan.sec10")}</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  {t("plans.BasicPlan.sec11")}</p>
                </div>

                <div className={styles.price}>
                    <p><sup>$</sup>9.99<sub>USD</sub></p>
                </div>


                <button className={styles.cardbutton} name="Basic Plan" value='9.99' onClick={handleClick}>{t("plans.BasicPlan.button")}</button>
                {
                    preferenceId && project.title === "Basic Plan" && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />
                }
                


            </div>

            {/* CARD 2 */}
            <div className={styles.container}>
                <div className={styles.header}>
                    <img src="./images/medium.png" />
                    <h1>{t("plans.BusinessPlan.title")}</h1>
                </div>

                <div className={styles.detail}>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.BusinessPlan.sec1")}</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.BusinessPlan.sec2")}</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.BusinessPlan.sec3")}.</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.BusinessPlan.sec4")}</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.BusinessPlan.sec5")}</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.BusinessPlan.sec6")}</p>
                    <p><span className={styles.check}><FaCheck /></span> <b>10</b>  {t("plans.BusinessPlan.sec7")}</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  {t("plans.BusinessPlan.sec8")}</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  {t("plans.BusinessPlan.sec9")}</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  {t("plans.BusinessPlan.sec10")}</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  {t("plans.BusinessPlan.sec11")}</p>
                </div>

                <div className={styles.price}>
                    <p><sup>$</sup>1500<sub>USD</sub></p>
                </div>
                
                <button className={styles.cardbutton} name="Business Plan" value='1500' onClick={handleClick}>{t("plans.BusinessPlan.button")}</button>
                {
                    preferenceId && project.title === "Business Plan" && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />
                }
               

            </div>

            {/* CARD 3 */}
            <div className={styles.container}>
                <div className={styles.header}>
                    <img src="./images/basic.png" />
                    <h1>{t("plans.EnterprisePlan.title")}</h1>
                </div>

                <div className={styles.detail}>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.EnterprisePlan.sec1")}</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.EnterprisePlan.sec2")}</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.EnterprisePlan.sec3")}</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.EnterprisePlan.sec4")}</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.EnterprisePlan.sec5")}</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.EnterprisePlan.sec6")}</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.EnterprisePlan.sec7")}</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.EnterprisePlan.sec8")}</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  {t("plans.EnterprisePlan.sec9")}</p>
                    <p><span className={styles.check}><FaCheck /></span> <b>+30</b>  {t("plans.EnterprisePlan.sec10")}</p>
                </div>

                <div className={styles.price}>
                    <p><sup>$</sup>2300<sub>USD</sub></p>
                </div>

                
                <button className={styles.cardbutton} name="Enterprise Plan" value='2300' onClick={handleClick}>{t("plans.EnterprisePlan.button")}</button>
                {
                    preferenceId && project.title === "Enterprise Plan" && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />
                }
              

                {/* <Wallet initialization={{ preferenceId: "preferenceId" }} customization={{ texts:{ valueProp: 'smart_option'}}} /> */}

            </div>


        </section>
           
            </>
    );
};

export default Pricing;