import style from './Pricing.module.css';
import { FaCircleCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { useEffect, useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useTranslation } from 'react-i18next';
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import SpinnerLogin from "../spinners/spinnerLogin/SpinnerLogin";
import pricingProvider from "../../utils/provider/pricingProvider/pricingProvider";

const Pricing = ({ quote }) => {
    const [t, i18n] = useTranslation("global");

    const [seeMoreBasic, setSeeMoreBasic] = useState(false);
    const [seeMoreBusiness, setSeeMoreBusiness] = useState(false);
    const [seeMoreEnterprise, setSeeMoreEnterprise] = useState(false);
    const [loading, setLoading] = useState(false)
    const [preferenceId, setPreferenceId] = useState('')


    const infoUser = JSON.parse(localStorage.getItem('info'))

    initMercadoPago('TEST-a17e8b8f-91a1-4351-bc9c-cdb9d1033859', { locale: "es-AR" });


    const [project, setProject] = useState({
        title: "",
        price: 0,
        quantity: 1,
        quote,
        email: infoUser.email
    })

    const handleClick = async (e) => {
        setPreferenceId('')
        console.log('1')
        const newProject = {
            ...project,
            'title': e.target.name,
            'price': e.target.value
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
        <div className={style.pricingContainer}>
            <div className={style.titleCuestion}>
                <h3>Plans and pricing</h3>
                <p>Choose the right plan for your website and we will develop it</p>
            </div>

            <div className={style.containerCards}>
                <div className={style.cardBox} >
                    <div className={style.containerTitleAndDescripcion}>
                        <h4 style={{ color: '#DB319B' }}>{t("plans.BasicPlan.title")}</h4>
                        <p>For those looking to start their online presence in a simple yet effective way.</p>
                    </div>
                    <div className={style.containerPricingAndButton}>
                        <div className={style.containerValue}>
                            <h4 className={style.h4}>$100</h4>
                            <p className={style.p}>/per project</p>
                        </div>
                        <div className={style.containerButtonPay}>
                            <button
                                style={loading ? { display: 'none' } : { display: '' }}
                                className={style.buttonPay}
                                name="Basic Plan"
                                value='100'
                                onClick={handleClick}>
                                {t("plans.BasicPlan.button")}
                            </button>
                            {preferenceId && project.title === "Basic Plan" &&
                                <Wallet
                                    initialization={{ preferenceId: preferenceId }}
                                    customization={{ texts: { valueProp: 'smart_option' }, visual: { verticalPadding: '0px', buttonHeight: '55px' } }} />}
                        </div>
                    </div>
                    <div className={style.containerIncludes}>
                        <div className={style.specifications}>
                            <p><FaCircleCheck className={style.icon} />{t("plans.BasicPlan.sec1")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.BasicPlan.sec2")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.BasicPlan.sec3")}</p>
                            <p><FaCircleCheck className={style.icon} /> 10 {t("plans.BasicPlan.sec4")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.BasicPlan.sec10")}</p>
                            {seeMoreBasic ? <>
                                <p><MdCancel className={style.icon} /> {t("plans.BasicPlan.sec5")}</p>
                                <p><MdCancel className={style.icon} /> {t("plans.BasicPlan.sec6")}</p>
                                <p><MdCancel className={style.icon} />{t("plans.BasicPlan.sec7")}</p>
                                <p><MdCancel className={style.icon} />{t("plans.BasicPlan.sec8")}</p>
                                <p><MdCancel className={style.icon} />{t("plans.BasicPlan.sec9")}</p>
                                <p><MdCancel className={style.icon} />{t("plans.BasicPlan.sec11")}</p>
                            </> : <></>}
                            <div className={style.containerButton}>
                                <button
                                    className={style.buttonSeeMore}
                                    onClick={() => setSeeMoreBasic(!seeMoreBasic)}
                                >{seeMoreBasic ? 'Show Less' : 'Show More'}
                                    {seeMoreBasic ? <IoIosArrowDropup className={style.icon} /> : <IoIosArrowDropdown className={style.icon} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



                <div className={style.cardBox}>
                    <div className={style.containerTitleAndDescripcion}>
                        <h4 style={{ color: '#982090' }}>{t("plans.BusinessPlan.title")}</h4>
                        <p>Designed to enhance efficiency, security, and interactivity in your digital presence.</p>
                    </div>
                    <div className={style.containerPricingAndButton}>
                        <div className={style.containerValue}>
                            <h4 className={style.h4}>$200</h4>
                            <p className={style.p}>/per project</p>
                        </div>
                        <div className={style.containerButtonPay}>
                            <button className={style.buttonPay} name="Business Plan" value='200' onClick={handleClick}>{t("plans.BusinessPlan.button")}</button>
                            {
                                preferenceId && project.title === "Business Plan" &&
                                <Wallet
                                    initialization={{ preferenceId: preferenceId }}
                                    customization={{ texts: { valueProp: 'smart_option' }, visual: { verticalPadding: '0px', buttonHeight: '55px' } }} />
                            }
                        </div>
                    </div>
                    <div className={style.containerIncludes}>
                        <div className={style.specifications}>
                            <p><FaCircleCheck className={style.icon} />{t("plans.BusinessPlan.sec1")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.BusinessPlan.sec2")}</p>
                            <p><FaCircleCheck className={style.icon} /> {t("plans.BusinessPlan.sec3")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.BusinessPlan.sec5")}</p>
                            <p><FaCircleCheck className={style.icon} /> {t("plans.BusinessPlan.sec6")}</p>
                            {seeMoreBusiness ? <>
                                <p><FaCircleCheck className={style.icon} /> {t("plans.BusinessPlan.sec4")}</p>
                                <p><FaCircleCheck className={style.icon} /> 10 {t("plans.BusinessPlan.sec7")}</p>
                                <p><MdCancel className={style.icon} /> {t("plans.BusinessPlan.sec8")}</p>
                                <p><MdCancel className={style.icon} />{t("plans.BusinessPlan.sec9")}</p>
                                <p><MdCancel className={style.icon} />{t("plans.BusinessPlan.sec10")}</p>
                                <p><MdCancel className={style.icon} />{t("plans.BusinessPlan.sec11")}</p>
                            </> : <></>}
                            <div className={style.containerButton}>
                                <button
                                    className={style.buttonSeeMore}
                                    onClick={() => setSeeMoreBusiness(!seeMoreBusiness)}
                                >{seeMoreBusiness ? 'Show Less' : 'Show More'}
                                    {seeMoreBusiness ? <IoIosArrowDropup className={style.icon} /> : <IoIosArrowDropdown className={style.icon} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={style.cardBox}>
                    <div className={style.containerTitleAndDescripcion}>
                        <h4 style={{ color: '#5425fc' }}>{t("plans.EnterprisePlan.title")}</h4>
                        <p>Unlock your company's digital potential with features designed for growth.</p>
                    </div>
                    <div className={style.containerPricingAndButton}>
                        <div className={style.containerValue}>
                            <h4 className={style.h4}>$350</h4>
                            <p className={style.p}>/per project</p>
                        </div>
                        <div className={style.containerButtonPay}>
                            <button className={style.buttonPay} name="Enterprise Plan" value='350' onClick={handleClick}>{t("plans.EnterprisePlan.button")}</button>
                            {
                                preferenceId && project.title === "Enterprise Plan" &&
                                <Wallet
                                    initialization={{ preferenceId: preferenceId }}
                                    customization={{ texts: { valueProp: 'smart_option' }, visual: { verticalPadding: '0px', buttonHeight: '55px' } }} />
                            }
                        </div>
                    </div>
                    <div className={style.containerIncludes}>
                        <div className={style.specifications}>
                            <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec1")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec2")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec3")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec5")}</p>
                            <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec6")}</p>
                            {seeMoreEnterprise ? <>
                                <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec4")}</p>
                                <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec7")}</p>
                                <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec8")}</p>
                                <p><FaCircleCheck className={style.icon} />{t("plans.EnterprisePlan.sec9")}</p>
                                <p><FaCircleCheck className={style.icon} />+30 {t("plans.EnterprisePlan.sec10")}</p>
                                <p><FaCircleCheck className={style.icon} />Advanced Analytics Tools</p>
                            </> : <></>}
                            <div className={style.containerButton}>
                                <button
                                    className={style.buttonSeeMore}
                                    onClick={() => setSeeMoreEnterprise(!seeMoreEnterprise)}
                                >{seeMoreEnterprise ? 'Show Less' : 'Show More'}
                                    {seeMoreEnterprise ? <IoIosArrowDropup className={style.icon} /> : <IoIosArrowDropdown className={style.icon} />}

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;