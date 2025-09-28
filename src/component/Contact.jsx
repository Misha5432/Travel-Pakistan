import React, { useState } from 'react'
import './Contact.css'

const initialState = { name: '', email: '', message: '' }

const Contact = () => {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) {
      errs.name = "Name is required"
    } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
      errs.name = "Name should contain only alphabets"
    }
    if (!form.email.trim()) {
      errs.email = "Email is required"
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errs.email = "Invalid email address"
    }
    if (!form.message.trim()) errs.message = "Message is required"
    return errs
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    // Store in localStorage
    const prev = JSON.parse(localStorage.getItem('contactResponses') || '[]')
    localStorage.setItem('contactResponses', JSON.stringify([...prev, form]))
    setSubmitted(true)
    setForm(initialState)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="contact-heading">Contact Us</h2>
            <p className="contact-subheading">
                Get in touch with professional tour maker
            </p>
            <div className="contact-field">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="off"
                    
                />
                {errors.name && <div className="contact-error">{errors.name}</div>}
            </div>
            <div className="contact-field">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="off"
                />
                {errors.email && <div className="contact-error">{errors.email}</div>}
            </div>
            <div className="contact-field">
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                />
                {errors.message && <div className="contact-error">{errors.message}</div>}
            </div>
            <button type="submit" className="contact-submit">
                Submit
            </button>
            {submitted && <div className="contact-success">Thank you! Your message has been submitted.</div>}
        </form>
        {/* Contact Info Card */}
        <div className="contact-info-card">
          <div className="contact-info-row">
            <span className="contact-icon" role="img" aria-label="address">📍</span>
            <span className="contact-info-label">Address:</span>
          </div>
          <div className="contact-info-value">
            123 Main Street, Islamabad, Pakistan
          </div>
          <div className="contact-info-row">
            <span className="contact-icon" role="img" aria-label="phone">📞</span>
            <span className="contact-info-label">Phone:</span>
          </div>
          <div className="contact-info-value">
            +92 300 1234567
          </div>
          <div className="contact-info-row">
            <span className="contact-icon" role="img" aria-label="email">✉️</span>
            <span className="contact-info-label">Email:</span>
          </div>
          <div className="contact-info-value">
            info@travelpakistan.com
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact