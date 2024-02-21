
import styles from './Pricing.module.css';
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { MdStars } from "react-icons/md";
import { Wallet, initMercadoPago } from '@mercadopago/sdk-react'
import { useState } from 'react';
import { createPreference } from '../../utils/provider/pricingProvider/pricingProvider';


const Pricing = ({ quote }) => {
    const stringQuote = JSON.stringify(quote)
    // const [preferenceId, setPreferenceId] = useState(null)
    const [project, setProject] = useState({
        title: "",
        price: 0,
        quantity: 1,
        info: stringQuote
    })
    const handleClick = (title, price) => {
        setProject({
            ...project,
            title,
            price
        })
        handleBuy(project)
    }

    const handleBuy = async (project) => {
        try {
            const response = await createPreference(project)
            return response
        } catch (error) {
            console.log("ultimo error", error.message)
        }
        // if(id){
        //     setPreferenceId(id)
        // }
    }

    initMercadoPago('YOUR_PUBLIC_KEY', {
        locale: "es-AR"
    });
    return (
        <section className={styles.pricing}>
            <div className={styles.container}>
                {/* CARD 1 */}
                <div className={styles.header}>
                    <img src="./images/responsive.png" />
                    <h1>Basic Plan</h1>
                </div>

                <div className={styles.detail}>
                    <p><span className={styles.check}><FaCheck /></span> <b> 1 </b>  Website</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  Custom domain</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  SSL certificate</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  Advanced security features, such as end-to-end encryption.</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b> Priority access to new features and updates.</p>
                    <p><span className={styles.check}><FaCheck /></span> <b>20</b>  Fields per form</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  Personalized email</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Personalized website</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Subscriptions / Transactional portal</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Site Booster app</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Email automations</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Analytics app</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Professional logo</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Social media management</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Multi-site dashboard & admins</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  live chat</p>
                    <p><span className={styles.star}><MdStars /></span> <b></b>  24/7 customer care</p>
                </div>

                <div className={styles.price}>
                    <p><sup>$</sup>9.99<sub>/month</sub></p>
                </div>

                <button className={styles.cardbutton} onClick={() => handleClick("Basic Plan", 9.99)}>Get Started</button>

            </div>

            {/* CARD 2 */}
            <div className={styles.container}>
                <div className={styles.header}>
                    <img src="./images/medium.png" />
                    <h1>Business Plan</h1>
                </div>

                <div className={styles.detail}>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  Registration with other platforms.</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  Custom domain.</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b> Templates predefined.</p>
                    <p><span className={styles.check}><FaCheck /></span> <b>10</b>  Fields per form.</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Personalized email</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  SSL certificate.</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Priority access to new features and updates.</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Email automations</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Multi-site dashboard & admins</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  live chat</p>
                    <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  AI personalized live chat</p>
                </div>

                <div className={styles.price}>
                    <p><sup>$</sup>1500<sub>USD</sub></p>
                </div>

                <button className={styles.cardbutton} onClick={() => handleClick("Business Plan", 19.99)}>Get Started</button>

            </div>

            {/* CARD 3 */}
            <div className={styles.container}>
                <div className={styles.header}>
                    <img src="./images/basic.png" />
                    <h1>Enterprise Plan</h1>
                </div>

                <div className={styles.detail}>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  SSL certificate.</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  Registration with other platforms.</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  Custom domain.</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  Priority access to new features and updates.</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  Personalized website.</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  Personalized email.</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  Email automations</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  Multi-site dashboard & admins</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  live chat</p>
                    <p><span className={styles.check}><FaCheck /></span> <b></b>  AI personalized live chat</p>
                    <p><span className={styles.check}><FaCheck /></span> <b>+30</b>  Fields per form</p>
                </div>

                <div className={styles.price}>
                    <p><sup>$</sup>2300<sub>USD</sub></p>
                </div>

                <button className={styles.cardbutton} onClick={() => handleClick("enterprise Plan", 9.99)}>Get Started</button>

                {/* <Wallet initialization={{ preferenceId: "preferenceId" }} customization={{ texts:{ valueProp: 'smart_option'}}} /> */}

            </div>

        </section>
    );
};

export default Pricing;