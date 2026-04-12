'use client';

import { useState } from 'react';
import homeStyles from '../page.module.css';
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
      {/* ========== HERO ========== */}
      <section className={homeStyles.hero} style={{ minHeight: '50vh', padding: '120px 24px 60px' }}>
        <div className={homeStyles.heroBg} style={{ opacity: 0.1, backgroundColor: 'var(--midnight)' }}></div>
        <div className={homeStyles.heroContent}>
          <p className={homeStyles.heroLabel} style={{ opacity: 1, animation: 'none' }}>Contact</p>
          <h1 className={homeStyles.heroTitle} style={{ fontSize: '42px', fontWeight: 500, lineHeight: 1.2, margin: '0 0 24px 0', opacity: 1, animation: 'none' }}>
            Get in Touch
          </h1>
          <p className={homeStyles.heroSub} style={{ fontSize: '18px', lineHeight: 1.6, margin: '0 auto', opacity: 1, animation: 'none' }}>
            For general inquiries or technical information, you may contact 
            us using the details below.
          </p>
        </div>
      </section>

      {/* ========== CONTACT FORM ========== */}
      <section className="section" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <span className="label">Send a Message</span>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Contact Form</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 32px 0' }}>
                Use the form below to send us a message. We will respond 
                where appropriate within a reasonable timeframe.
              </p>

              {!submitted ? (
                <form className={contactStyles.form} onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '100%' }}>
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

                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--steel)', margin: '0 0 24px 0' }}>
                    This form is for general inquiries only. No financial advice, 
                    investment recommendations, or account-specific guidance will 
                    be provided through this channel.
                  </p>

                  <div className={contactStyles.formSubmit}>
                    <Button type="submit">Send Message</Button>
                  </div>
                </form>
              ) : (
                <div className={contactStyles.formSuccess} style={{ textAlign: 'left', width: '100%' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '16px', color: 'var(--gold)' }}>Message Received</h3>
                  <p style={{ fontSize: '17px', lineHeight: 1.6 }}>
                    Thank you for reaching out. Your message has been received 
                    and will be reviewed. We will respond where appropriate.
                  </p>
                </div>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== OPTIONAL INFORMATION ========== */}
      <section className="section section--alt" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <span className="label">Notice</span>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Optional Information</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                All requests are reviewed, and responses are provided where appropriate. 
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
                Requests that are incomplete or not aligned with the scope of the activity may not receive a response.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== FINAL NOTE ========== */}
      <section className={`section ${homeStyles.ctaBand}`} style={{ paddingBottom: '120px', paddingTop: '50px' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 500, lineHeight: 1.3, color: 'var(--gold)', margin: '0 0 40px 0' }}>
                Final Note
              </h2>
              <div className={contactStyles.disclaimerGrid} style={{ textAlign: 'left' }}>
                <div className={contactStyles.disclaimerItem} style={{ justifyContent: 'flex-start' }}>
                  <div className={contactStyles.disclaimerIcon}>✕</div>
                  <p style={{ fontSize: '15px' }}>No financial advice</p>
                </div>
                <div className={contactStyles.disclaimerItem} style={{ justifyContent: 'flex-start' }}>
                  <div className={contactStyles.disclaimerIcon}>✕</div>
                  <p style={{ fontSize: '15px' }}>No investment recommendations</p>
                </div>
                <div className={contactStyles.disclaimerItem} style={{ justifyContent: 'flex-start' }}>
                  <div className={contactStyles.disclaimerIcon}>✕</div>
                  <p style={{ fontSize: '15px' }}>No account-specific guidance</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
