import { useState } from "react";

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (

    <div style={{ paddingTop: '150px', width: '100%'}} >
        <div style={{width: '100%', 
                      textAlign: 'center',
                      fontSize: '32px'}}>
            <h3>Contact us</h3>
        </div>
        <div style={{ width: '100%', marginTop: '50px'}}>
            <form onSubmit={handleSubmit} style={{width: '400px',
                                                  margin: '0px auto'}} >
            <div>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
    </div>
    
  );
}

export default ContactUs