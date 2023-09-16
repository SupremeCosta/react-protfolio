import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Contact.css';
import React, { useState } from 'react';

function Contact() {
  // State for form fields and validation errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form fields (implement validation logic)
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, you can submit the data or perform other actions here
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  // Implement your validation logic here
  const validateForm = (data) => {
    const errors = {};
    // Add validation rules for each field (e.g., required, email format)
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    // Add more validation rules for other fields
    return errors;
  };

  return (
    <div>
      <Header />
      <section className='about-section'>
        <h2 className='my-title'>Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <span className='error'>{errors.name}</span>}
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
            />
            {/* Add validation error for email if needed */}
          </div>

          <div className='form-group'>
            <label htmlFor='contact'>Contact:</label>
            <input
              type='text'
              id='contact'
              name='contact'
              value={formData.contact}
              onChange={handleInputChange}
            />
            {/* Add validation error for contact if needed */}
          </div>

          <div className='form-group'>
            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
            />
            {/* Add validation error for message if needed */}
          </div>

          <button type='submit'>Submit</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
