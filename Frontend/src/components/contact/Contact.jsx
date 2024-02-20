import React, { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import style from "./Contact.module.css";
import Swal from "sweetalert2";

const Contact = () => {
  const [state, handleSubmit] = useForm("xrgnqgnz");
  const formRef = useRef(null); 

  const handleFormSubmit = async (event) => {
    await handleSubmit(event);
    if (state.succeeded) {
      Swal.fire({
        title: "Message has been sent!!",
        text: "We will contact you very soon.",
        icon: "success"
      });
      formRef.current.reset(); 
    }
  };

  return (
    <div className={style.containerContactUs}>
      <div className={style.flyerWebDevelop}>
        <div className={style.containerImage}>
          <img src="./images/logo-nav.png" alt="" />
          <span>By developers</span>
        </div>
      </div>
      <form ref={formRef} onSubmit={handleFormSubmit} className={style.form}>
        <div className={style.titleProject}>
          <h3>Contact Us</h3>
        </div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />
        <ValidationError prefix="Name" field="text" errors={state.errors} />

        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <div className={style.containerButton}>
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;