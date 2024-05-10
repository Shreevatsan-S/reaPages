import React, { useState } from 'react';
import Header from '../components/Header';

const AddEventForm = () => {
  const [values, setValues] = useState({
    name: '',
    about: '',
    date: '',
    time: '',
    venue: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newErrors = validate(values);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit form here
    }
  };

  const validate = values => {
    let errors = {};
    if (!values.name) errors.name = 'Name is required.';
    if (!values.about) errors.about = 'About is required.';
    if (!values.date) errors.date = 'Date is required.';
    if (!values.time) errors.time = 'Time is required.';
    if (!values.venue) errors.venue = 'Venue is required.';
    return errors;
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    maxWidth: '600px',
    margin: '2rem auto',
    backgroundColor: '#ffffff',
    padding: '2.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e0e0e0',
  };

  const fieldStyle = {
    marginBottom: '2rem',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#333333',
    fontSize: '1.5rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #bdbdbd',
    borderRadius: '6px',
    fontSize: '1rem',
  };

  const errorStyle = {
    color: '#d32f2f',
    fontSize: '0.9em',
    marginTop: '0.5rem',
  };

  const submitButtonStyle = {
    width: '100%',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    backgroundColor: '#8e44ad',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={fieldStyle}>
          <label style={labelStyle}>Image</label>
          <input type="file" accept="image/*" style={inputStyle} />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Name</label>
          <input type="text" name="name" placeholder="Name" value={values.name} onChange={handleChange} style={inputStyle} />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>About</label>
          <textarea name="about" placeholder="About" rows="4" value={values.about} onChange={handleChange} style={inputStyle} />
          {errors.about && <p style={errorStyle}>{errors.about}</p>}
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Date</label>
          <input type="date" name="date" value={values.date} onChange={handleChange} style={inputStyle} />
          {errors.date && <p style={errorStyle}>{errors.date}</p>}
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Time</label>
          <input type="time" name="time" value={values.time} onChange={handleChange} style={inputStyle} />
          {errors.time && <p style={errorStyle}>{errors.time}</p>}
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Venue</label>
          <input type="text" name="venue" placeholder="Venue" value={values.venue} onChange={handleChange} style={inputStyle} />
          {errors.venue && <p style={errorStyle}>{errors.venue}</p>}
        </div>
        <div style={fieldStyle}>
          <input type="submit" value="Submit" style={submitButtonStyle} />
        </div>
      </form>
    </div>
  );
};

export default AddEventForm;
