
import styles from './pricing.module.css';
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Pricing = () => {
  return (
    <section className={styles.pricing}>
        <div className={styles.container}>
            {/* CARD 1 */}
            <div className={styles.header}>
                <img src= "./images/responsive.png" />
                <h1>Advanced Plan</h1>
            </div>

            <div className={styles.detail}>
                <p><span className={styles.check}><FaCheck /></span> <b>1</b> Chat 24/7</p>
                <p><span className={styles.check}><FaCheck /></span> <b>5</b> Dominio</p>
                <p><span className={styles.check}><FaCheck /></span> <b>5</b> Metodos de pago</p>
                <p><span className={styles.check}><FaCheck /></span> <b>5</b> Proteccion de datos</p>
                <p><span className={styles.check}><FaCheck /></span> <b>5</b> Garantia de reembolso por <b>30 dias</b></p>
                <p><span className={styles.nocheck}><MdCancel /></span> <b>5</b> Plantilla Personalizada</p>
                <p><span className={styles.nocheck}><MdCancel /></span> <b>5</b>+ 1 Administrador</p>
            </div>

            <div className={styles.price}>
                <p><sup>$</sup>0.09<sub>/mo</sub></p>
            </div>

            <button className={styles.cardbutton}>Get Started</button>

        </div>

            {/* CARD 2 */}
        <div className={styles.container}>
            <div className={styles.header}>
                <img src= "./images/responsive.png" />
                <h1>Business Plan</h1>
            </div>

            <div className={styles.detail}>
                <p><span className={styles.check}><FaCheck /></span> <b>1</b> Advanced security features, such as end-to-end encryption.</p>
                <p><span className={styles.check}><FaCheck /></span> <b>5</b> Priority access to new features and updates.</p>
                <p><span className={styles.check}><FaCheck /></span> <b>5</b> Dedicated account manager for personalized support.</p>
                <p><span className={styles.check}><FaCheck /></span> <b>5</b> Additional cloud storage with backup options.</p>
                <p><span className={styles.check}><FaCheck /></span> <b>5</b> Garantia de reembolso por <b>30 dias</b></p>
                <p><span className={styles.nocheck}><MdCancel /></span> <b>5</b> Customized solutions tailored to specific business needs.</p>
                <p><span className={styles.nocheck}><MdCancel /></span> <b>5</b>+ 1 Administrador</p>
            </div>

            <div className={styles.price}>
                <p><sup>$</sup>9.99<sub>/mo</sub></p>
            </div>

            <button className={styles.cardbutton}>Get Started</button>

        </div>

            {/* CARD 3 */}
        <div className={styles.container}>
            <div className={styles.header}>
                <img src= "./images/responsive.png" />  
                <h1>Enterprise Plan</h1>
            </div>

            <div className={styles.detail}>
                <p><span className={styles.check}><FaCheck /></span> <b>1</b> Chat 24/7</p>
                <p><span className={styles.check}><FaCheck /></span> <b>5</b> Dominio</p>
                <p><span className={styles.check}><FaCheck /></span> <b>5</b> Metodos de pago</p>
                <p><span className={styles.check}><FaCheck /></span> <b>5</b> Proteccion de datos</p>
                <p><span className={styles.check}><FaCheck /></span> <b>5</b> Garantia de reembolso por <b>30 dias</b></p>
                <p><span className={styles.nocheck}><MdCancel /></span> <b>5</b> Plantilla Personalizada</p>
                <p><span className={styles.nocheck}><MdCancel /></span> <b>5</b>+ 1 Administrador</p>
            </div>

            <div className={styles.price}>
                <p><sup>$</sup>59.99<sub>/mo</sub></p>
            </div>

            <button className={styles.cardbutton}>Get Started</button>

        </div>
        
    </section>
  );
};

export default Pricing;