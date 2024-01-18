import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        joinMailingList: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Here you can add logic to send data to your backend or email service
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Message:
                <textarea name="message" value={formData.message} onChange={handleChange} />
            </label>
            <label>
                Join Mailing List:
                <input type="checkbox" name="joinMailingList" checked={formData.joinMailingList} onChange={handleChange} />
            </label>
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
