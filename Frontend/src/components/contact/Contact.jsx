import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

  const [state, handleSubmit] = useForm("xrgnqgnz");
  if (state.succeeded) {
      return <p>Mensaje enviado!!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Name</label>
      <input id="name" type="text" name="name" />
      <ValidationError prefix="Name" field="text" errors={state.errors} />


      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />


      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default Contact