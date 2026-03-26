'use client';

import { useState } from 'react';
import pageStyles from '../components/PageStyles.module.css';
import contactStyles from './page.module.css';
import SectionReveal from '../components/SectionReveal';
import Button from '../components/Button';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className={pageStyles.pageHeader}>
        <div className={pageStyles.pageHeaderInner}>
          <span className="label">Contact</span>
          <h1>Get in Touch</h1>
          <p>
            For general inquiries or technical information, you may contact 
            us using the details below.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section">
        <div className={contactStyles.formSection}>
          <SectionReveal>
            <div className={contactStyles.formHeader}>
              <span className="label">Send a Message</span>
              <h2>Contact Form</h2>
              <p style={{ margin: '0 auto' }}>
                Use the form below to send us a message. We will respond 
                where appropriate within a reasonable timeframe.
              </p>
            </div>
          </SectionReveal>

          {!submitted ? (
            <SectionReveal>
              <form className={contactStyles.form} onSubmit={handleSubmit}>
                <div className={contactStyles.formRow}>
                  <div className={contactStyles.formGroup}>
                    <label htmlFor="contactFirstName">First Name</label>
                    <input type="text" id="contactFirstName" placeholder="Your first name" required />
                  </div>
                  <div className={contactStyles.formGroup}>
                    <label htmlFor="contactLastName">Last Name</label>
                    <input type="text" id="contactLastName" placeholder="Your last name" required />
                  </div>
                </div>

                <div className={contactStyles.formGroup}>
                  <label htmlFor="contactEmail">Email</label>
                  <input type="email" id="contactEmail" placeholder="your@email.com" required />
                </div>

                <div className={contactStyles.formGroup}>
                  <label htmlFor="contactSubject">Subject</label>
                  <select id="contactSubject" required defaultValue="">
                    <option value="" disabled>Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Information</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={contactStyles.formGroup}>
                  <label htmlFor="contactMessage">Message</label>
                  <textarea 
                    id="contactMessage" 
                    placeholder="Please describe your inquiry..."
                    required
                  />
                </div>

                <p className={contactStyles.formDisclaimer}>
                  This form is for general inquiries only. No financial advice, 
                  investment recommendations, or account-specific guidance will 
                  be provided through this channel.
                </p>

                <div className={contactStyles.formSubmit}>
                  <Button type="submit">Send Message</Button>
                </div>
              </form>
            </SectionReveal>
          ) : (
            <SectionReveal>
              <div className={contactStyles.formSuccess}>
                <h3>Message Received</h3>
                <p>
                  Thank you for reaching out. Your message has been received 
                  and will be reviewed. We will respond where appropriate.
                </p>
              </div>
            </SectionReveal>
          )}
        </div>
      </section>

      {/* Please Note + Contact Info */}
      <section className="section section--alt">
        <div className={contactStyles.contactInner}>
          <SectionReveal>
            <div className={contactStyles.disclaimerGrid}>
              <div className={contactStyles.disclaimerItem}>
                <div className={contactStyles.disclaimerIcon}>✕</div>
                <p>No financial advice is provided</p>
              </div>
              <div className={contactStyles.disclaimerItem}>
                <div className={contactStyles.disclaimerIcon}>✕</div>
                <p>No investment recommendations are given</p>
              </div>
              <div className={contactStyles.disclaimerItem}>
                <div className={contactStyles.disclaimerIcon}>✕</div>
                <p>No account-specific guidance is offered</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={1}>
            <p className={contactStyles.disclaimerFooter}>
              All requests are reviewed, and responses are provided where appropriate. 
              Requests that are incomplete or not aligned with the scope of the activity may not receive a response.
            </p>
          </SectionReveal>

          <SectionReveal delay={2}>
            <div className={contactStyles.contactCard}>
              <div className={contactStyles.contactCardIcon}>✉</div>
              <h3>Email</h3>
              <a href="mailto:contact@tradingsignals.com" className={contactStyles.emailLink}>
                contact@tradingsignals.com
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
