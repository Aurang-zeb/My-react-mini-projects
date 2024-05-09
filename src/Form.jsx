import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    destination: '',
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Form submission logic here
      console.log('Form submitted:', formData);
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.destination) {
      errors.destination = 'Destination is required';
    }
    if (!data.name) {
      errors.name = 'Name is required';
    }
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }
    // Add more validation rules as needed
    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className="form-container" style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
      <h1>Travel Form</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="destination" className="form-label">Destination</label>
              <select className="form-select" id="destination" name="destination" value={formData.destination} onChange={handleChange} required>
                <option value="">Select Destination</option>
                <option value="Tre Cime di Lavaredo">Tre Cime di Lavaredo</option>
                <option value="Swiss Alps">Swiss Alps</option>
                <option value="Luxembourg">Luxembourg</option>
              </select>
              {formErrors.destination && <div className="text-danger">{formErrors.destination}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
              {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
              {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
