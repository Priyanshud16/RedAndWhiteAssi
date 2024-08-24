import React, { useState } from 'react';

const PostForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    blogger_name: '',
    image: '',
    description: ''
  });

  const [errors, setErrors] = useState({
    category: '',
    title: '',
    blogger_name: '',
    image: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.category) {
      isValid = false;
      newErrors.category = 'Category is required.';
    }

    if (formData.title.length < 3) {
      isValid = false;
      newErrors.title = 'Title must be at least 3 characters long.';
    }

    if (formData.blogger_name.length < 3) {
      isValid = false;
      newErrors.blogger_name = 'Blogger name must be at least 3 characters long.';
    }

  

    if (formData.description.length < 3) {
      isValid = false;
      newErrors.description = 'Description must be at least 3 characters long.';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      fetch('https://redandwhitebackend.onrender.com/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        
      })
      .catch((error) => {
        console.error('Error:', error);
       
      });
    }
  };

  return (
    <div>
      <h1>Submit a Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={formData.category} onChange={handleChange}>
          <option value="">Select a category</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Technology">Technology</option>
          <option value="Sports">Sports</option>
          <option value="Business">Business</option>
          <option value="Health">Health</option>
          <option value="Science">Science</option>
        </select>
        {errors.category && <div style={{ color: 'red' }}>{errors.category}</div>}
        
        <br />
        
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required minLength="3" />
        {errors.title && <div style={{ color: 'red' }}>{errors.title}</div>}
        
        <br />
        
        <label htmlFor="blogger_name">Blogger Name:</label>
        <input type="text" id="blogger_name" name="blogger_name" value={formData.blogger_name} onChange={handleChange} required minLength="3" />
        {errors.blogger_name && <div style={{ color: 'red' }}>{errors.blogger_name}</div>}
        
        <br />
        
        <label htmlFor="image">Image URL:</label>
        <input type="url" id="image" name="image" value={formData.image} onChange={handleChange} required />
        {errors.image && <div style={{ color: 'red' }}>{errors.image}</div>}
        
        <br />
        
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} required minLength="3"></textarea>
        {errors.description && <div style={{ color: 'red' }}>{errors.description}</div>}
        
        <br />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
