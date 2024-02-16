import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import style from './Contact.module.css'

const Contact = () => {

  const [state, handleSubmit] = useForm("xrgnqgnz");
  if (state.succeeded) {
    return <p>Message has been sent!!</p>;
  }
  return (
    <div className={style.containerContactUs}>
      <div className={style.flyerWebDevelop}>
        <div className={style.containerImage}>
          <img src='./images/logo-nav.png' alt="" />
          <span>By developers</span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.titleProject}>
          <h3>Contact Us</h3>
        </div>
        <label htmlFor="email">Name</label>
        <input id="name" type="text" name="name" />
        <ValidationError prefix="Name" field="text" errors={state.errors} />


        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        
        <textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        

        <div className={style.containerButton}>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
        </div>
      </form>
    </div>
  );
}

export default Contact