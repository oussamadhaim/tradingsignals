'use client';

import { useState } from 'react';
import styles from './Assessment.module.css';

const STEPS = [
  'start',
  'experience',
  'operations',
  'profile',
  'objective',
  'confirmations',
  'final',
];

export default function Assessment({ onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({
    marketExperience: '',
    derivatives: '',
    automatedSystems: '',
    activeAccount: '',
    riskApproach: '',
    capital: '',
    objective: '',
    confirmIndependent: false,
    confirmRisks: false,
    confirmNoAdvice: false,
    email: '',
  });

  const stepName = STEPS[currentStep];
  const totalSteps = STEPS.length - 2; // exclude start and final
  const progressStep = currentStep - 1; // 0-based for steps 1-5

  const update = (key, val) => setData(prev => ({ ...prev, [key]: val }));
  const next = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
  const canContinue = () => {
    switch (stepName) {
      case 'experience': return data.marketExperience && data.derivatives;
      case 'operations': return data.automatedSystems && data.activeAccount;
      case 'profile': return data.riskApproach && data.capital;
      case 'objective': return data.objective;
      case 'confirmations': return data.confirmIndependent && data.confirmRisks && data.confirmNoAdvice && data.email.includes('@');
      default: return true;
    }
  };

  const handleSubmit = () => {
    next();
  };

  const Radio = ({ name, value, label, current }) => (
    <label className={`${styles.radio} ${current === value ? styles.radioSelected : ''}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={current === value}
        onChange={() => update(name, value)}
      />
      <span className={styles.radioMark}></span>
      <span>{label}</span>
    </label>
  );

  const Checkbox = ({ name, label, checked }) => (
    <label className={`${styles.checkbox} ${checked ? styles.checkboxSelected : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => update(name, !checked)}
      />
      <span className={styles.checkMark}>{checked ? '✓' : ''}</span>
      <span>{label}</span>
    </label>
  );

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close">×</button>

        {/* Progress */}
        {currentStep > 0 && currentStep < STEPS.length - 1 && (
          <div className={styles.progress}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${(progressStep / totalSteps) * 100}%` }}
              ></div>
            </div>
            <span className={styles.progressLabel}>Step {progressStep} of {totalSteps}</span>
          </div>
        )}

        {/* ===== START ===== */}
        {stepName === 'start' && (
          <div className={styles.stepContent}>
            <span className={styles.stepLabel}>Restricted Access</span>
            <h2>Preliminary Assessment</h2>
            <p className={styles.restricted}>
              Restricted access — not all requests are accepted.
            </p>
            <p>
              The strategies provide access to automated, rule-based trading models, 
              designed to be deployed directly on your own trading account.
            </p>
            <p>
              This process takes less than one minute to complete.
            </p>
            <button className={styles.btn} onClick={next}>Start</button>
          </div>
        )}

        {/* ===== STEP 1: EXPERIENCE ===== */}
        {stepName === 'experience' && (
          <div className={styles.stepContent}>
            <span className={styles.stepLabel}>Experience</span>
            <h3>Do you currently operate in financial markets?</h3>
            <div className={styles.radioGroup}>
              <Radio name="marketExperience" value="no" label="No" current={data.marketExperience} />
              <Radio name="marketExperience" value="basic" label="Yes, at a basic level" current={data.marketExperience} />
              <Radio name="marketExperience" value="experienced" label="Yes, with experience" current={data.marketExperience} />
            </div>
            <h3>Are you familiar with derivatives (futures, options, CFDs)?</h3>
            <div className={styles.radioGroup}>
              <Radio name="derivatives" value="no" label="No" current={data.derivatives} />
              <Radio name="derivatives" value="partially" label="Partially" current={data.derivatives} />
              <Radio name="derivatives" value="yes" label="Yes" current={data.derivatives} />
            </div>
            <button className={styles.btn} onClick={next} disabled={!canContinue()}>Continue</button>
          </div>
        )}

        {/* ===== STEP 2: OPERATIONS ===== */}
        {stepName === 'operations' && (
          <div className={styles.stepContent}>
            <span className={styles.stepLabel}>Operations</span>
            <h3>Have you previously used automated or algorithmic trading systems?</h3>
            <p className={styles.hint}>Direct experience is not required.</p>
            <div className={styles.radioGroup}>
              <Radio name="automatedSystems" value="no" label="No" current={data.automatedSystems} />
              <Radio name="automatedSystems" value="basic" label="Yes, at a basic level" current={data.automatedSystems} />
              <Radio name="automatedSystems" value="yes" label="Yes" current={data.automatedSystems} />
            </div>
            <h3>Do you have an active trading account?</h3>
            <div className={styles.radioGroup}>
              <Radio name="activeAccount" value="no" label="No" current={data.activeAccount} />
              <Radio name="activeAccount" value="yes" label="Yes" current={data.activeAccount} />
            </div>
            <button className={styles.btn} onClick={next} disabled={!canContinue()}>Continue</button>
          </div>
        )}

        {/* ===== STEP 3: PROFILE ===== */}
        {stepName === 'profile' && (
          <div className={styles.stepContent}>
            <span className={styles.stepLabel}>Profile</span>
            <h3>What is your approach to risk?</h3>
            <div className={styles.radioGroup}>
              <Radio name="riskApproach" value="conservative" label="Conservative" current={data.riskApproach} />
              <Radio name="riskApproach" value="moderate" label="Moderate" current={data.riskApproach} />
              <Radio name="riskApproach" value="dynamic" label="Dynamic" current={data.riskApproach} />
            </div>
            <h3>Indicate an approximate amount of capital allocated (EUR or equivalent)</h3>
            <div className={styles.radioGroup}>
              <Radio name="capital" value="below-250k" label="Below 250,000 (generally not suitable)" current={data.capital} />
              <Radio name="capital" value="250k-500k" label="250,000 – 500,000" current={data.capital} />
              <Radio name="capital" value="500k-1m" label="500,000 – 1,000,000" current={data.capital} />
              <Radio name="capital" value="above-1m" label="Above 1,000,000" current={data.capital} />
            </div>
            <button className={styles.btn} onClick={next} disabled={!canContinue()}>Continue</button>
          </div>
        )}

        {/* ===== STEP 4: OBJECTIVE ===== */}
        {stepName === 'objective' && (
          <div className={styles.stepContent}>
            <span className={styles.stepLabel}>Objective</span>
            <h3>What is your primary objective?</h3>
            <div className={styles.radioGroup}>
              <Radio name="objective" value="diversification" label="Diversification" current={data.objective} />
              <Radio name="objective" value="automated" label="Use of automated systems" current={data.objective} />
              <Radio name="objective" value="active" label="Active trading" current={data.objective} />
              <Radio name="objective" value="other" label="Other" current={data.objective} />
            </div>
            <button className={styles.btn} onClick={next} disabled={!canContinue()}>Continue</button>
          </div>
        )}

        {/* ===== STEP 5: CONFIRMATIONS ===== */}
        {stepName === 'confirmations' && (
          <div className={styles.stepContent}>
            <span className={styles.stepLabel}>Confirmations</span>
            <h3>Confirm the following</h3>
            <div className={styles.checkGroup}>
              <Checkbox name="confirmIndependent" label="I operate independently in financial markets" checked={data.confirmIndependent} />
              <Checkbox name="confirmRisks" label="I understand the risks associated with derivatives and financial leverage" checked={data.confirmRisks} />
              <Checkbox name="confirmNoAdvice" label="I understand that no financial advice or portfolio management is provided" checked={data.confirmNoAdvice} />
            </div>
            <div className={styles.emailSection} style={{ marginTop: '32px' }}>
              <h3 style={{ marginBottom: '16px' }}>Contact Information</h3>
              <div className={styles.emailField}>
                <label htmlFor="assessmentEmail">Email</label>
                <input
                  type="email"
                  id="assessmentEmail"
                  placeholder="your@email.com"
                  value={data.email}
                  onChange={e => update('email', e.target.value)}
                />
              </div>
            </div>
            <button className={styles.btn} onClick={handleSubmit} disabled={!canContinue()} style={{ marginTop: '32px' }}>Submit Request</button>
          </div>
        )}

        {/* ===== FINAL ===== */}
        {stepName === 'final' && (
          <div className={styles.stepContent}>
            <span className={styles.stepLabel}>Complete</span>
            <h2>Request received</h2>
            <div className={styles.finalMessage} style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px', lineHeight: '1.6' }}>
              <p>
                The information provided will be used for a preliminary compatibility assessment.
              </p>
              <p>
                Due to the selective nature of the process, not all requests will receive a follow-up.
              </p>
              <p>
                If your profile is aligned with the requirements, you will be contacted for further discussion.
              </p>
            </div>
            <button className={styles.btn} onClick={onClose} style={{ marginTop: '40px' }}>Done</button>
          </div>
        )}
      </div>
    </div>
  );
}
