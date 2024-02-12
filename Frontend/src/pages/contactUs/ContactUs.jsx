import { useState } from "react";
import Contact from "../../components/contact/Contact";
import CreateProyect from "../../components/createProyect/CreateProyect";

const ContactUs = () => {

  return (

    <div style={{ paddingTop: '150px'}} >
      <Contact/>

      <CreateProyect/>
    </div>


    
  );
}

export default ContactUs