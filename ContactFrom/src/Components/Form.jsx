import { useState } from 'react'
import "../afrom.css";

function Form() {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Name:</label><br />
              <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-control"
              />
            </div>
            <div className="form-row">
              <label>Email:</label><br />
              <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control"
              />
            </div>
            <div className="form-group">
             <label htmlFor="message" className="form-label">Message:</label>
              <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="form-control"
              />
            </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
         <h1>Thanks for your message!</h1>
      )}
    </div>
  );
}

export default Form
